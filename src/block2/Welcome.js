TuxGame.Block2Welcome = function(game){
};
TuxGame.Block2Welcome.prototype = {
  create: function(){
    var sprite;
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.arcade.gravity.y = 200;
    this._fontStyle2 = { font: "50px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };
    this._fontStyle = { font: "22px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };
    this.add.sprite(0, 0, 'welcome-bg');
    this.add.sprite(100, 0, 'welcome-boat');

    globo = this.add.sprite(170, 70, 'globo-text');
    globo.scale.setTo(0.4, 0.4);
    this.add.text(190, 95, "Ayúdame a capturar\nlos peces ubicándolos\nen la recta númerica", this._fontStyle);
    sprite = this.add.sprite(280, 230, 'welcome-male-tux');
    sprite.scale.setTo(0.25, 0.25);

    this._fontStyle = { font: "40px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };
    this.add.button(280, 460, 'button-start', this.goGame1, this, 1, 0, 2);
    this.add.text(390, 495, "Jugar Ahora", this._fontStyle2);
  },
  goGame1: function(){
    this.state.start('Block2Game1');
  },
  update: function(){
  }
};
