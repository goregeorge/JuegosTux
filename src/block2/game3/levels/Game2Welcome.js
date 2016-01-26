TuxGame.Block2Game2Welcome = function(game){
};
TuxGame.Block2Game2Welcome.prototype = {
  create: function(){
    var sprite;
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.arcade.gravity.y = 200;
    this._fontStyle2 = { font: "50px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };
    this._fontStyle = { font: "22px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };
    this.add.sprite(0, 0, 'b2g2-welcome');

    globo = this.add.sprite(230, 180, 'globo-text');
    globo.scale.setTo(0.4, 0.4);
    this.add.text(260, 205, "Ayúdame a colorear\nlos peces según\nla fracción indicada", this._fontStyle);

    this._fontStyle = { font: "40px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };
    this.add.button(280, 16, 'button-start', this.goGame1, this, 1, 0, 2);
    this.add.text(390, 45, "Jugar Ahora", this._fontStyle2);
  },
  goGame1: function(){
    this.state.start('Block2Game2L1');
  },
  update: function(){
  }
};
