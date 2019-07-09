// Variables
let newQuestionSelector;
let newQuestionCorrectAnswer;

// Launch the game, with the board hidden
const hideBoard = document.querySelector('.game-board');
// hideBoard.style.visibility = "hidden";
const hideResponse = document.querySelector('.response-section');
// hideResponse.style.visibility = "hidden";
const hideNext = document.querySelector('.next-btn');
// hideNext.style.visibility = "hidden";

// Click the start button to load the questions
const start = document.querySelector('button');
start.addEventListener('click', () => {
    // console.log("Start button clicked.")
    game.askQuestion();
})
const game = {
// Launch a question when the start button is clicked
askQuestion() {
    newQuestionSelector = questions[this.randomQuestion()];
    newQuestionCorrectAnswer = newQuestionSelector.correctAnswer;
    hideBoard.style.visibility = "visible";
    const questionDisplay = document.querySelector('.question');
    questionDisplay.innerText = newQuestionSelector.question;
    const categoryDisplay = document.querySelector('.category');
    categoryDisplay.innerText = "Category: " + newQuestionSelector.category;
    const answerDisplay = document.querySelectorAll(`.answers`);
    for (i = 0; i < 4; i++){
        answerDisplay[i].innerText = newQuestionSelector.answers[i]
    }
},

randomQuestion() {
    let random = Math.floor(Math.random() *3)
    return random;

},

checkAnswer (chosenAnswer)  {
    if(chosenAnswer === newQuestionCorrectAnswer){
        const correctAnswer = document.querySelector('.response-section');
        hideBoard.style.visibility = "hidden";
        correctAnswer.style.visibility = "visible";
        correctAnswer.innerText = "Correct!";
    } else {
        const wrongAnswer = document.querySelector('.response-section');
        hideBoard.style.visibility = "hidden";
        wrongAnswer.style.visibility = "visible";
        wrongAnswer.innerText = `Sorry, ${chosenAnswer} is wrong! The correct answer is ${newQuestionCorrectAnswer}.`;

    }

}
}

const answersContainer = document.querySelector('.answers-container');
answersContainer.addEventListener('click', (e) => {
    game.checkAnswer(e.target.innerText);
})