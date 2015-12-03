
var correctsB3G3 = 0;
var failsB3G3 = 0;

var approving_minimum = 3;

var rounds_available = [true, true, true, true, true, true];

window.onload = function() {
	var input = document.getElementById("input");
};

TuxGame.Block3Game3_Q1 = function(game){
	this.backgroundB3G3 = new BackgroundB3G3();
	this.randomGenerateB3G3 = new RandomGenerateB3G3();
	this.answer = 0.3;
};

TuxGame.Block3Game3_Q1.prototype = {
	create : function(){
		input.setAttribute("type", "number");

		//Define the level and question
		var level = "Nivel 1";
		var question = "¿Cuántos kilogramos pesan \nlos dos platanos?";

		this.backgroundB3G3.displayBackground(this);
		this.backgroundB3G3.displayButtonHome(this);
		this.backgroundB3G3.displayPanelStatus(this, level);
		this.backgroundB3G3.displayPanelQuestion(this, question);
		this.backgroundB3G3.displayItmesOnBalance(this, "2-bananas", "2-bananas");

	},

	backToHome : function(){
		this.state.start('MenuB3G3');
	},

	validateResponse : function(){
		var entry = document.getElementById("input").value;

		if ( entry == this.answer ) {
			rounds_available[0] = false;
			correctsB3G3++;
			if ( correctsB3G3 >= 6 ) {
				this.goToNextLevel();
			}else{
				random_round = this.randomGenerateB3G3.getRandomState(rounds_available);
				console.log("next round: " + random_round);
				/*
				random_round = this.getRandomState();
				console.log("next round: " + random_round);
				*/
			}
		}else{
			alert("Fallaste");
		}
	},

	/*
	* Function to back to home
	*/
	backToHome: function(){
		this.state.start("MenuB3G3");
	},

	/*
	* Redirect to next level
	*/
	goToNextLevel: function(){
		this.state.start("Block3Game3_Q2");
	}
}