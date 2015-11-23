Operation24 = function(){
};

Operation24.prototype = {
  getRandomNumberToChoice: function (context) {
    generator = new RandomNumberGenerator();
    context.randomResult = generator.operation24();

    return context.randomResult;
  }

};