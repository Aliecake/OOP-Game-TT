/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 /**
  * Game.js to create a Game class with methods for starting and ending the game,
  *  handling interactions, getting a random phrase,
  *  checking for a win, and removing a life from the scoreboard.
  */
 class Game {
    constructor(phrases) {
       this.phrases = phrases;
       this.phrase = this.getPhrase();
       this.lives = 5;
       this.guessedLetters = [];
       this.correctGuess = false;
       this.active = true;
       this.win = false;
    }
    //methods
    start() {
        overlayToggle();
        displayBoard(this);
    }
    end() {
        phrases.createElement(`div`, `lose`, `overlay`, `You Lost! Try again`, 3);
        //prevent overlay from toggling on keypress
        this.active = false;
        overlayToggle();
    }
    getPhrase() {
       return this.random(this.phrases);
    }
    interaction(guess) {
        this.correctGuess = false;
        this.winCheck();
        this.phrase.split('').forEach(letter => {
            if(guess.toLowerCase() === letter.toLowerCase()) {
                this.correctGuess = true;
                //correct guess highlighting
                phrases.letterHighlight(letter);
            }
        });
        this.killLife();
    }
    killLife() {
        //remove a life
        if(!this.correctGuess) {
            document.querySelectorAll('.tries img')[this.lives - 1].setAttribute(`src`, `images/lostHeart.png`);
            this.lives -= 1;
        }
        if(this.lives === 0 && this.active) {
            this.end();
        }
    }
    winCheck() {
       
        this.filteredPhrase = this.phrase.split('').filter((letter) => {
            return !phrases.regex.test(letter);
        });

        if (this.filteredPhrase.length === document.querySelectorAll(`.show`).length){
            phrases.createElement(`div`, `win`, `overlay`, `You Won! Play again?`, 3);
            overlayToggle();
        }
        //check if phrase complete
       // console.log(document.querySelectorAll('.letter'))
    }

    random(list) {
        return list[Math.floor(Math.random() * list.length)];
    }
    //remove li's & game over message
    reset() {
        this.active = true;
        document.getElementById(`game-over-message`).textContent = '';
        document.querySelectorAll(`li`).forEach(el => {
            if(!el.classList.contains('tries')) {
                el.classList.remove(`show`);
                el.parentNode.removeChild(el);
            }
        });
    }
 }