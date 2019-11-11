/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 /**
  * Phrase.js to create a Phrase class to handle the creation of phrases.
  */
 class Phrase {
    //create phrases
    constructor() {
        this.activePhrase = null;
        this.regex = /[^A-Za-z]/;

    }

    addPhraseToDisplay() {
        this.activePhrase.split('').forEach(letter => {
            if(letter === ' '){
                this.createElement(`li`, `space`, `phrase`, ` `, 1);
            } else if (this.regex.test(letter)){
                this.createElement(`li`, `special`, `phrase`, letter, 1);
            } else {
                this.createElement(`li`, `letter`, `phrase`, letter, 1, letter);
            }
        });
    }
   //create an element on page, add class, append - multi use
   //**NOTE: Below default is its alt+255. Spaces are not valid tokens*/
   createElement(el, _class, parent, text, nodenum = 0, char = ` `) {
        this.node = document.createElement(`${el}`);
        this.textnode = document.createTextNode(text);
        this.node.classList.add(`${_class}`, `${char}`);
        this.node.appendChild(this.textnode);
	    document.getElementById(`${parent}`).childNodes[nodenum].appendChild(this.node);
    }
    //highlight/show phrase guesses, highlight right/wrong keyboard
    showMatchedLetter(letter, selector, _class) {
        document.querySelectorAll(`.${selector}`).forEach(el => {
            if(el.innerText === letter){
                el.classList.add(_class);
            }
        });
    }

 }
