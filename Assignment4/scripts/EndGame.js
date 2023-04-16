// allows us to grab variables from the url
const params = new URLSearchParams(window.location.search);
// passing through the variables from the url into our own variables so we can use them
let wrong = params.get("wrong");
let word = params.get("word");
initialize();
function initialize(){
    checkIfWon();
    wordNotEntered();

    // setting up the buttons for the player options
    document.getElementById("playerOptions").innerHTML =
        "<a href='index.html'><button id='playAgain'>Play Again</button></a>";
}
function checkIfWon(){
    // if they got 7 letters wrong they lost so display the proper title and image
    if(wrong.includes("7")){
        document.getElementById("outcome").innerHTML = "You Lost!";
        document.getElementById("finalImg").innerHTML = "<img src='./img/hangman7.png' alt='final Image'>";
    }else{
        // if wrong isnt 7 then that means they guessed the word correctly and won
        // output the proper titles
        document.getElementById("outcome").innerHTML = "You Won!";
        // update the image based on how many letters they got wrong.
        document.getElementById("finalImg").innerHTML = "<img src='./img/hangman" + (parseInt(wrong) + 1) + ".png' alt='final Image'>";
    }
}
function wordNotEntered(){
    // if there was no word entered, override the title saying
    // there was no word entered
    if(word.length === 0) {
        document.getElementById("outcome").innerHTML = "No Word Was Entered!"
    }else{
        document.getElementById("wordGuessed").innerHTML = "The word was: "+ word;
    }
}