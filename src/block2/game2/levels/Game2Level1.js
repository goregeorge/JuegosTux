TuxGame.Block2Game2L1 = function(game){
  // define needed variables for Candy.Game
  this.game = game;
};
TuxGame.Block2Game2L1.prototype = {
  create: function(){
    // var sets = ['Block2Game2L1A','Block2Game2L1B','Block2Game2L1C','Block2Game2L1D'];
    var sets = ['Block2Game2L1A','Block2Game2L1B'];
    var level = sets[Math.floor(Math.random()*sets.length)];
    console.log(level);

    this.state.start(level);
  }
};
