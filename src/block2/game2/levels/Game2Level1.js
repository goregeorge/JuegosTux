TuxGame.Block2Game2L1 = function(game){
  // define needed variables for Candy.Game
  this.game = game;
};
TuxGame.Block2Game2L1.prototype = {
  create: function(){
    TuxGame._incorrect = 0;
    TuxGame._correct = 0;

    name = 1;
    // start the physics engine
    this.physics.startSystem(Phaser.Physics.ARCADE);
    // display background
    this._fontStyle = { font: "40px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };
    this._fontStyle2 = { font: "30px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };
    this.add.sprite(0, 0, 'sea-bg-2');
    fish1 = this.add.sprite(200, 100, 'fish_body');
    fish1.scale.setTo(0.6, 0.6);

    white = this.add.sprite(264, 150, 'square_white');
    white.scale.setTo(0.5, 0.5);

    palette = this.add.sprite(20, 340, 'palette');
    palette.scale.setTo(0.4, 0.4);

    this.instructionText = this.add.text(200, 360, "Colorea de color verde \n 1/2 del cuerpo del pez ", this._fontStyle);

    this.add.sprite(0, 0, 'point');
    this.add.text(50, 10, "Nivel " + name, this._fontStyle2);
    goods = this.add.sprite(300, 10, 'good-s');
    goods.scale.setTo(0.7, 0.7);
    wrongs = this.add.sprite(420, 10, 'wrong-s');
    wrongs.scale.setTo(0.7, 0.7);
    this.add.text(370, 10, TuxGame._correct, this._fontStyle2);
    wrongsText = this.add.text(480, 10, TuxGame._incorrect, this._fontStyle2);

    next = this.add.sprite(650, 340, 'block2-game2-next');
    next.scale.setTo(0.4, 0.4);
  }

};
