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

		if ( level2_3fail ) {
			console.log("Fallo en el nivel 2, y en el 1 ya tienes " + level2_1fail_goods + "buenas");
			level2_1fail_goods++;
		}

		setTimeout(function(){
			happy_penguin_temp.destroy();
		}, 2000);

		rounds_available[context.round-1] = false;

		setTimeout(function(){
			if ( correctsB3G3 >= 3) {
				failsB3G3 = 0; //Reiniciar fallas
				correctsB3G3 = 0; //reiniciar correctas
				fails_by_round_B3G3 = 0;
				context.state.start("Block3Game3_Q7");
				//context.goToNextLevel();
			}else if(level2_3fail >= 2){
				console.log("level2_3fail = " + level2_3fail);
				context.state.start("Block3Game3_Q7");
			}else {
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
		
		console.log(" fails_by_round_B3G3: " + fails_by_round_B3G3);
		if ( fails_by_round_B3G3 >= 2 ) {
			setTimeout(function(){
				var nextState = context.randomGenerateB3G3.getNextState(rounds_available);
				context.state.start(nextState);
			}, 2000);
		}

		//En algún momento este debe de ser 0
		//fails_by_round_B3G3 = 0

		if ( failsB3G3 >= 3 ) {
			failsB3G3 = 0;
			console.log("Aqui el blur");
			context.backgroundB3G3.displayBackgroundBlur(context, this.sad_penguin);
			setTimeout(function(){
				context.state.start("MenuB3G3");
			}, 2000);
			
		}
	},

	isANumber : function(string){
		return !isNaN(parseFloat(string)) && isFinite(string);
	},
	
	takeADecision : function(context){
		var value = prompt("Ingresa ĺa respuesta:");
		if (value === null ) {
			return;
		}

		if ( this.isANumber(value) ) {
			var entry = parseFloat(value);
		}else{
			return;
		}

		
		if ( entry == context.answer ) {
			context.add.audio('correct').play();
			correctsB3G3++;
			this.youWin(context);
		}else{
			context.add.audio('incorrect').play();
			failsB3G3++;
			fails_by_round_B3G3++;
			this.youFail(context);
		}
	}
}