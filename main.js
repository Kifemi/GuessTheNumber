var randomNumber = 0;
var guessCounter = 0;
var quessedNumbers = [];

function start(){
    randomNumber = Math.floor(Math.random() * 101);
    console.log(randomNumber);
}

function guessButtonPressed(){
    var guess = parseInt(document.getElementById("guessField").value);

    isValidGuess(guess);
}

function isValidGuess(number){
    if (!Number.isInteger(number)) {
        document.getElementById("messageBox").innerHTML = "Käytä vain numeroita!"
        return false;
    } else if (number > 100 || number < 1) {
        document.getElementById("messageBox").innerHTML = "Luvun tulee olla väliltä 1-100!"
        return false;
    } else if (guessedNumbers.includes(number)) {
        document.getElementById("messageBox").innerHTML = "Olet jo yrittänyt kyseistä lukua."
        return false;
    } else {
        guessedNumbers.push(number);
        checkIfCorrect();
    }
}

function checkIfCorrect(){
    if(guess == randomNumber){
        guessCounter++;
        document.getElementById("messageBox").innerHTML = "Oikein arvattu! Arvausten lukumäärä: " + guessCounter + ".";
    } else if (guess > randomNumber) {
        document.getElementById("messageBox").innerHTML = "Luku on pienempi kuin arvaamasi luku."
        document.getElementById("wrongGuesses").innerHTML = guessedNumbers;
    } else {
        document.getElementById("messageBox").innerHTML = "Luku on suurempi kuin arvaamasi luku."
        document.getElementById("wrongGuesses").innerHTML = guessedNumbers;
    } 
}