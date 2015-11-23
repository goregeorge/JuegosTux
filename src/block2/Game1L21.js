TuxGame.Block2Game1L21 = function(game){
  this.game = game;
  strategies = {
    'initializer'    : new TimeInitializer(),
    'infoDisplayer'  : new TimeLevelDisplayer(),
    'numberGenerator': new ThreeFloatsOperation(),
    'levelDisplayer' : new FirstDecimalDisplayer()
  };
  this.gameEngine = new Game1Engine(strategies,'Block2Game1L21', 'Block2Game1Score','12');
};
TuxGame.Block2Game1L21.prototype = {
  create: function(){
    this.gameEngine.init(this);
  },
  update: Game1Engine.update
};
