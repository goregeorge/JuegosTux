TuxGame.MenuB3G3 = function(game){
	this._tuxMale = null;
};

TuxGame.MenuB3G3.prototype = {
	create: function(){
		var fails_by_round_B3G3 = 0;
		var correctsB3G3 = 0;
		var failsB3G3 = 0;
		console.log("valor: " + correctsB3G3);
		input.setAttribute("type", "hidden");
		// add the button that will start the game
		this._tuxMale = this.add.sprite(0, 0, "tux-male");
		this._tuxMale.scale.setTo(0.5, 0.5);
		this.add.button(TuxGame.GAME_WIDTH-500, TuxGame.GAME_HEIGHT-200, 
			'button-start-b3', this.startGame, this, 1, 0, 2);
		var instruction = "Introduce en la casilla \nla cantidad en \nkg, g o mg que pesan \nlos objetos en la \nbascula, según se \nte pida";
		this.add.text(TuxGame.GAME_WIDTH/2-60, 50, instruction, { fill: '#0101DF', font: "45px Arial", stroke: "#333", strokeThickness: 3  });

	},

	startGame: function() {
		this.state.start('Block3Game3_Q1');
	}
};