TuxGame.Block2Game1L11 = function(game){
  // define needed variables for Candy.Game
  this.game = game;
  strategies = {
    'initializer'    : new TimeInitializer(),
    'infoDisplayer'  : new TimeLevelDisplayer(),
    'numberGenerator': new ThreeIntegersOperation()
  };
  this.gameEngine = new Game1Engine(strategies,'Block2Game1L11', 'Block2Game1L13','07');
};
TuxGame.Block2Game1L11.prototype = {
  create: function(){
    this.gameEngine.init(this);
  },
  update: Game1Engine.update
};
