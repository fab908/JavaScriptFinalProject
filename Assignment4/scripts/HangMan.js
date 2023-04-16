// keeps track of how many the user got wrong
let wrong = 0;
// keeps track of how many the user got right
let right = 0;
// holds the amount of spaces are in the word to be guessed
let spaces = 0;
// boolean to decide when the game is over
let gameover = false;
// prompting to enter a word
let word = prompt("Enter a Word");
// if the word is empty then the user is sent to the 'EndGame' page where they will be given options
if(word.length === 0){
    window.location.href= `playerOptions.html?word=${word}&wrong=${wrong}`;
}
// initializing the game to be played
initializeGame();

function initializeGame(){
    /*
          Steps to initialize the game:
            1. create the buttons for the letter options:
                    using a function created below to create the buttons instead of manually entering 26 buttons
            2. set up how many letters the user entered for the word to be guessed by looping through
               how many letters the word contains, and adding a paragraph tag with an '_' so the
               user knows how many letters they should be guessing for.

     */
    document.getElementById("letterOptions").innerHTML = createButton("A")
        + createButton("B") + createButton("C") + createButton("D") + createButton("E")
        + createButton("F") + createButton("G") + createButton("H") + createButton("I")
        + createButton("J") + createButton("K") + createButton("L") + createButton("M")
        + createButton("N") + createButton("O") + createButton("P") + createButton("Q")
        + createButton("R") + createButton("S") + createButton("T") + createButton("U")
        + createButton("V") + createButton("W") + createButton("X") + createButton("Y")
        + createButton("Z");
    for(let i = 0; i < word.length; i++){
        // if there is a space in the word to guess
        if(word[i].includes(" ")){
            // setting the id to "space" so that we can adjust the margin to properly separate
            // the words.
            document.getElementById("wordToGuess").innerHTML += "<p id=space></p>";
            document.getElementById("space").style.marginLeft = "20px";
            spaces ++;
        }else{
            // if its one word just add the letter normally with the '_'
            document.getElementById("wordToGuess").innerHTML += "<p id=letter" + i + ">_</p>";
        }
    }
}
/*
    function to create a button:
        simply takes in a string variable intended for a single letter,
        and returns a string value that contains what each button needs adding the specific
        letter where needed.
 */
function createButton(letter){
    return "<button id='" + letter + "' onclick='buttonPressed(" + letter + ")'>" + letter + "</button>";
}
/*
    When a button is pressed for their guess:
        1. Check if the letter they guessed is in the word the user entered in.
           if word does contain the letter, take out the '_' and display the letter they got correct.
        2. if the letter was correct then make the button green, else make it red.
        3. disable the button so it cannot be clicked again.
 */
function buttonPressed(Id) {
        let correct = false;

        for(let i = 0; i < word.length; i++){
            // this returns -1 if it wasnt found
            if(Id.innerHTML.toLowerCase().indexOf(word[i].toLowerCase()) >= 0){
                correct = true;
                document.getElementById("letter" + i).innerHTML = word[i];
                right ++;
            }
        }
        if(correct == true){
            Id.style.backgroundColor= 'GREEN';
            Id.disabled = true;
        }else{
            Id.style.backgroundColor= 'RED';
            Id.disabled = true;
            wrong ++;
            if(wrong < 7){
                document.getElementById("picture").src="./img/hangman" + (wrong + 1) + ".png";
            }

        }
        if(wrong == 7){
            gameover = true;
        }
        // subtracting the spaces from the word length to verify when the person has
        // the right word
        if(right === (word.length - spaces) && wrong != 7){
            gameover = true;
        }
        if(gameover == true){
            // passing the word variable through the url
            window.location.href= `playerOptions.html?word=${word}&wrong=${wrong}`;
        }
}

