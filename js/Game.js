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
    }
    //methods
    start() {
        killOverlay();
        displayBoard(this);
    }
    end() {
        //lost/out of lives
    }
    getPhrase() {
        //get random phrase
       return this.random(this.phrases);
    }
    interaction(guess) {
        
        this.guess = guess;
        // console.log(guess)
        console.log(this.guess, this.phrase)

    }
    killLife() {
        //remove a life
    }
    winCheck() {
        //check if phrase complete
    }
    random() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)]
    }
 }