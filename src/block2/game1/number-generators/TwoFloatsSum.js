TwoFloatsSum = function(){
};

TwoFloatsSum.prototype = {
  getRandomNumberToChoice: function (context) {
    generator = new RandomNumberGenerator();
    context.randomResult = generator.twoFloatsSumOperationInRange(0,5);

    return context.randomResult;
  }

};