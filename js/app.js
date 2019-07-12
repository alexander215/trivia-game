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
let computerScore = 0;
let userClickedAnswer = false;
let computerClickedAnswer = false;
let computerDecision;
let userChoseFirst = false;
let userCorrect = false;
let computerCorrect = false;
let answersIn = 0;
let userQuestionPoints = 0;
let computerQuestionPoints = 0;
let winner;


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
const questionNumberDisplay = document.querySelector('.question-number');
const startSection = document.querySelector(`.start`);
const infoPanel = document.querySelector('.info-panel');
const startRoundButton = document.querySelector('.start-round-btn');
const questionDisplay = document.querySelector('.question');
const categoryDisplay = document.querySelector('.category');
const answerDisplay = document.querySelectorAll(`.answers`);
const responseSectionHidden = document.querySelector('.response-section');
const userResponse = document.querySelector('.user-response');
const computerResponse = document.querySelector('.computer-response');
const pointSummary = document.querySelector('.point-summary');
const playerScoreboard = document.querySelector('.player-score');
const opponentScoreboard = document.querySelector('.opponent-score');
const subtitle = document.querySelector('.subtitle');
const nameInput = document.querySelector('.name-input');
const nameInputBox = document.querySelector('#user-input-name');
const nameBtn = document.querySelector('.name-btn');
const rulesBtn = document.querySelector('.rules-btn');
const preGameButtons = document.querySelector('.pre-game-buttons');
const rules = document.querySelector('.rules');
const scoreboard = document.querySelector('.scoreboard');
const finalScore = document.querySelector('.final-score');

rulesBtn.addEventListener('click', () => {
    rules.style.visibility = "visible";
    rulesBtn.style.display = "none";
})


// Click the start button to load the questions
const startBtn = document.querySelector('.start-btn');
startBtn.addEventListener('click', () => {
    rules.style.display = "none";
    preGameButtons.style.display = "none";
    nameInput.style.visibility = "visible";
})

nameBtn.addEventListener('click', (e) => {
    e.preventDefault();
    nameInput.style.display = "none";
    player1 = nameInputBox.value;
    player1 = new Player(player1);
    opponent = opponentNames[Math.floor(Math.random() * opponentNames.length)];
    // opponentNames.splice(oppenentNames.indexOf(opponent), 1);
    opponent = new Computer(opponent);
    infoPanel.innerText = `Welcome ${player1.name}. You will be competing with ${opponent.name}.`;
    startRoundButton.style.visibility = "visible";
    subtitle.style.display = "none";
    startRoundButton.innerText = `Begin Round ${currentRound}`;

})

startRoundButton.addEventListener('click', () => {
    startRoundButton.style.visibility = "hidden";
    answersContainer.style.visibility = "visible";
    userResponse.style.visibility = "hidden";
    scoreboard.style.visibility = "visible";
    game.askQuestion();
})

const answersContainer = document.querySelector('.answers-container');
answersContainer.addEventListener('click', (e) => {
    answersIn += 1;
    userClickedAnswer = true;
    game.checkAnswer(e.target.innerText);
})

hideNext.addEventListener('click', (e) => {
    game.askQuestion(e.target);
    responseSectionHidden.style.visibility = "hidden";
    hideNext.style.visibility = "hidden";
    answersContainer.style.visibility = "visible";
    // answersContainer.style.visibility = "hidden";

    userResponse.style.visibility = "hidden";

    
})

