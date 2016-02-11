TuxGame.Block2Game1L7 = function(game){
  // define needed variables for Candy.Game
  this.game = game;
  strategies = {
    'initializer'    : new TimeInitializer(),
    'infoDisplayer'  : new TimeLevelDisplayer(),
    'numberGenerator': new ThreeIntegersSum(),
    'levelDisplayer' : new IntegersDisplayer()
  };
  this.gameEngine = new Game1Engine(strategies,'Block2Game1L7', 'Block2Game1L9','05');
};
TuxGame.Block2Game1L7.prototype = {
  create: function(){
    this.gameEngine.init(this);
  },
  update: Game1Engine.update
};
