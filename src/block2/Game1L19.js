TuxGame.Block2Game1L19 = function(game){
  this.game = game;
  strategies = {
    'initializer'    : new TimeInitializer(),
    'infoDisplayer'  : new TimeLevelDisplayer(),
    'numberGenerator': new Operation68(),
    'levelDisplayer' : new DecimalDisplayer68()
  };
  this.gameEngine = new Game1Engine(strategies,'Block2Game1L19', 'Block2Game1L21','11');
};
TuxGame.Block2Game1L19.prototype = {
  create: function(){
    this.gameEngine.init(this);
  },
  update: Game1Engine.update
};
