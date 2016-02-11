TuxGame.MenuB3G3 = function(game){
	this._tuxMale = null;
};

TuxGame.MenuB3G3.prototype = {
	create: function(){
		this.game.canvas.id = "lol";
		var canvas_game = document.getElementById("lol");
		document.getElementById("canvas-wrap").appendChild(canvas_game);

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
		var instruction = "Introduce en la casilla la cantidad en \nkg, g o mg que pesan los objetos en" + 
		"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tla báscula, según se \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tte pida.";
		//this.add.text(TuxGame.GAME_WIDTH/2-60, 50, instruction, { fill: '#0101DF', font: "45px Arial", stroke: "#fff", strokeThickness: 5  });

		this.add.text(20, 20, instruction, { fill: '#0101DF', font: "45px Arial", stroke: "#fff", strokeThickness: 5  });

		//this.add.sprite(180, 50, "you-fail-b3g3").scale.setTo(0.7, 0.7);

	},

	startGame: function() {
		this.state.start('Block3Game3_Q1');
	}
};