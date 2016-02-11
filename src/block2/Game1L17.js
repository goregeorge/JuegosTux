TuxGame.Block2Game1L17 = function(game){
  // define needed variables for Candy.Game
  this.game = game;
  strategies = {
    'initializer'    : new TimeInitializer(),
    'infoDisplayer'  : new TimeLevelDisplayer(),
    'numberGenerator': new Operation24(),
    'levelDisplayer' : new DecimalDisplayer24()
  };
  this.gameEngine = new Game1Engine(strategies,'Block2Game1L17', 'Block2Game1L19','10');
};
TuxGame.Block2Game1L17.prototype = {
  create: function(){
    this.gameEngine.init(this);
  },
  update: Game1Engine.update
};
