TwoIntegersDiff = function () {

};

TwoIntegersDiff.prototype = {
  getRandomNumberToChoice: function (context) {
    generator = new RandomNumberGenerator();
    context.randomResult = generator.twoIntegersDiffOperationInRange(1,10);
    return context.randomResult;
  }
};