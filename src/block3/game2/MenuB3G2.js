TuxGame.MenuB3G2 = function(game){
	this._tuxMale = null;
	this._intro = null;
};
TuxGame.MenuB3G2.prototype = {
	create: function(){
		status = 0;
		// display images
		//this.add.sprite(0, 0, '../img/bg');
		//this.add.sprite(-130, Candy.GAME_HEIGHT-514, 'monster-cover');
		//this.add.sprite((Candy.GAME_WIDTH-395)/2, 60, 'title');
		// add the button that will start the game
		this._tuxMale = this.add.sprite(0, 0, "tux-male");
		this._tuxMale.scale.setTo(0.5, 0.5);
		this.add.button(TuxGame.GAME_WIDTH-500, TuxGame.GAME_HEIGHT-200, 
			'button-start', this.startGame, this, 1, 0, 2);

		this.add.text(TuxGame.GAME_WIDTH/2-50, 50, "Haz clic en el barco \ncuya bandera \n" + 
			"represente la fracción \nque se te pregunta.", { fill: '#0101DF', font: "45px Arial", stroke: "#333", strokeThickness: 3  });

		this._intro = this.add.audio('intro');
		this._intro.play();
		
	},

	startGame: function() {
		// start the Game state
		this.state.start('Block3Game2_Q1');
	}
};