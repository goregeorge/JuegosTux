RandomGenerateB3G3 = function(){
	this.random_round = null;
};

RandomGenerateB3G3.prototype ={
	
	getRandomState : function(rounds_available){
		/*
		* Get a random state without repeat
		*/
		do{
			this.random_round = Math.floor((Math.random() * 6) + 1);
		}while( rounds_available[this.random_round-1] == false);

		//This is for test purpose, delete the line below
		rounds_available[this.random_round-1] = false;

		return this.random_round;
	}
}