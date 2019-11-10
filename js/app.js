/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 /**
	* app.js to create a new instance of the Game class and add
	* event listeners for the start button and onscreen keyboard buttons.
	*/
let game;
let phrases = new Phrase();

document.getElementById('btn__reset').addEventListener('click', () => {
	game = new Game();
	game.reset();
	game.startGame();
});

document.addEventListener('click', (e) => {
	if(e.target.classList.contains('key') && !game.guessedLetters.includes(e.key)){
		game.guessedLetters.push(e.target.innerText);
		game.handleInteraction(e.target.innerText);
	}
});

document.addEventListener('keyup', (e) => {
	//checks if letter, game is defined, key is 1 char, and that key has not been previously guessed
	if(!phrases.regex.test(e.key) && game && e.key.length === 1 && !game.guessedLetters.includes(e.key)){
		game.guessedLetters.push(e.key);
		game.handleInteraction(e.key);
	}
});

//called by start
function displayBoard(game) {

	phrase.activePhrase.split('').forEach(letter => {
		if(letter === ' '){
			phrases.createElement(`li`, `space`, `phrase`, ` `, 1);
		} else if (phrases.regex.test(letter)){
			phrases.createElement(`li`, `none`, `phrase`, letter, 1);
		} else {
			phrases.createElement(`li`, `letter`, `phrase`, letter, 1, letter);
		}

	});
}

function overlayToggle() {
	document.getElementById('overlay').classList.toggle('is-not-visible');
}


