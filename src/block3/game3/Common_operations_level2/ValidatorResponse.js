ValidatorResponseB3G3_L2 = function(){
	this.happy_penguin = null;
	this.sad_penguin = null;
};

ValidatorResponseB3G3_L2.prototype = {
	
	validateResponseL2 : function(context){
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
				failsB3G3 = 0;
				console.log("YA GANASTE!!!!!!");
				input.setAttribute("type", "hidden");
				context.state.start("CongratulationsB3G3");
				//context.goToNextLevel();
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

		context.backgroundB3G3.displayPanelStatusLevel2(context, context.round);
		
		console.log("failsB3G3: " + failsB3G3);
		console.log("level2_3fail: " + level2_3fail);

		if ( failsB3G3 >= 3 && level2_3fail == false) {
			level2_3fail = true;
			setTimeout(function(){
				console.log("mandarlo al nivel 1");
				context.state.start("Block3Game3_Q1");
			}, 2000);
		}

		console.log(" fails_by_round_B3G3: " + fails_by_round_B3G3);

		/*
		if ( fails_by_round_B3G3 >= 2 ) {
			setTimeout(function(){
				var nextState = context.randomGenerateB3G3.getNextState(rounds_available);
				context.state.start(nextState);
			}, 2000);
		}
		*/

		//En algún momento este debe de ser 0
		//fails_by_round_B3G3 = 0

		/*
		if ( failsB3G3 >= 3 ) {
			
			if (level2_3fail) {
				failsB3G3 = 0;
				console.log("Aqui el blur");
				context.backgroundB3G3.displayBackgroundBlur(context, this.sad_penguin);
				setTimeout(function(){
					context.state.start("MenuB3G3");
				}, 2000);
			}else{
				context.state.start("Block3Game3_Q1");
			}
			
		}
		*/
		input.value = "";
	},
	
	takeADecision : function(context){
		var entry = document.getElementById("input").value;
		
		if ( entry == context.answer ) {
			correctsB3G3++;
			this.youWin(context);
		}else{
			failsB3G3++;
			fails_by_round_B3G3++;
			this.youFail(context);
		}
	}
}