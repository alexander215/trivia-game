// Variables
let newQuestionSelector;
let newQuestionCorrectAnswer;
let numberOfRounds = 3;
let currentRound = 1;
//set question time one second shorter than desired
let questionTime = 14;

// Launch the game, with the board hidden
const hideBoard = document.querySelector('.game-board');
// hideBoard.style.visibility = "hidden";
const hideResponse = document.querySelector('.response-section');
// hideResponse.style.visibility = "hidden";
const hideNext = document.querySelector('.next-btn');
// hideNext.style.visibility = "hidden";
const gameStats = document.querySelector('.game-stats');
const roundNumber = document.querySelector('.round-number');
const roundTimer = document.querySelector('.round-timer');

// Click the start button to load the questions
const start = document.querySelector('.start-btn');
start.addEventListener('click', () => {
    const hideStartButton = document.querySelector('.start-btn');
    hideStartButton.style.visibility = "hidden";
    // console.log("Start button clicked.")
    game.askQuestion();

})

const game = {
// round() {
//     for (let i = 1; i <= numberOfRounds; i++) {
//         currentRound = (i - 1);
        
//         console.log(currentRound);
//         this.askQuestion();
//     }
// },
// Launch a question when the start button is clicked
askQuestion() {
    gameStats.style.visibility = "visible";
    roundTimer.innerText = `Time Left: ${questionTime + 1}`;
    roundNumber.innerText = `Round: ${currentRound}`;
    newQuestionSelector = questions[this.randomQuestion()];
    newQuestionCorrectAnswer = newQuestionSelector.correctAnswer;
    hideBoard.style.visibility = "visible";
    const questionDisplay = document.querySelector('.question');
    questionDisplay.innerText = newQuestionSelector.question;
    const categoryDisplay = document.querySelector('.category');
    categoryDisplay.innerText = "Category: " + newQuestionSelector.category;
    const answerDisplay = document.querySelectorAll(`.answers`);
    const array = [1,2,3,4];
    // let questionsRandom = [this.randomAnswer()],
    for (i = 0; i < 4; i++){
        answerDisplay[i].innerText = newQuestionSelector.answers[i]
    }
    this.setTimer();
},
setTimer() {
    this.randomQuestion();
    const timer = setInterval(() => {
        roundTimer.innerText = `Time Left: ${questionTime}`;

        console.log(questionTime);
        questionTime -= 1;
        if (questionTime === 0) {
            clearTimeout(timer);
            roundTimer.innerText = `Time Left: Time's up!`
        }
    }, 1000)

},

randomQuestion() {
    let random = Math.floor(Math.random() * (questions.length - 1))
    return random;

},

checkAnswer (chosenAnswer)  {
    const responseSectionHidden = document.querySelector('.response-section');
    hideBoard.style.visibility = "hidden";
    if(chosenAnswer === newQuestionCorrectAnswer){
        responseSectionHidden.innerText = "Correct!";
    } else {
        responseSectionHidden.innerText = `Sorry, ${chosenAnswer} is wrong! The correct answer is ${newQuestionCorrectAnswer}.`;
    }
    responseSectionHidden.style.visibility = "visible";
    hideNext.style.visibility = "visible";
    hideNext.addEventListener('click', (e) => {
        this.askQuestion(e.target);
        responseSectionHidden.style.visibility = "hidden";
        hideNext.style.visibility = "hidden";
    })

}
}

const answersContainer = document.querySelector('.answers-container');
answersContainer.addEventListener('click', (e) => {
    game.checkAnswer(e.target.innerText);
})

// randomAnswer() {
//     let simpleArray = [1,2,3,4];
//     let reorgArray = [];
//     let j = 3;
//     for (let i = 0; i < 4; i++) {
//         let num = (Math.floor(Math.random() * (j)));
//         reorgArray.push(num); 
//     }
//     j -= 1;

//     console.log(reorgArray);
// },


// randomOrderQuestions(array) {
//     let currentAnswersIndex = array.length, tempValue, randomIndex;
//     while (0 !== currentAnswersIndex) {
//         randomIndex = Math.floor(Math.random() * tempValue);
//         tempValue -= 1;
//         tempValue = array[currentAnswersIndex];
//         array[currentAnswersIndex] = array[randomIndex];
//         array[randomIndex] = tempValue;
//     }
//     // return array;
//     return array;
// },
