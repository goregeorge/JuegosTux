TwoFloatsDSum = function(){
};

TwoFloatsDSum.prototype = {
  getRandomNumberToChoice: function (context) {
    generator = new RandomNumberGenerator();
    context.randomResult = generator.twoFloatsSumOperationInRange(4,9);

    return context.randomResult;
  }

};