TuxGame.CongratulationsB3G3 = function(game){
	this._buttonHome = null;
	this._buttonOk = null;
};

TuxGame.CongratulationsB3G3.prototype = {
	create: function(){
		input.setAttribute("type", "hidden");

		sprite = this.add.sprite(0, 0, 'backgroundMenu-b3g3');

		var fails_by_round_B3G3 = 0;
		var correctsB3G3 = 0;
		var failsB3G3 = 0;

		//Extra
		var level2_3fail = false;
		var level2_1fail_goods = 0;

		var approving_minimum = 3;

		var rounds_available = [true, true, true, true, true, true, true, true, true, true, true, true];

		this.add.text(150, 50, "¡¡Felicidades!!", { fill: '#0101DF', font: "75px Arial", stroke: "#FFF", strokeThickness: 5 });
		this.add.text(45, 300, "Superaste las conversiones", { fill: '#0101DF', font: "55px Arial", stroke: "#FFF", strokeThickness: 5 });

		//this.add.text(45, 300, "Superaste las conversiones", { fill: '#00FF40', font: "55px Arial", stroke: "#333", strokeThickness: 3 });

		this._buttonHome = this.add.button(TuxGame.GAME_WIDTH/2-80, TuxGame.GAME_HEIGHT-200, 'button-home', this.backToHome, this, 1, 0, 2);
		this._buttonHome.scale.setTo(2, 2);

	},

	/*
	* Function to back to home
	*/
	backToHome: function(){
		this.state.start("MainMenu");
	},

	/*Function to calculate the final score*/
	calculateScore : function(){
		var totalQuestions = status + fails;
		var finalScore = status/totalQuestions;
		console.log("Your final score is: " + finalScore*100);
	}
}