
const start = document.querySelector('button');
start.addEventListener('click', () => {
    console.log("Start button clicked.")
})





const answersContainer = document.querySelector('.answers-container');

answersContainer.addEventListener('click', (e) => {
    console.log(e.target.innerText);
})

