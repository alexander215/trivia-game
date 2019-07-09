// Variables
let newQuestionSelector;
let newQuestionCorrectAnswer;

// Launch the game, with the board hidden
const hideBoard = document.querySelector('.game-board');
hideBoard.style.visibility = "hidden";

// Click the start button to load the questions
const start = document.querySelector('button');
start.addEventListener('click', () => {
    // console.log("Start button clicked.")
    askQuestion();
})

// Launch a question when the start button is clicked
const askQuestion = () => {
    newQuestionSelector = questions[randomQuestion()];
    console.log(questions)
    // newQuestionSelector = question1;
    console.log(newQuestionSelector, "<--new question selector");
    // console.log(`${newQuestionSelector}.correctAnswer`);
    // console.log(newQuestionSelector.correctAnswer, "<--new question selector.correctAnswer");
    // console.log(question1.correctAnswer, "<--question1.correctAnswer");
    // console.log(parseInt(newQuestionSelector.correctAnswer), "<--parseInt(newQuestionSelector.correctAnswer)");
    newQuestionCorrectAnswer = newQuestionSelector.correctAnswer;
    // newQuestionCorrectAnswer = newQuestionSelector.concat(`.${correctAnswer}`);


    hideBoard.style.visibility = "visible";
    const questionDisplay = document.querySelector('.question');
    questionDisplay.innerText = newQuestionSelector.question;
    const answerDisplay = document.querySelectorAll(`.answers`);
    for (i = 0; i < 4; i++){
        answerDisplay[i].innerText = newQuestionSelector.answers[i]
    }
}

const randomQuestion = () => {
    let random = Math.floor(Math.random() *3)
    // let random = 'question';
    // random = random.concat(random1);
    // console.log(random1);
    // console.log(random);
    return random;

}

const answersContainer = document.querySelector('.answers-container');
answersContainer.addEventListener('click', (e) => {
    // console.log(e.target.innerText);
    // console.log(e.target.id);
    // checkAnswer(e.target.id);
    checkAnswer(e.target.innerText);



})

checkAnswer = (num) => {
    // console.log((question1.correctAnswer), "<question1[correctAnswer");
    // console.log(num, "<--num");
    // if (parseInt(num) === (newQuestionCorrectAnswer)) {
    if(num === newQuestionCorrectAnswer){
        console.log("Correct!")
    } else {
        console.log("WRong!")

    }

}