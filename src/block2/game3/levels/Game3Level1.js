TuxGame.Block2Game3L1 = function(game){
  // define needed variables for Candy.Game
  this.game = game;
};
TuxGame.Block2Game3L1.prototype = {
  create: function(){
    TuxGame._incorrect = 0;
    TuxGame._correct = 0;
    currentColor = "green";
    colors = {
      green:  0,
      orange: 0,
      pink:   0,
      purple: 0,
      yellow: 0,
      red:    0,
    }

    name = 1;
    // start the physics engine
    this.physics.startSystem(Phaser.Physics.ARCADE);
    // display background
    this._fontStyle = { font: "40px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };
    this._fontStyle2 = { font: "30px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };
    this._fontStyle3 = { font: "30px Arial", fill: "#00ff00", stroke: "#333", strokeThickness: 5, align: "center" };

    this.add.sprite(0, 0, 'sea-bg-3');
    fish1 = this.add.sprite(200, 100, 'fish-body-2');
    fish1.scale.setTo(0.6, 0.6);

    half1 = this.add.button(266, 150, 'square_white_12', this.changeColor, this);
    half1.scale.setTo(0.5, 0.5);

    half2 = this.add.button(339, 150, 'square_white_12', this.changeColor, this);
    half2.scale.setTo(0.5, 0.5);

    // Palette
    palette = this.add.sprite(20, 340, 'palette');
    palette.scale.setTo(0.4, 0.4);

    green = this.add.button(19, 340, 'square_green_14', this.selectGreen, this);
    green.scale.setTo(0.35, 0.35);

    orange = this.add.button(73, 340, 'square_orange_14', this.selectOrange, this);
    orange.scale.setTo(0.35, 0.35);

    pink = this.add.button(127, 340, 'square_pink_14', this.selectPink, this);
    pink.scale.setTo(0.35, 0.35);

    purple = this.add.button(19, 395, 'square_purple_14', this.selectPurple, this);
    purple.scale.setTo(0.35, 0.35);

    yellow = this.add.button(73, 395, 'square_yellow_14', this.selectYellow, this);
    yellow.scale.setTo(0.35, 0.35);

    red = this.add.button(127, 395, 'square_red_14', this.selectRed, this);
    red.scale.setTo(0.35, 0.35);

    this.instructionText = this.add.text(200, 360, "Coloréa de verde \n 1/2 del cuerpo del pez ", this._fontStyle);

    this.add.sprite(0, 0, 'point');
    this.add.text(50, 10, "Nivel " + name, this._fontStyle3);
    this.add.sprite(260, -80, 'score-half');
    goods = this.add.sprite(300, 10, 'good-s');
    goods.scale.setTo(0.7, 0.7);
    wrongs = this.add.sprite(420, 10, 'wrong-s');
    wrongs.scale.setTo(0.7, 0.7);
    this.add.text(370, 10, TuxGame._correct, this._fontStyle2);
    wrongsText = this.add.text(480, 10, TuxGame._incorrect, this._fontStyle2);

    next = this.add.button(650, 340, 'block2-game2-next', this.verifyAnswer, this);
    next.scale.setTo(0.4, 0.4);
  },
  changeColor: function (btn) {
    // Getting Old positions
    posX = btn.x;
    posY = btn.y;
    // Getting Color of Current pressed button
    oldColor = btn.key.split('_')[1];
    // Creating Name of new sprite
    sprite = "square_"+currentColor+"_12";

    colors[oldColor]     -= 1;
    colors[currentColor] += 1;

    console.log(colors[currentColor]);

    var square = this.add.button(posX, posY, sprite, this.changeColor, this);
    square.scale.setTo(0.5, 0.5);
    btn.destroy();
  },
  selectGreen : function () {
    currentColor = "green";
    console.log(currentColor);
  },
  selectOrange : function () {
    currentColor = "orange";
    console.log(currentColor);
  },
  selectPink : function () {
    currentColor = "pink";
    console.log(currentColor);
  },
  selectPurple : function () {
    currentColor = "purple";
    console.log(currentColor);
  },
  selectYellow : function () {
    currentColor = "yellow";
    console.log(currentColor);
  },
  selectRed : function () {
    currentColor = "red";
    console.log(currentColor);
  },
  verifyAnswer : function (btn) {
    if (colors['green'] != 1) {
      TuxGame._incorrect += 1;
      wrongsText.setText(TuxGame._incorrect);
      wrong = this.add.sprite(300, 100, 'wrong');
      setTimeout(function () {
        wrong.destroy(true);
      }, 1200);
    } else {
      this.add.sprite(300, 100, 'happy');
      TuxGame._correct += 1;
      var that = this;
      setTimeout(function () {
        that.state.start('Block2Game2L2');
      }, 1200);
    }
  }

};