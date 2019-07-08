
const start = document.querySelector('button');
start.addEventListener('click', () => {
    console.log("Start button clicked.")
    askQuestion();
})





const answersContainer = document.querySelector('.answers-container');

answersContainer.addEventListener('click', (e) => {
    // console.log(e.target.innerText);

})

const askQuestion = () => {
    const questionDisplay = document.querySelector('.question');
    questionDisplay.innerText = question1.question;
    // const answerDisplay = document.querySelector('#answer-1');
    // answerDisplay.innerText = question1.answer[0];
    const answerDisplay = document.querySelectorAll('.answers');
    for (i = 0; i < 4; i++){
        const answerDisplay = document.querySelectorAll(`.answers`);
        answerDisplay[i].innerText = question1.answers[i]


    }
}
