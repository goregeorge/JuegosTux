TuxGame.Block3Game3_Q11 = function(game){
	this.backgroundB3G3 = new BackgroundB3G3();
	this.randomGenerateB3G3 = new RandomGenerateB3G3_L2();
	this.validatorResponseB3G3 = new ValidatorResponseB3G3_L2();
	this.answer = 4.65;
	this.round = null;
	this.buttonOK = null;
};

TuxGame.Block3Game3_Q11.prototype = {
	create : function(){
		input.setAttribute("type", "number");

		//Define the level and question
		this.round = 11;
		var question = "¿Cuántos kilogramos pesan \nlos dos telescopios?";

		this.backgroundB3G3.displayBackground(this);
		this.backgroundB3G3.displayButtonHome(this);
		this.backgroundB3G3.displayPanelStatusLevel2(this, 2);
		this.backgroundB3G3.displayPanelQuestion(this, question);
		this.backgroundB3G3.displayItmesOnBalance(this, "2-telescopes-b3", "weight-lv11-b3");
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