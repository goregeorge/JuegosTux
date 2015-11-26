TuxGame.Block2Game1L5 = function(game){
  // define needed variables for Candy.Game
  this.game = game;
  strategies = {
    'initializer'    : new TimeInitializer(),
    'infoDisplayer'  : new TimeLevelDisplayer(),
    'numberGenerator': new TwoIntegersDiff(),
    'levelDisplayer' : new IntegersDisplayer()
  };
  this.gameEngine = new Game1Engine(strategies,'Block2Game1L5', 'Block2Game1L7','04');
};
TuxGame.Block2Game1L5.prototype = {
  create: function(){
    this.gameEngine.init(this);
  },
  update: Game1Engine.update
};
