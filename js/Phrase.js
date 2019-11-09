/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 /**
  * Phrase.js to create a Phrase class to handle the creation of phrases.
  */
 class Phrase {
    //create phrases
    constructor() {
        this.list = [
            `wild rattata appeared!`,
            `i choose you, pikachu!`,
            `squirtle squad`,
            `it's super effective`,
            `magikarp used flail`,
            `not very effective`,
          ]

    }
   //create an element on page, add class, append - multi use
    createElement(el, _class, parent, char, nodenum = 0) {
        this.node = document.createElement(`${el}`);
        this.textnode = document.createTextNode(char);
	    this.node.classList.add(`${_class}`);
        this.node.appendChild(this.textnode);
	    document.getElementById(`${parent}`).childNodes[nodenum].appendChild(this.node);
    }


 }
