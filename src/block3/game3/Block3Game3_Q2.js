
TuxGame.Block3Game3_Q2 = function(game){
	this.backgroundB3G3 = new BackgroundB3G3();
	this.randomGenerateB3G3 = new RandomGenerateB3G3();
	this.validatorResponseB3G3 = new ValidatorResponseB3G3();
	this.answer = 0.3;
};

TuxGame.Block3Game3_Q2.prototype = {
	create : function(){
		input.setAttribute("type", "number");

		//Define the level and question
		var level = "Ronda 2";
		var question = "¿Cuántos gramos pesa \nel telescopio?";

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
		this.validatorResponseB3G3.validateResponse(this);
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