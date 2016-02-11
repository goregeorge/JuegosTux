Operation68 = function(){
};

Operation68.prototype = {
  getRandomNumberToChoice: function (context) {
    generator = new RandomNumberGenerator();
    context.randomResult = generator.operation68();

    return context.randomResult;
  }

};