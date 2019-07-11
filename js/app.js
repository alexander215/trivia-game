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

// Click the start button to load the questions
const startBtn = document.querySelector('.start-btn');
// startBtn.style.display = "visible";
startBtn.addEventListener('click', () => {
    startBtn.style.display = "none";
    player1 = prompt(`Hello Player 1, what is your name?`);
    player1 = new Player(player1);
    // opponent = "The Evil Computer";
    opponent = opponentNames[Math.floor(Math.random() * opponentNames.length)];
    // opponentNames.splice(oppenentNames.indexOf(opponent), 1);
    opponent = new Computer(opponent);
    infoPanel.innerText = `Welcome ${player1.name}. You will be competing with ${opponent.name}.`;
    startRoundButton.style.visibility = "visible";
    startRoundButton.innerText = `Begin Round ${currentRound}`;
})
startRoundButton.addEventListener('click', () => {
    startRoundButton.style.visibility = "hidden";
    answersContainer.style.visibility = "visible";
    userResponse.style.visibility = "hidden";
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
    // if (questionNumber === 2){
    //     answersContainer.style.visibility = "hidden";
    //     questionNumber = 0;
    //     // hideNext.style.visibility = "hidden";
    //     pointSummary.style.visibility = "visible";
    //     computerResponse.style.visibility = "hidden";
    //     hideBoard.style.visibility = "hidden";
    //     console.log("can you see me?");
    //     if (playerScore === 1) {
    //         pointSummary.innerText = `Round ${currentRound} is over. You earned ${playerScore} point, and ${opponent.name} earned ${computerScore}.`;
    //     } else {
    //         pointSummary.innerText = `Round ${currentRound} is over. You earned ${playerScore} points, and ${opponent.name} earned ${computerScore}.`;
    //     }
    //     currentRound += 1;
    //     startRoundButton.style.visibility = "visible";
    //     startRoundButton.innerText = `Begin Round ${currentRound}`;
    // } else 
    if (currentRound === 5) {
        questionNumber = 0;
        console.log("this is round 5")
        hideBoard.style.visibility = "visible";
        hideBoard.innerText = "Game over!";
        // computerResponse.style.visibility = "hidden";
        // if (playerScore === 1) {
        //     pointSummary.innerText = `GAME OVER! Round ${currentRound} is over. You earned ${playerScore} point, and ${opponent.name} earned ${computerScore}.`;
        // } else {
        //     pointSummary.innerText = `GAME OVER! Round ${currentRound} is over. You earned ${playerScore} points, and ${opponent.name} earned ${computerScore}.`;
        // }
    } else {
    console.log(`rrrround ${currentRound}`)
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
    console.log(questionNumber);
    gameStats.style.visibility = "visible";
    roundTimer.innerText = `Time Left: ${questionTime + 1}`;
    roundNumber.innerText = `Round: ${currentRound}`;
    questionNumberDisplay.innerText = `Question: ${questionNumber} of 5`;
    roundScorePlayer.innerText = `Score: ${playerScore}`;
    newQuestionSelector = questions[this.randomQuestion()];
    newQuestionCorrectAnswer = newQuestionSelector.correctAnswer;
    hideBoard.style.visibility = "visible";
    questionDisplay.innerText = newQuestionSelector.question;
    // categoryDisplay.innerText = "Category: " + newQuestionSelector.category;
    // const array = [1,2,3,4];
    // let questionsRandom = [this.randomAnswer()],
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
        // console.log(questionTime);
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
    let computerChoiceTime = Math.floor(Math.random() * 4);
    computerDecision = newQuestionSelector.answers[Math.floor(Math.random() * 4)];
    computerResponse.style.visibility = "visible";
    const compTimer = setInterval(() => {
        if ((computerChoiceTime === 0) && (userClickedAnswer === true)) {
            clearInterval(compTimer);
            computerClickedAnswer = true;
            computerResponse.innerText = `${opponent.name} has made its choice! It chose ${computerDecision}.`;
            console.log(computerDecision, "<--computer chose after user chose");
            hideNext.style.visibility = "visible";
            this.computerScoreUpdate();
            
        } else if ((computerChoiceTime === 0) && (userClickedAnswer === false)) {
            clearInterval(compTimer);
            computerClickedAnswer = true;
            computerResponse.innerText = `${opponent.name} has made its choice!`;
            console.log(computerDecision, "<--computer chose before user chose");
            // userResponse.style.visibility = "visible";
            this.computerScoreUpdate();
            
        } else {
            computerResponse.innerText = `${opponent.name} is thinking for ${computerChoiceTime} more seconds...`;
            computerChoiceTime -= 1;
        }
        if (computerDecision === newQuestionCorrectAnswer){

        }
    }, 1000)
    if (computerDecision === newQuestionCorrectAnswer){
        computerCorrect = true;
            
    }

},

randomQuestion() {
    let random = Math.floor(Math.random() * (questions.length - 1))
    return random;

},

checkAnswer (chosenAnswer)  {
    // hideBoard.style.visibility = "hidden";
    // answersContainer.style.visibility = "hidden";
    if (chosenAnswer === 'timeUp'){
        userResponse.innerText = `Oops, you ran out of time!`;
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
        // playerScore +=1;
        // roundScorePlayer.innerText = `Score: ${playerScore}`;
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
    // hideNext.style.visibility = "visible";
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
    if (questionNumber === 2){
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
        console.log(player1.score, "<player 1.score");
        console.log(opponent.score, "<opponent.score");
        if (playerScore === 1) {
            pointSummary.innerText = `Round ${currentRound} is over. You earned ${playerScore} point, and ${opponent.name} earned ${computerScore}.`;
        } else {
            pointSummary.innerText = `Round ${currentRound} is over. You earned ${playerScore} points, and ${opponent.name} earned ${computerScore}.`;
        }
        currentRound += 1;
        playerScore = 0;
        startRoundButton.style.visibility = "visible";
        startRoundButton.innerText = `Begin Round ${currentRound}`;
    } else if (userQuestionPoints === 1){
    pointSummary.innerText = `You earned ${userQuestionPoints} point this question, and ${opponent.name} earned ${computerQuestionPoints}.`;
    } else{
    pointSummary.innerText = `You earned ${userQuestionPoints} points this question, and ${opponent.name} earned ${computerQuestionPoints}.`;
    }
    
}
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
