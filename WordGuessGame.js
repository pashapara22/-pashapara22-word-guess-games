let wordsList = ["delhi", "hyderabad", "banglore", "chennai", "mumbai", "pune", "jaipur", "calcutta"];

let rand = Math.ceil(Math.random() * wordsList.length - 1);
let answer = wordsList[rand];
console.log(answer);

let blankEle = document.getElementById('blanks');
let guessEle = document.getElementById('guess');
let btnEle = document.getElementById('submit');
let guesses = document.getElementById('numOfGuess');
let countEle = document.getElementById('count');

let count = 0;
let countId;

function displayingWord() {
    let displayWord = "";
    let word = 0;
    while (word < wordsList.length) {
        displayWord = displayWord + '_ ';
        //console.log(word);
        word++;
    }
    blankEle.textContent = displayWord;
    //console.log(displayWord);
}

displayingWord();
timer();

let guessesList = [];

function guessingWord() {
    let input = guessEle.value;
    if (input === '') {
        alert("Please enter the letter");
        //return;
    }

    input = input.toLowerCase();
    if (guessesList.includes(input)) {
        alert("Word Already guessed");
        guessEle.value = '';
    } else {
        guessesList.push(input);
        guessEle.value = '';
    }
    console.log(guessesList);
    //console.log(input);

    let guess = true;
    let output = '';
    let c = 0;
    while (c < answer.length) {
        if (guessesList.includes(answer[c])) { //c--0,1,2,....
            output += answer[c];
            //guess=true;
            console.log('1', c);
        } else {
            output += '_ ';
            guess = false;
            console.log('2', c);
        }
        c++;
        guesses.textContent = `${guessesList.length}`;


    }
    if (guess) {
        alert("You have guessed it RIGHT...!");
        rand = Math.ceil(Math.random() * wordsList.length - 1);
        answer = wordsList[rand];
        console.log(answer);
        guessesList = [];

        displayingWord();
        clearInterval(countId);

        count = 0;
        timer();
    }

    blankEle.textContent = output;
}


// let count=0;
// let countId;
function timer() {
    countId = setInterval(function() {
        countEle.textContent = count;
        count++;
    }, 1000);
}

btnEle.addEventListener("click", guessingWord);