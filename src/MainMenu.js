TuxGame.MainMenu = function(game){};
TuxGame.MainMenu.prototype = {
	create: function(){
		// display images
		this.add.sprite(0, 0, 'background');
		// this.add.sprite(0, 0, 'sea-bg');
		this.add.sprite(-130, TuxGame.GAME_HEIGHT-514, 'monster-cover');
		this.add.sprite((TuxGame.GAME_WIDTH-395)/2, 60, 'title');
		// add the button that will start the game
		this.add.button(((TuxGame.GAME_WIDTH)/4), TuxGame.GAME_HEIGHT/4, 'button-start', this.startGame, this, 1, 0, 2);
	},
	startGame: function() {
		// start the Game state
		this.state.start('Game');
	}
};