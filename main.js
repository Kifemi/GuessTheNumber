var randomNumber = 0;
var guessCounter = 0;
var guessedNumbers = [];

function start(){
    randomNumber = Math.floor(Math.random() * 101);
    hideShowReplayButton();
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
        guessCounter++;
        checkIfCorrect(number);
    }
}

function checkIfCorrect(number){
    if (number == randomNumber) {
        document.getElementById("messageBox").innerHTML = "Oikein arvattu! Arvausten lukumäärä: " + guessCounter + ".";
        hideShowReplayButton();
        return;
    }
    
    if (number > randomNumber) {
        document.getElementById("messageBox").innerHTML = "Luku on pienempi kuin arvaamasi luku."
    } else {
        document.getElementById("messageBox").innerHTML = "Luku on suurempi kuin arvaamasi luku."     
    } 
    document.getElementById("wrongGuesses").innerHTML = guessedNumbers;
}

function reloadPage(){
    location.reload();
}

function hideShowReplayButton(){
    var x = document.getElementById("newGame");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}