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
       this.win = false;
       this.correctGuess = false;
       this.active = true;
    }
    //methods
    start() {
        overlayToggle();
        displayBoard(this);
    }
    end() {
        if(this.lives === 0 && this.active){
            phrases.createElement(`div`, `lose`, `overlay`, `You Lost! Try again`, 3);
            //prevent overlay from toggling on keypress
            this.active = false;
            overlayToggle();
            this.reset();
        } else {
            
            this.winCheck();
        }
    }
    getPhrase() {
        //get random phrase
       return this.random(this.phrases);
    }
    interaction(guess) {
        this.correctGuess = false;
        this.phrase.split('').forEach(letter => {
            if(guess.toLowerCase() === letter.toLowerCase()) {
                this.correctGuess = true;
                //correct highlighting
                //TODO move to phrase class?
                document.querySelectorAll(`.${letter}`).forEach(el => {
                    el.style.color = `rgb(61, 11, 126)`;
                    el.style.setProperty(`background`, `var(--color-vibrant-light)`)
                });
            }
        });
        this.killLife();
    }
    killLife() {
        //remove a life
        if(!this.correctGuess){
            this.lives -= 1;
            //TODO phrase class highlight
        }
        this.end();
    }
    winCheck() {
        //check if phrase complete
    }

    random(list) {
        return list[Math.floor(Math.random() * list.length)]
    }
    
    reset() {
        this.active = true;
        //TODO reset h2
        document.querySelectorAll('.letter').forEach(el => {
            el.removeAttribute(`style`);
        });
        
    }
 }