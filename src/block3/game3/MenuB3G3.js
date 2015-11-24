TuxGame.MenuB3G3 = function(game){
	this._tuxMale = null;
};
TuxGame.MenuB3G3.prototype = {
	create: function(){
		input.setAttribute("type", "hidden");
		// display images
		//this.add.sprite(0, 0, '../img/bg');
		//this.add.sprite(-130, Candy.GAME_HEIGHT-514, 'monster-cover');
		//this.add.sprite((Candy.GAME_WIDTH-395)/2, 60, 'title');
		// add the button that will start the game
		this._tuxMale = this.add.sprite(0, 0, "tux-male");
		this._tuxMale.scale.setTo(0.5, 0.5);
		this.add.button(TuxGame.GAME_WIDTH-500, TuxGame.GAME_HEIGHT-200, 
			'button-start', this.startGame, this, 1, 0, 2);

		this.add.text(TuxGame.GAME_WIDTH/2-50, 50, "Aqui la instrucción \n[PENDIENTE]", { fill: '#0101DF', font: "45px Arial", stroke: "#333", strokeThickness: 3  });

		
	},

	startGame: function() {
		// start the Game state
		//this.state.start('Block3Game3_Q1');
		console.log("Start the Block3Game3_Q1");
		this.state.start('Block3Game3_Q1');
	}
};