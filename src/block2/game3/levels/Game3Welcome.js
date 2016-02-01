TuxGame.Block2Game3Welcome = function(game){
};
TuxGame.Block2Game3Welcome.prototype = {
  create: function(){
    var sprite;
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.arcade.gravity.y = 200;
    this._fontStyle2 = { font: "50px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };
    this._fontStyle = { font: "22px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };
    this.add.sprite(0, 0, 'b2g3-welcome');

    globo = this.add.sprite(480, 180, 'globo-text');
    globo.scale.setTo(0.4, 0.4);
    this.add.text(485, 205, "Selecciona la fracción\n que representa la parte\n pintada del pez", this._fontStyle);

    this._fontStyle = { font: "40px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };
    this.add.button(30, 450, 'button-start', this.goGame1, this, 1, 0, 2);
    this.add.text(135, 485, "Jugar Ahora", this._fontStyle2);
  },
  goGame1: function(){
    this.state.start('Block2Game3L1');
  },
  update: function(){
  }
};
