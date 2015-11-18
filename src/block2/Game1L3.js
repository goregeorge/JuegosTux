TuxGame.Block2Game1L3 = function(game){
  // define needed variables for Candy.Game
  this.game = game;
  strategies = {
    'initializer'    : new TimeInitializer(),
    'infoDisplayer'  : new TimeLevelDisplayer(),
    'numberGenerator': new TwoIntegerSum()
  };
  this.gameEngine = new Game1Engine(strategies,'Block2Game1L3', 'Block2Game1L5','03');
};
TuxGame.Block2Game1L3.prototype = {
  create: function(){
    this.gameEngine.init(this);
  },
  update: Game1Engine.update
};
