TuxGame.MenuB1G1 = function(game){
	this._tuxMale = null;
	this._intro = null;
};
TuxGame.MenuB1G1.prototype = {
	create: function(){
		TuxGame.MAIN_LOOP_SONG.stop();
    TuxGame.G1B1_LOOP.loopFull(1);
		this.stage.backgroundColor = '#B4D9E7';
		status = 0;
		// display images
		this.add.sprite(0, 0, 'b1g1-menu');
		//this.add.sprite(-130, Candy.GAME_HEIGHT-514, 'monster-cover');
		//this.add.sprite((Candy.GAME_WIDTH-395)/2, 60, 'title');
		// add the button that will start the game
		this._tuxMale = this.add.sprite(0, 300, "tux-male");
		this._tuxMale.scale.setTo(0.5, 0.5);
		this.add.button(TuxGame.GAME_WIDTH/2, TuxGame.GAME_HEIGHT-200, 
			'button-start-b3', this.startGame, this, 1, 0, 2);

		this.add.text(TuxGame.GAME_WIDTH/2-50, 100, "Ayúdame a recuperar \nmis tesoros \n" + 
			"disparándole \nal barco enemigo.", { fill: '#FFF', font: "45px Arial", stroke: "#000", strokeThickness: 6  });

		this._intro = this.add.audio('b1g1-intro');
		this._intro.play();
		
	},

	startGame: function() {
		// start the Game state
		this._intro.stop();
		this.state.start('Block1Game1');
	}
};
