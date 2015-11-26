ThreeIntegersOperation = function () {

};

ThreeIntegersOperation.prototype = {
  getRandomNumberToChoice: function (context) {
    generator = new RandomNumberGenerator();
    context.randomResult = generator.threeIntegersOperationWithSumAndDif(1,10);
    return context.randomResult;
  }
};