const game = {
askQuestion() {
    pointSummary.style.visibility = "hidden";
    if (currentRound === 6) {
        questionNumber = 0;
        finalScore.style.visibility = "visible";
        if (player1.score > opponent.score){
            winner = player1.name;
            finalScore.innerText = `Game over! ${player1.name} wins ${player1.score} to ${opponent.score}!`;
        } else if (opponent.score > player1.score) {
            winner = opponent.name;
            finalScore.innerText = `Game over! ${opponent.name} wins ${opponent.score} to ${player1.score}!`;
        } else{
            finalScore.innerText = `Well look at that, the game was a tie! ${player1.score} to ${opponent.score}!`;
        }
        
    } else {
    questionNumber += 1;
    userClickedAnswer = false;
    computerClickedAnswer = false;
    userChoseFirst = false;
    userCorrect = false;
    computerCorrect = false;
    questionTime = 14;
    userQuestionPoints = 0;
    computerQuestionPoints = 0;
    answersIn = 0;
    gameStats.style.visibility = "visible";
    roundTimer.innerText = `Time Left: ${questionTime + 1}`;
    roundNumber.innerText = `Round: ${currentRound}`;
    questionNumberDisplay.innerText = `Question: ${questionNumber} of 5`;
    roundScorePlayer.innerText = `Score: ${playerScore}`;
    newQuestionSelector = questions[this.randomQuestion()];
    newQuestionCorrectAnswer = newQuestionSelector.correctAnswer;
    hideBoard.style.visibility = "visible";
    questionDisplay.innerText = newQuestionSelector.question;
    for (i = 0; i < 4; i++){
        answerDisplay[i].innerText = newQuestionSelector.answers[i]
    }
    this.setTimer();
    this.computerChoice();
}
},
setTimer() {
    this.randomQuestion();
    const timer = setInterval(() => {
        roundTimer.innerText = `Time Left: ${questionTime}`;
        questionTime -= 1;
        if (questionTime === 0) {
            clearInterval(timer);
            roundTimer.innerText = `Time's up!`;
            this.checkAnswer('timeUp');
        } else if (userClickedAnswer === true){
            clearInterval(timer);
        }
    }, 1000)

},

computerChoice() {
    let computerChoiceTime = Math.floor(Math.random() * 14);
    computerDecision = newQuestionSelector.answers[Math.floor(Math.random() * 4)];
    computerResponse.style.visibility = "visible";
    const compTimer = setInterval(() => {
        if ((computerChoiceTime === 0) && (userClickedAnswer === true)) {
            clearInterval(compTimer);
            computerClickedAnswer = true;
            computerResponse.innerText = `${opponent.name} has made its choice! It chose ${computerDecision}.`;
            hideNext.style.visibility = "visible";
            this.computerScoreUpdate();
            
        } else if ((computerChoiceTime === 0) && (userClickedAnswer === false)) {
            clearInterval(compTimer);
            computerClickedAnswer = true;
            computerResponse.innerText = `${opponent.name} has made its choice!`;
            this.computerScoreUpdate();
            
        } else {
            computerResponse.innerText = `${opponent.name} is thinking for ${computerChoiceTime} more seconds...`;
            computerChoiceTime -= 1;
        }
    }, 1000)
    if (computerDecision === newQuestionCorrectAnswer){
        computerCorrect = true;            
    }
},

randomQuestion() {
    let random = Math.floor(Math.random() * (questions.length))
    return random;
},

checkAnswer (chosenAnswer)  {
    answersContainer.style.visibility = "hidden";
    if (chosenAnswer === 'timeUp'){
        userResponse.innerText = `Oops, you ran out of time! The correct answer is ${newQuestionCorrectAnswer}.`;
        computerResponse.innerText = `${opponent.name} has made its choice! It chose ${computerDecision}.`;
        userCorrect = false;
        hideNext.style.visibility = "visible";
    } else if((chosenAnswer === newQuestionCorrectAnswer) && (computerClickedAnswer === true)) {
        userResponse.innerText = `Yes, ${chosenAnswer} is Correct!`;
        computerResponse.innerText = `${opponent.name} has made its choice! It chose ${computerDecision}.`;
        hideNext.style.visibility = "visible";
        userCorrect = true;
    } else if((chosenAnswer === newQuestionCorrectAnswer) && (computerClickedAnswer === false)){
        userResponse.innerText = `Yes, ${chosenAnswer} is Correct!`;
        userChoseFirst = true;
        userCorrect = true;
    } else if ((chosenAnswer !== newQuestionCorrectAnswer) && (computerClickedAnswer === true)){
        userResponse.innerText = `Sorry, ${chosenAnswer} is wrong! The correct answer is ${newQuestionCorrectAnswer}.`;
        computerResponse.innerText = `${opponent.name} has made its choice! It chose ${computerDecision}.`;
        hideNext.style.visibility = "visible";
        userCorrect = false;
    } else if ((chosenAnswer !== newQuestionCorrectAnswer) && (computerClickedAnswer === false)){
        userResponse.innerText = `Sorry, ${chosenAnswer} is wrong! The correct answer is ${newQuestionCorrectAnswer}.`;
        userChoseFirst = true;
        userCorrect = false;
    }
    userResponse.style.visibility = "visible";
    this.userScoreUpdate();
},
userScoreUpdate() {
    if ((userCorrect === true) && (userChoseFirst === true)){
        userQuestionPoints = 2;
    } else if ((userCorrect === true)) {
        userQuestionPoints = 1;
    }
    playerScore += userQuestionPoints;
    if (answersIn === 2){
        this.questionPointSummary();
    }
},
computerScoreUpdate() {    
    if ((computerCorrect === true) && (userChoseFirst === false)){
        computerQuestionPoints = 2;
    } else if (computerCorrect === true) {
        computerQuestionPoints = 1;
    }
    computerScore += computerQuestionPoints;
    answersIn += 1;
    if (answersIn === 2){
        this.questionPointSummary();
    }

},
questionPointSummary() {
    pointSummary.style.visibility = "visible";
    if (roundNumber === 6){
        answersContainer.style.display = "none";
    }
    if (questionNumber === 5){
        answersContainer.style.visibility = "hidden";
        questionNumber = 0;
        hideNext.style.visibility = "hidden";
        pointSummary.style.visibility = "visible";
        computerResponse.style.visibility = "hidden";
        hideBoard.style.visibility = "hidden";
        if (playerScore > computerScore){
            player1.score += 1;
            playerScoreboard.innerText = `You: ${player1.score}`;
        } else if (computerScore > playerScore){
            opponent.score += 1;
            opponentScoreboard.innerText = `Opponent: ${opponent.score}`;
        };
        if (playerScore === 1) {
            pointSummary.innerText = `Round ${currentRound} is over. You earned ${playerScore} point, and ${opponent.name} earned ${computerScore}.`;
        } else {
            pointSummary.innerText = `Round ${currentRound} is over. You earned ${playerScore} points, and ${opponent.name} earned ${computerScore}.`;
        }
        currentRound += 1;
        playerScore = 0;
        computerScore = 0;
        startRoundButton.style.visibility = "visible";
        startRoundButton.innerText = `Begin Round ${currentRound}`;
    } else if (userQuestionPoints === 1){
    pointSummary.innerText = `You earned ${userQuestionPoints} point this question, and ${opponent.name} earned ${computerQuestionPoints}.`;
    } else{
    pointSummary.innerText = `You earned ${userQuestionPoints} points this question, and ${opponent.name} earned ${computerQuestionPoints}.`;
    }
}
}
