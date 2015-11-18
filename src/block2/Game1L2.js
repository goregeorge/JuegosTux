TuxGame.Block2Game1L2 = function(game){
  // define needed variables for Candy.Game
  this.game = game;
  strategies = {
    'initializer'    : new TimeInitializer(),
    'infoDisplayer'  : new TimeLevelDisplayer(),
    'numberGenerator': new NaturalNumber()
  };
  this.gameEngine = new Game1Engine(strategies,'Block2Game1L2', 'Block2Game1L3','02');
};
TuxGame.Block2Game1L2.prototype = {
  create: function(){
    this.gameEngine.init(this);
  },
  update: Game1Engine.update
};
