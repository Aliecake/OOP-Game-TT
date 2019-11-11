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
		this.phrases = [
			new Phrase(`Wild Rattata Appeared!`),
			new Phrase(`I choose you, Pikachu!`),
			new Phrase(`Squirtle Squad`),
			new Phrase(`It's super effective`),
			new Phrase(`Magikarp used flail`),
			new Phrase(`Not very effective`),
		];
		this.activePhrase = null;
		this.missed = 0;
		this.guessedLetters = [];
		this.active = true;
	}

	//***********METHODS**********//
	
	startGame() {
		overlayToggle();
		//rename activePhrase
		this.activePhrase = this.getRandomPhrase(this.phrases);
		console.log(this.activePhrase.phrase)
		this.activePhrase.addPhraseToDisplay();
	}
	/**
	 *
	 * @param {boolean} gameWon
	 */
	gameOver(gameWon) {
		if(gameWon){
			this.activePhrase.createElement(`div`, `win`, `overlay`, `You Won! Play again?`, 3);
		} else {
			this.activePhrase.createElement(`div`, `lose`, `overlay`, `You Lost! Play again?`, 3);
		}
		//prevent overlay from adding multiple win/loss messages on keypress between games
		this.active = false;
		overlayToggle();
	}
	/**
	 *
	 * @param {string} letter
	 */
	handleInteraction(letter) {
		if (this.activePhrase.checkLetter(letter)) {
			this.activePhrase.showMatchedLetter(letter, `letter.${letter}`, `show`);
			this.activePhrase.showMatchedLetter(letter, `key`, `chosen`);
		} else {
			this.removeLife(letter);
		}
		this.checkForWin();
	}
	/**
	 *
	 * @param {string} guess
	 */
	removeLife(guess) {
		if(this.missed >= 0) {
			//removal of hearts from right to left
			document.querySelectorAll('.tries img')[document.querySelectorAll('.tries img').length - this.missed - 1].setAttribute(`src`, `images/lostHeart.png`);

			this.activePhrase.showMatchedLetter(guess, `key`, `wrong`);
			this.missed += 1;
		}
	}
	/**
	 * @return {boolean}
	 */
	checkForWin() {
		if (this.missed === 5 && this.active) {
			return this.gameOver(false);
		}
		this.filteredPhrase = this.activePhrase.phrase.split('').filter((letter) => {
		    return !this.activePhrase.regex.test(letter);
		});

		this.lis = [...document.getElementsByClassName(`show`)];
		if (this.filteredPhrase.length === this.lis.length){
		    return this.gameOver(true);
		}
	}
	//reusable random
	/**
	 *
	 * @param {object or array} list
	 */
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
		});
	}
 }