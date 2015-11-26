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
    this._fontStyle3 = { font: "30px Arial", fill: "#00ff00", stroke: "#333", strokeThickness: 5, align: "center" };

    this.add.sprite(0, 0, 'sea-bg-2');
    fish1 = this.add.sprite(200, 100, 'fish_body');
    fish1.scale.setTo(0.6, 0.6);

    white12 = this.add.sprite(266, 150, 'square_white12');
    white12.scale.setTo(0.5, 0.5);

    white121 = this.add.sprite(339, 150, 'square_white12');
    white121.scale.setTo(0.5, 0.5);

    // Palette
    palette = this.add.sprite(20, 340, 'palette');
    palette.scale.setTo(0.4, 0.4);

    green = this.add.sprite(19, 340, 'square_green14');
    green.scale.setTo(0.35, 0.35);

    orange = this.add.sprite(73, 340, 'square_orange14');
    orange.scale.setTo(0.35, 0.35);

    pink = this.add.sprite(127, 340, 'square_pink14');
    pink.scale.setTo(0.35, 0.35);

    purple = this.add.sprite(19, 395, 'square_purple14');
    purple.scale.setTo(0.35, 0.35);

    yellow = this.add.sprite(73, 395, 'square_yellow14');
    yellow.scale.setTo(0.35, 0.35);

    red = this.add.sprite(127, 395, 'square_red14');
    red.scale.setTo(0.35, 0.35);

    this.instructionText = this.add.text(200, 360, "Colorea de color verde \n 1/2 del cuerpo del pez ", this._fontStyle);

    this.add.sprite(0, 0, 'point');
    this.add.text(50, 10, "Nivel " + name, this._fontStyle3);
    this.add.sprite(260, -80, 'score-half');
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
