Game1Commons = function(strategy){
 this.strategy = strategy;
};

Game1Commons.prototype = {
  displayNumbers : function  (context) {
    return this.strategy.displayNumbers(context);
  },

  displayFishes: function (context) {
    return this.strategy.displayFishes(context);
  },

  displayLevelInfo: function (context) {
    return this.strategy.displayLevelInfo(context);
  },
  getRandomNumberToChoice: function (context) {
    return this.strategy.getRandomNumberToChoice(context);
  }
};