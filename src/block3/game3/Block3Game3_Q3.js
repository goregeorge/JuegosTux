TuxGame.Block3Game3_Q3 = function(game){
	this.backgroundB3G3 = new BackgroundB3G3();
	this.randomGenerateB3G3 = new RandomGenerateB3G3();
	this.validatorResponseB3G3 = new ValidatorResponseB3G3();
	this.answer = 500;
	this.round = null;
	this.buttonOK = null;
};

TuxGame.Block3Game3_Q3.prototype = {
	create : function(){
		
		//Define the level and question
		this.round = 1;
		var question = "¿Cuántos gramos pesan \nlos cinco cocos?";

		this.backgroundB3G3.displayBackground(this);
		this.backgroundB3G3.displayButtonHome(this);
		this.backgroundB3G3.displayPanelStatus(this, 1);
		this.backgroundB3G3.displayPanelQuestion(this, question);
		this.backgroundB3G3.displayItmesOnBalance(this, "5-coconuts-b3", "0.5kg-b3");
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
		this.state.start("MainMenu");
	},

	/*
	* Redirect to next level
	*/
	goToNextLevel: function(){
		console.log("Pasaste al siguiente nivel");
	}
}