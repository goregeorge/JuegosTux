LevelTemplate = function(strategies){
    this.initializer     = strategies.initializer;
    this.infoDisplayer   = strategies.infoDisplayer;

    this.numberDisplayer = new IntegersDisplayer();
    this.fishesDisplayer = new FishesDisplayer();
};

LevelTemplate.prototype = {
  init: function (context) {
    this.initializer.init(context);
  },
  displayNumbers : function  (context) {
    return this.numberDisplayer.displayNumbers(context);
  },
  displayFishes: function (context) {
    return this.fishesDisplayer.displayFishes(context);
  },
  displayLevelInfo: function (context, name) {
    return this.infoDisplayer.displayInfo(context, name);
  },
  getRandomNumberToChoice: function (numberGenerator) {
    return numberGenerator.getRandomNaturalNumber();
  }

};