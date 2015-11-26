ThreeFloatsOperation = function () {

};

ThreeFloatsOperation.prototype = {
  getRandomNumberToChoice: function (context) {
    generator = new RandomNumberGenerator();
    context.randomResult = generator.threeFloatsOperation(1,5);
    return context.randomResult;
  }
};