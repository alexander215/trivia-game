class Questions {
    constructor(q,a,c){
        this.question = q;
        this.answers = a;
        this.correctAnswer = c;
    }
}

const question1 = new Questions("What is the capital of California?", ["Sacramento", "Los Angeles", "San Francisco", "San Diego"], "Sacramento");
const question2 = new Questions("How many continents are there?", ["4", "1", "7", "12"], "7");
const question3 = new Questions("Ancient Rome was centered around what modern-day country?", ["Romeland", "Italy", "Romania", "Germany"], "Italy");
const questions = [question1, question2, question3]