TuxGame.Block2Game1 = function(game){
  // define needed variables for Candy.Game
  this.game = game;
  strategies = {
    'initializer'  : new NormalInitializer(),
    'infoDisplayer': new NormalLevelDisplayer()
  };
  this.gameEngine = new Game1Engine(strategies,'Block2Game1', 'Block2Game1L2','01');
};
TuxGame.Block2Game1.prototype = {
  create: function(){
    TuxGame._correct = 0;
    TuxGame._incorrect = 0;

    this.gameEngine.init(this);
    
  }
};
