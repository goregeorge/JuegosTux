TuxGame.Block2Game1Score = function(game){
};
TuxGame.Block2Game1Score.prototype = {
  create: function(){
    var sprite;
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.arcade.gravity.y = 200;
    this._fontStyle2 = { font: "30px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };
    this._fontStyle = { font: "50px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };

    this.add.sprite(0, 0, 'welcome-bg');
    this.add.sprite(100, 0, 'welcome-boat');

    sprite = this.add.sprite(480, 230, 'welcome-male-tux');
    sprite.scale.setTo(0.25, 0.25);
    // Info
    table = this.add.sprite(10, 70, 'score-table');
    table.scale.setTo(0.8, 0.8);

    this.add.text(80, 35, "Resultados", this._fontStyle2);
    point = this.add.sprite(25, 85, 'point');
    levelText = this.add.text(80, 100, "12 Niveles Completados", this._fontStyle2);

    goods = this.add.sprite(40, 155, 'good-s');
    goods.scale.setTo(0.7, 0.7);
    goodsText = this.add.text(90, 155, TuxGame._correct +" Aciertos", this._fontStyle2);

    wrongs = this.add.sprite(40, 220, 'wrong-s');
    wrongs.scale.setTo(0.7, 0.7);
    wrongsText = this.add.text(90, 225, TuxGame._incorrect +" Fallos", this._fontStyle2);

    this.add.button(280, 460, 'button-start', this.goGame1, this, 1, 0, 2);
    this.add.text(370, 495, "Volver a Jugar", this._fontStyle);
  },
  goGame1: function(){
    this.state.start('Block2Game1');
  },
  update: function(){
  }
};
