ValidatorResponseB3G3 = function(){};

ValidatorResponseB3G3.prototype = {
	validateResponse : function(context){
		var entry = document.getElementById("input").value;

		if ( entry == context.answer ) {
			rounds_available[0] = false;
			correctsB3G3++;
			if ( correctsB3G3 >= 6 ) {
				context.goToNextLevel();
			}else{
				var nextState = context.randomGenerateB3G3.getNextState(rounds_available);
				console.log("Next state: " + nextState);
				context.state.start(nextState);
			}
		}else{
			alert("Fallaste");
		}
	}
}