TuxGame.CongratulationsB3G3 = function(game){
	this._buttonHome = null;
	this._buttonOk = null;
};

TuxGame.CongratulationsB3G3.prototype = {
	create: function(){
		this.add.text(140, 50, "Felicidades", { fill: '#0101DF', font: "100px Arial", stroke: "#333", strokeThickness: 5 });
		this.add.text(45, 300, "Superaste las conversiones", { fill: '#00FF40', font: "55px Arial", stroke: "#333", strokeThickness: 3 });

		this._buttonHome = this.add.button(TuxGame.GAME_WIDTH/2-80, TuxGame.GAME_HEIGHT-200, 'button-home', this.backToHome, this, 1, 0, 2);
		this._buttonHome.scale.setTo(2, 2);
	},

	/*
	* Function to back to home
	*/
	backToHome: function(){
		this.state.start("MenuB3G3");
	},

	/*Function to calculate the final score*/
	calculateScore : function(){
		var totalQuestions = status + fails;
		var finalScore = status/totalQuestions;
		console.log("Your final score is: " + finalScore*100);
	}
}