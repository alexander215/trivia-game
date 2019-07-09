// const categories = [Geography];

class Questions {
    constructor(q,a,c,cat){
        this.question = q;
        this.answers = a;
        this.correctAnswer = c;
        this.category = cat;
    }

}

const question1 = new Questions("What is the capital of California?", ["Sacramento", "Los Angeles", "San Francisco", "San Diego"], "Sacramento", "Geography");
const question2 = new Questions("How many continents are there?", ["4", "1", "7", "12"], "7", "Geography");
const question3 = new Questions("Ancient Rome was centered around what modern-day country?", ["Romeland", "Italy", "Romania", "Germany"], "Italy", "Geography");
const question4 = new Questions("What is the name of the river in Baghdad, Iraq", ["Danube", "Tigris", "Thames", "Nile"], "Tigris", "Geography");
const question5 = new Questions("Which country was neutral during World War II?", ["Switzerland", "France", "Germany", "Italy"], "Switzerland", "Geography");

const questions = [question1, question2, question3]

