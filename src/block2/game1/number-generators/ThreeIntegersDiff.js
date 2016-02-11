ThreeIntegersDiff = function () {

};

ThreeIntegersDiff.prototype = {
  getRandomNumberToChoice: function (context) {
    generator = new RandomNumberGenerator();
    context.randomResult = generator.threeIntegersDiff(1,10);
    return context.randomResult;
  }
};