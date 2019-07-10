// Variables
let newQuestionSelector;
let newQuestionCorrectAnswer;
let numberOfRounds = 3;
let currentRound = 1;
let questionNumber = 0;
//set question time one second shorter than desired
let questionTime = 14;
let player1;
let opponent;
let playerScore = 0;


// Launch the game, with the board hidden
const hideBoard = document.querySelector('.game-board');
// hideBoard.style.visibility = "hidden";
const hideResponse = document.querySelector('.response-section');
// hideResponse.style.visibility = "hidden";
const hideNext = document.querySelector('.next-btn');
// hideNext.style.visibility = "hidden";
const gameStats = document.querySelector('.game-stats');
const roundNumber = document.querySelector('.round-number');
const roundScorePlayer = document.querySelector('.round-score');
const roundTimer = document.querySelector('.round-timer');
const startSection = document.querySelector(`.start`);
const infoPanel = document.querySelector('.info-panel');
const startRoundButton = document.querySelector('.start-round-btn');


// Click the start button to load the questions
const startBtn = document.querySelector('.start-btn');
// startBtn.style.display = "visible";
startBtn.addEventListener('click', () => {
    startBtn.style.display = "none";
    player1 = prompt(`Hello Player 1, what is your name?`);
    player1 = new Player(player1);
    opponent = "The Evil Computer";
    opponent = new Computer(opponent);
    infoPanel.innerText = `Welcome ${player1.name}. You will be competing with ${opponent.name}.`;
    startRoundButton.style.visibility = "visible";
    startRoundButton.innerText = "Begin Round 1";
})
startRoundButton.addEventListener('click', () => {
    startRoundButton.style.visibility = "hidden";
    game.askQuestion();
})

const answersContainer = document.querySelector('.answers-container');
answersContainer.addEventListener('click', (e) => {
    game.checkAnswer(e.target.innerText);
    
})

const game = {
askQuestion() {
    questionNumber += 1;
    console.log(questionNumber);
    gameStats.style.visibility = "visible";
    roundTimer.innerText = `Time Left: ${questionTime + 1}`;
    roundNumber.innerText = `Round: ${currentRound}`;
    roundScorePlayer.innerText = `Score: ${playerScore}`;
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
        playerScore +=1;
        roundScorePlayer.innerText = `Score: ${playerScore}`;
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

},
}


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
