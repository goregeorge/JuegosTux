TuxGame.Block2Game1L15 = function(game){
  this.game = game;
  strategies = {
    'initializer'    : new TimeInitializer(),
    'infoDisplayer'  : new TimeLevelDisplayer(),
    'numberGenerator': new TwoFloatsDSum(),
    'levelDisplayer' : new SecondDecimalDisplayer()
  };
  this.gameEngine = new Game1Engine(strategies,'Block2Game1L15', 'Block2Game1L17','09');
};
TuxGame.Block2Game1L15.prototype = {
  create: function(){
    this.gameEngine.init(this);
  },
  update: Game1Engine.update
};
