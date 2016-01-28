var fails_by_round_B3G3;
var correctsB3G3;
var failsB3G3;

//Extra
var level2_3fail = false;
var level2_1fail_goods;

var approving_minimum;

var rounds_available;

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
	initValues : function(){
		console.log("Iniciando valores!!!");
		fails_by_round_B3G3 = 0;
		correctsB3G3 = 0;
		failsB3G3 = 0;

		//Extra
		level2_3fail = false;
		level2_1fail_goods = 0;

		approving_minimum = 3;

		rounds_available = [true, true, true, true, true, true, true, true, true, true, true, true];
	},

	create : function(){
		this.add.audio('loop').loopFull(1);
		input.setAttribute("type", "number");

		if (level2_3fail == false) {
			this.initValues();
		}

		//Define the level and question
		this.round = 1;

		var question = "¿Cuántos kilogramos pesan \nlos dos platanos?";

		this.backgroundB3G3.displayBackground(this);
		this.backgroundB3G3.displayButtonHome(this);
		this.backgroundB3G3.displayPanelStatus(this, 1);
		this.backgroundB3G3.displayPanelQuestion(this, question);
		this.backgroundB3G3.displayItmesOnBalance(this, "2-bananas-b3", "300gr-b3");
		//this.buttonOk = this.add.button(590, TuxGame.GAME_HEIGHT-105, 'button-ok', this.validateResponse, this, 1, 0, 2);
		//this.buttonOk.scale.setTo(.7, .7);
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