NaturalNumber = function(){
};

NaturalNumber.prototype = {
  getRandomNumberToChoice: function (context) {
    generator = new RandomNumberGenerator();
    return generator.getRandomNaturalNumber();
  }

};