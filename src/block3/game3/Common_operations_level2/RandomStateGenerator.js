RandomGenerateB3G3_L2 = function(){
	this.random_round = null;
};

RandomGenerateB3G3_L2.prototype ={

	getRandomNumber : function(rounds_available){
		/*
		* Get a random state without repeat
		*/
		do{
			this.random_round = Math.floor((Math.random() * 6) + 7);
			console.log("RANDOM: " + this.random_round);
			console.log(rounds_available);
		}while( rounds_available[this.random_round-1] == false);

		//This is for test purpose, delete the line below
		//rounds_available[this.random_round-1] = false;

		return this.random_round;
	},

	getNextState : function(rounds_available){
		var random_round = this.getRandomNumber(rounds_available);
		console.log(random_round);
		var nameState = "Block3Game3_Q" + random_round;
		console.log(nameState);
		return nameState;
	}
}