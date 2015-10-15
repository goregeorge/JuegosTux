TuxGame.Block2Welcome = function(game){
  // this._player = null;
  // this._candyGroup = null;
  // this._spawnCandyTimer = 0;
  // this._fontStyle = null;
  // define Candy variables to reuse them in Candy.item functions
  // TuxGame._scoreText = null;
  // TuxGame._score = 0;
  // TuxGame._health = 0;
};
TuxGame.Block2Welcome.prototype = {
  create: function(){
    var sprite;
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.arcade.gravity.y = 200;

    this.add.sprite(0, 0, 'welcome-bg');
    this.add.sprite(100, 0, 'welcome-boat');

    sprite = this.add.sprite(380, 230, 'welcome-male-tux');
    sprite.scale.setTo(0.25, 0.25);

    // this.add.button(((TuxGame.GAME_WIDTH)/4), TuxGame.GAME_HEIGHT/4, 'button-start', this.goGame1, this, 1, 0, 2);

    this._fontStyle = { font: "40px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };
  },
  goGame1: function(){
    this.state.start('Block2Welcome');
  },
  update: function(){
  }
};
