TuxGame.CongratulationsB3G2 = function(game){
	this._buttonHome = null;
};

TuxGame.CongratulationsB3G2.prototype = {
	create: function(){
		this.add.sprite(0, 0, 'bg-b3g2');
		this.add.text(140, 90, "Felicidades", { fill: '#0101DF', font: "100px Arial", stroke: "#333", strokeThickness: 5 });
		this.add.text(50, 300, "Superaste las fracciones", { fill: '#00FF40', font: "65px Arial", stroke: "#333", strokeThickness: 6 });

		this._buttonHome = this.add.button(TuxGame.GAME_WIDTH/2-200, TuxGame.GAME_HEIGHT-200, 'button-continue-b3', this.backToHome, this, 1, 0, 2);

		this.calculateScore();
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