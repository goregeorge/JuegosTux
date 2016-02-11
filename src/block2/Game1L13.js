TuxGame.Block2Game1L13 = function(game){
  // define needed variables for Candy.Game
  this.game = game;
  strategies = {
    'initializer'    : new TimeInitializer(),
    'infoDisplayer'  : new TimeLevelDisplayer(),
    'numberGenerator': new TwoFloatsSum(),
    'levelDisplayer' : new FirstDecimalDisplayer()
  };
  this.gameEngine = new Game1Engine(strategies,'Block2Game1L13', 'Block2Game1L15','08');
};
TuxGame.Block2Game1L13.prototype = {
  create: function(){
    this.gameEngine.init(this);
  },
  update: Game1Engine.update
};
