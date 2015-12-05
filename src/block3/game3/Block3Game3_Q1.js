
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
	this.validatorResponseB3G3 = new ValidatorResponseB3G3();
	this.answer = 0.3;
	this.round = null;
	this.buttonOK = null;
};

TuxGame.Block3Game3_Q1.prototype = {
	create : function(){
		input.setAttribute("type", "number");

		//Define the level and question
		this.round = 1;

		var question = "¿Cuántos kilogramos pesan \nlos dos platanos?";

		this.backgroundB3G3.displayBackground(this);
		this.backgroundB3G3.displayButtonHome(this);
		this.backgroundB3G3.displayPanelStatus(this, this.round);
		this.backgroundB3G3.displayPanelQuestion(this, question);
		this.backgroundB3G3.displayItmesOnBalance(this, "2-bananas", "weight-b3g3");
		this.buttonOk = this.add.button(590, TuxGame.GAME_HEIGHT-105, 'button-ok', this.validateResponse, this, 1, 0, 2);
		this.buttonOk.scale.setTo(.7, .7);

	},

	validateResponse : function(){
		this.validatorResponseB3G3.takeADecision(this);
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
		console.log("Pasaste al siguiente nivel");
	}
}