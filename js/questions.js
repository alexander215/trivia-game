// const categories = [Geography];
const arrayOfFour = [1,2,3,4];
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
const question6 = new Questions("Who was the first pilot to take a solo, non-stop flight across the Atlantic?", ["Captain Crunch", "Amelia Earhart", "Eddie Rickenbacker", "Charles Lindbergh"], "Charles Lindbergh", "People");
const question7 = new Questions("What was the name of the Russian royal family overthrown in the 1917 revolution?", ["Romanov", "Russianov", "Smirnov", "Petrov"], "Romanov", "People");
const question8 = new Questions("What was the name of the ship Charles Darwin traveled aboard?", ["The Bird", "Evolution", "The Beagle", "The Darwin"], "The Beagle", "Science");
const question9 = new Questions("Who was the first president of the United States?", ["Abraham Lincoln", "George Washington", "John F. Kennedy", "John Adams"], "George Washington", "People");
const question10 = new Questions("In what year did Neil Armstrong walk on the moon?", ["1969", "1960", "1976", "1945"], "1969", "Dates");
const question11 = new Questions("Which is not considered to be one of the Seven Wonders of the Ancient World?", ["The Great Pyramid of Giza", "The Lighthouse of Alexandria", "The Hanging Gardens of Babylon", "The Colosseum of Rome"], "The Colosseum of Rome", "Places");
const question12 = new Questions("What year did the Titanic sink?", ["1900", "1912", "1918", "1945"], "1912", "Dates");
const question13 = new Questions("What year did the UK hand sovereignty of Hong Kong to China?", ["1776", "1865", "1956", "1997"], "1997", "Dates");
const question14 = new Questions("Who was Britain’s first female prime minister?", ["Margaret Thatcher", "Queen Elizabeth I", "Theresa May", "Princess Diana"], "Margaret Thatcher", "People");
const question15 = new Questions("Who was not an original member of The Beatles?", ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Star"], "Ringo Star", "People");
const question16 = new Questions("What distinguishing feature is on the Liberty Bell?", ["A diamond", "A crack", "A window", "A four-leaf clover"], "A crack", "Places");
const question17 = new Questions("Before being called New York City, what other European name did it have?", ["New Paris", "New London", "New Berlin", "New Amsterdam"], "New Amsterdam", "Geography");
const question18 = new Questions("Which was the first state in the US to give women the right to vote?", ["California", "Delaware", "Florida", "Wyoming"], "Wyoming", "Geography");
const question19 = new Questions("What year was Queen Elizabeth II coronated?", ["1920", "1943", "1953", "1970"], "1953", "People");
const question20 = new Questions("Who became president when Abraham Lincoln was assassinated?", ["Andrew Johnson", "James Garfield", "Theodore Roosevelt", "Bill Clinton"], "Andrew Johnson", "People");
const question21 = new Questions("What was the name of the first nuclear submarine?", ["USS Hydrogen", "USS Nautilus", "USS Nucleus", "USS Radioactive"], "USS Nautilus", "Science");
const question22 = new Questions("How did Al Capone make most of his money?", ["Selling alcohol", "Robbing banks", "Printing fake cash", "Making responsible and cautious investments"], "Selling alcohol", "People");
const question23 = new Questions("When were the first Winter Olympic Games?", ["1807", "1900", "1924", "1964"], "1924", "Sports");
const question24 = new Questions("Where did Davy Crockett die?", ["New Jersey", "The Alamo", "The El Paso Gunfight", "Shootout at the OK Corral"], "The Alamo", "People");
const question25 = new Questions("What is the longest river in the world?", ["The Colorado River", "The Lazy River", "The Amazon River", "The Nile River"], "", "");

const questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13, question14, question15]

// console.log(question1.answers.sort(Math.random()));
// categories: geography, people, dates, science, places, sports
// const questionNEW = new Questions("", ["", "", "", ""], "", "");