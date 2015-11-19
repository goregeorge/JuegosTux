NaturalNumber = function(){
};

NaturalNumber.prototype = {
  getRandomNumberToChoice: function (context) {
    generator = new RandomNumberGenerator();
    context.randomResult = generator.getRandomNaturalNumber();
    
    return context.randomResult;
  }

};