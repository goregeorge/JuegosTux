TuxGame.MenuB3G3 = function(game){
	this._tuxMale = null;
};

TuxGame.MenuB3G3.prototype = {
	create: function(){

		var fails_by_round_B3G3 = 0;
		var correctsB3G3 = 0;
		var failsB3G3 = 0;
		console.log("valor: " + correctsB3G3);

		// add the button that will start the game
		this.add.sprite(0, 0, 'backgroundMenu-b3g3');
		this._tuxMale = this.add.sprite(0, 150, "tux-male");
		this._tuxMale.scale.setTo(0.5, 0.5);
		this.add.button(TuxGame.GAME_WIDTH-500, TuxGame.GAME_HEIGHT-150, 
			'button-start-b3', this.startGame, this, 1, 0, 2);
		var instruction = "Introduce en la casilla la cantidad en \nkilogramos, gramos o miligramos \n\tque pesan los objetos \n\ten" + 
		" la báscula, según se \n\tte pida.";
		
		this.add.text(20, 20, instruction, { tabs: [292], fill: '#0101DF', font: "45px Arial", stroke: "#fff", strokeThickness: 5  });

	},

	startGame: function() {
		this.state.start('Block3Game3_Q1');
	}
};