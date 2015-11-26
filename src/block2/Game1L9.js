TuxGame.Block2Game1L9 = function(game){
  // define needed variables for Candy.Game
  this.game = game;
  strategies = {
    'initializer'    : new TimeInitializer(),
    'infoDisplayer'  : new TimeLevelDisplayer(),
    'numberGenerator': new ThreeIntegersDiff(),
    'levelDisplayer' : new IntegersDisplayer()
  };
  this.gameEngine = new Game1Engine(strategies,'Block2Game1L9', 'Block2Game1L11','06');
};
TuxGame.Block2Game1L9.prototype = {
  create: function(){
    this.gameEngine.init(this);
  },
  update: Game1Engine.update
};
