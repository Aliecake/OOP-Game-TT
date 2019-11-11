/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 /**
  * Phrase.js to create a Phrase class to handle the creation of phrases.
  */
 class Phrase {
    //create phrases
    constructor(phrase) {
        this.phrase = phrase;
        this.regex = /[^A-Za-z]/;

    }
    //****** METHODS  ********/
    
    // DOM element, _class, parent, textnode, nodenum, _class addition;
    addPhraseToDisplay() {
        game.activePhrase.phrase.split('').forEach(letter => {
            if(letter === ' '){
                this.createElement(`li`, `space`, `phrase`, ``, 1);
            } else if (this.regex.test(letter)){
                this.createElement(`li`, `special`, `phrase`, letter, 1);
            } else {
                this.createElement(`li`, `letter`, `phrase`, letter, 1, letter.toLowerCase());
            }
        });
    }
    /**
     *
     * @param {string} guess
     */

    checkLetter(guess) {
        return this.phrase.toLowerCase().split('').includes(guess.toLowerCase());
            // game.correctGuess = true
    }

    //highlight/show phrase guesses, highlight right/wrong keyboard
    /**
     *
     * @param {string} letter
     * @param {string} selector
     * @param {string} _class
     */

    showMatchedLetter(letter, selector, _class) {
        //console.log(`show matched called`)
        document.querySelectorAll(`.${selector}`).forEach(el => {
            if(el.innerText.toLowerCase() === letter.toLowerCase()){
                el.classList.add(_class);
            }
        });
    }


    //create an element on page, add class, append - multi use
   
    /**
     *
     * @param {string} el
     * @param {string} _class
     * @param {string} parent
     * @param {string} text
     * @param {number} nodenum
     * @param {string} char
     */
    //**NOTE: Below char default is its alt+255. Spaces are not valid tokens*/
    // DOM element, _class addition, parent, textnode, nodenum, optional _class addition;
   createElement(el, _class, parent, text, nodenum = 0, char = ` `) {
        this.node = document.createElement(`${el}`);
        this.textnode = document.createTextNode(text);
        this.node.classList.add(`${_class}`, `${char}`);
        this.node.appendChild(this.textnode);
        document.getElementById(`${parent}`).childNodes[nodenum].appendChild(this.node);
    }

 }
