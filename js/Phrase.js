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
            `Wild Rattata Appeared!`,
            `I choose you, Pikachu!`,
            `Squirtle Squad`,
            `It's super effective`,
            `Magikarp used flail`,
            `Not very effective`,
          ]

    }
   //create an element on page, add class, append - multi use
   createElement(el, _class, parent, text, nodenum = 0, char = ` `) {
        this.node = document.createElement(`${el}`);
        this.textnode = document.createTextNode(text);
        this.node.classList.add(`${_class}`, `${char}`);
        this.node.appendChild(this.textnode);
        console.log(this.node, this.textnode, _class, char, nodenum)
	    document.getElementById(`${parent}`).childNodes[nodenum].appendChild(this.node);
    }


 }
