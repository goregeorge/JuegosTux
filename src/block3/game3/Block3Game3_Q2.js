
TuxGame.Block3Game3_Q2 = function(game){
	this.backgroundB3G3 = new BackgroundB3G3();
};

TuxGame.Block3Game3_Q2.prototype = {
	create : function(){
		input.setAttribute("type", "number");

		//Define the level and question
		var level = "Nivel 2";
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
		var element = document.getElementById("input");
		alert(element.value);
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
		this.state.start("Block3Game2_Q2");
	}
}