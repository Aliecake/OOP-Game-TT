/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 /**
	* app.js to create a new instance of the Game class and add
	* event listeners for the start button and onscreen keyboard buttons.
	*/
let game;

document.getElementById('btn__reset').addEventListener('click', () => {
	game = new Game();
	game.reset();
	game.startGame();
});

document.addEventListener('click', (e) => {
	if(e.target.classList.contains('key') && !game.guessedLetters.includes(e.target.innerText) && game){
		game.guessedLetters.push(e.target.innerText);
		game.handleInteraction(e.target.innerText);
	}
});

document.addEventListener('keyup', (e) => {
	//checks if letter, game is defined, key is 1 char, and that key has not been previously guessed
	if(!game.activePhrase.regex.test(e.key) && game && e.key.length === 1 && !game.guessedLetters.includes(e.key)){
		game.guessedLetters.push(e.key);
		game.handleInteraction(e.key);
	}
});

function overlayToggle() {
	document.getElementById('overlay').classList.toggle('is-not-visible');
}


