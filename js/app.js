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
	
	game = new Game(phrases.list);
	game.start();
});

document.addEventListener('keyup', (e) => {
	game.interaction(e.key);
});

//called by start
function displayBoard(game) {
	game.phrase.split('').forEach(letter => {
		if(letter === ' '){
			phrases.createElement(`li`, `space`, `phrase`, letter, 1);
		} else {
			phrases.createElement(`li`, `letter`, `phrase`, letter, 1);
		}
		
	});
}


function killOverlay() {
	document.getElementById('overlay').style.display = 'none';
}


