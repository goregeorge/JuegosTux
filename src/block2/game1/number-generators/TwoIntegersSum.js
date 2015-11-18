TwoIntegerSum = function(){
};

TwoIntegerSum.prototype = {
  getRandomNumberToChoice: function (context) {
    generator = new RandomNumberGenerator();
    context.randomResult = generator.twoIntegersSumOperationInRange(1,10);
    while(context.randomResult[1] == 10){
      context.randomResult = generator.twoIntegersSumOperationInRange(1,10);
    }

    return context.randomResult;
  }

};