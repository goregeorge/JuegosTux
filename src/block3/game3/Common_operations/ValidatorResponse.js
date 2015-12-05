ValidatorResponseB3G3 = function(){
	this.happy_penguin = null;
	this.sad_penguin = null;
};

ValidatorResponseB3G3.prototype = {
	validateResponse : function(context){
		this.takeADecision(context);
	},

	correctAnswer : function(context){
		
	},

	incorrectAnswer : function(){
		console.log("Fallaste");
	},

	showHappyPenguin : function(context){
		
	},

	showSadPenguin : function(context){
		
	},

	takeADecision : function(context){
		var entry = document.getElementById("input").value;
		if ( entry == context.answer ) {
			rounds_available[0] = false;
			correctsB3G3++;
			this.happy_penguin = context.add.sprite(40, TuxGame.GAME_HEIGHT-220, 'happy-penguin'); 
			var happy_penguin_temp = this.happy_penguin;
			setTimeout(function(){ 
				happy_penguin_temp.destroy();
			}, 2000);
			if ( correctsB3G3 >= 3 ) {
				context.goToNextLevel();
			}else{
				var nextState = context.randomGenerateB3G3.getNextState(rounds_available);
				context.state.start(nextState);
			}
		}else{
			failsB3G3++;
			this.sad_penguin = context.add.sprite(40, TuxGame.GAME_HEIGHT-220, 'sad-penguin');
			var sad_penguin_temp = this.sad_penguin;
			setTimeout(function(){ 
				sad_penguin_temp.destroy();
			}, 2000);
			if ( failsB3G3 >= 3 ) {
				context.state.start("Block3Game3_Q1");
			}
		}
	}
}