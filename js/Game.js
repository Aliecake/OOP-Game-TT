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
    }
    //methods
    startGame() {
        overlayToggle();
        //rename activePhrase
        phrase.activePhrase = this.getRandomPhrase(this.phrases);
        phrase.addPhraseToDisplay();
    }
    gameOver(result) {
        if(result){
            phrase.createElement(`div`, `win`, `overlay`, `You Won! Play again?`, 3);
        } else {
            phrase.createElement(`div`, `lose`, `overlay`, `You Lost! Play again?`, 3);
        }
        //prevent overlay from toggling on keypress
        this.active = false;
        overlayToggle();
    }
    handleInteraction(guess) {
        this.correctGuess = false;
        this.checkForWin();
        
        phrase.activePhrase.split('').forEach(letter => {
            if(guess.toLowerCase() === letter.toLowerCase()) {
                this.correctGuess = true;
                //conjoined showMatchedLetter into both right/wrong guess highlighting AND phrase show
                phrase.showMatchedLetter(letter, letter, `show`);
                phrase.showMatchedLetter(letter, `key`, `chosen`);
            }
        });

        this.removeLife(guess);
    }
    removeLife(guess) {
        if(!this.correctGuess && this.missed < 5) {
            //removal of hearts from right to left
            document.querySelectorAll('.tries img')[document.querySelectorAll('.tries img').length - this.missed - 1].setAttribute(`src`, `images/lostHeart.png`);

            phrase.showMatchedLetter(guess, `key`, `wrong`);
            this.missed += 1;
        }
        if(this.missed === 5 && this.active) {
            this.gameOver(false);
        }
    }
    checkForWin() {
        this.filteredPhrase = phrase.activePhrase.split('').filter((letter) => {
            return !phrase.regex.test(letter);
        });
        this.currentPhrase = document.getElementsByClassName(`show`);

        // this.currentPhrase = document.querySelectorAll(`#phrase li.show`)
        console.log(this.currentPhrase)
        console.log(this.currentPhrase.length, this.filteredPhrase.length)
     
        if (this.filteredPhrase.length - 1 === this.currentPhrase.length){
            this.gameOver(true);
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
        [...document.getElementsByClassName(`key`)].forEach(button => {
            button.className = `key`;
        })
    }
 }