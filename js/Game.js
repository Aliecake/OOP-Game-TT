/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 /**
  * Game.js to create a Game class with methods for starting and ending the game,
  *  handling interactions, getting a random phrase,
  *  checking for a win, and removing a life from the scoreboard.
  */
 class Game {
    constructor() {
        //phrases list should be moves here. because f*ck you
       this.phrases = [
        `Wild Rattata Appeared!`,
        `I choose you, Pikachu!`,
        `Squirtle Squad`,
        `It's super effective`,
        `Magikarp used flail`,
        `Not very effective`,
      ];
       this.missed = 0;
       this.guessedLetters = [];
       this.correctGuess = false;
       this.active = true;
       this.win = false;
    }
    //methods
    startGame() {
        overlayToggle();
        //rename activePhrase
        phrase.activePhrase = this.getRandomPhrase(this.phrases);
        displayBoard(this);
    }
    end() {
        phrases.createElement(`div`, `lose`, `overlay`, `You Lost! Try again`, 3);
        //prevent overlay from toggling on keypress
        this.active = false;
        overlayToggle();
    }
    handleInteraction(guess) {
        this.correctGuess = false;
        this.winCheck();
        phrase.activePhrase.split('').forEach(letter => {
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
        if(!this.correctGuess && this.missed < 5) {
            document.querySelectorAll('.tries img')[this.missed].setAttribute(`src`, `images/lostHeart.png`);
            this.missed += 1;
        }
        if(this.missed === 5 && this.active) {
            this.end();
        }
    }
    winCheck() {
        this.filteredPhrase = phrase.activePhrase.split('').filter((letter) => {
            return !phrases.regex.test(letter);
        });


        if (this.filteredPhrase.length - 1 === document.getElementsByClassName(`show`).length){
            phrases.createElement(`div`, `win`, `overlay`, `You Won! Play again?`, 3);
            this.active = false;
            overlayToggle();
        }
    }
    //reusable random
    getRandomPhrase(list) {
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
            } else {
                document.querySelectorAll('.tries img').forEach(element => element.setAttribute(`src`, `images/liveHeart.png`));
            }
        });
    }
 }