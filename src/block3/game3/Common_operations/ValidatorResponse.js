ValidatorResponseB3G3 = function(){
	this.happy_penguin = null;
	this.sad_penguin = null;
};

ValidatorResponseB3G3.prototype = {
	
	validateResponse : function(context){
		this.takeADecision(context);
	},

	youWin : function(context){
		this.happy_penguin = context.add.sprite(40, TuxGame.GAME_HEIGHT-220, 'happy-penguin');
		var happy_penguin_temp = this.happy_penguin;

		setTimeout(function(){
			happy_penguin_temp.destroy();
		}, 2000);

		rounds_available[context.round-1] = false;

		setTimeout(function(){
			if ( correctsB3G3 >= 3 ) {
				context.goToNextLevel();
			}else{
				var nextState = context.randomGenerateB3G3.getNextState(rounds_available);
				context.state.start(nextState);
			}
		}, 2000);
	},

	youFail : function(context){
		this.sad_penguin = context.add.sprite(40, TuxGame.GAME_HEIGHT-220, 'sad-penguin');
		var sad_penguin_temp = this.sad_penguin;

		setTimeout(function(){
			sad_penguin_temp.destroy();
		}, 2000);

		context.backgroundB3G3.displayPanelStatus(context, context.round);

		if ( failsB3G3 >= 3 ) {
			failsB3G3 = 0;
			setTimeout(function(){
				context.state.start("Block3Game3_Q1");
			}, 2000);
			
		}
	},
	
	takeADecision : function(context){
		var entry = document.getElementById("input").value;
		
		if ( entry == context.answer ) {
			correctsB3G3++;
			this.youWin(context);
		}else{
			failsB3G3++;
			this.youFail(context);
		}
	}
}