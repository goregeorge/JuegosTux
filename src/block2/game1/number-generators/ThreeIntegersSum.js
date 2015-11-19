ThreeIntegersSum = function(){
};

ThreeIntegersSum.prototype = {
  getRandomNumberToChoice: function (context) {
    generator = new RandomNumberGenerator();
    context.randomResult = generator.threeIntegersSumInRange(1,10);
    
    return context.randomResult;
  }

};