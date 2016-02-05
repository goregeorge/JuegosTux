TuxGame.MainMenu = function(game){
};
TuxGame.MainMenu.prototype = {
  create: function(){
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.arcade.gravity.y = 200;
    this._fontStyle2 = { font: "35px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };
    this._fontStyle = { font: "50px Arial", fill: "#FFFFFF", stroke: "#333", strokeThickness: 5, align: "center" };
    this._fontStyle3 = { font: "40px Arial", fill: "#FFFFFF", stroke: "#333", strokeThickness: 5, align: "center" };

    this.add.sprite(0, 0, 'bg-main-menu');

    // Info
    this.add.text(220, 30, "Juegos Tux", this._fontStyle);
    tux = this.add.sprite(500, 20, 'welcome-male-tux');
    tux.scale.setTo(0.15, 0.15);

    // Bloque 1
    this.add.text(320, 110, "Bloque 1", this._fontStyle3);
    game1block1 = this.add.button(140, 160, 'level-main-menu2', this.goGame1, this, 1, 0, 2);
    game1block1.scale.setTo(0.4, 0.4);
    this.add.text(190, 180, "Juego 1", this._fontStyle2);

    game2block1 = this.add.button(420, 160, 'level-main-menu2', this.goGame1, this, 1, 0, 2);
    game2block1.scale.setTo(0.4, 0.4);
    this.add.text(480, 180, "Juego 2", this._fontStyle2);

    // Bloque 2
    this.add.text(320, 280, "Bloque 2", this._fontStyle3);
    game1block2 = this.add.button(140, 330, 'level-main-menu2', this.goGame1, this, 1, 0, 2);
    game1block2.scale.setTo(0.4, 0.4);
    this.add.text(190, 350, "Juego 1", this._fontStyle2);

    game2block2 = this.add.button(420, 330, 'level-main-menu2', this.goGame1, this, 1, 0, 2);
    game2block2.scale.setTo(0.4, 0.4);
    this.add.text(480, 350, "Juego 2", this._fontStyle2);

    // Bloque 3
    this.add.text(320, 450, "Bloque 3", this._fontStyle3);
    game1block3 = this.add.button(140, 500, 'level-main-menu2', this.goGame1, this, 1, 0, 2);
    game1block3.scale.setTo(0.4, 0.4);
    this.add.text(190, 520, "Juego 1", this._fontStyle2);

    game2block3 = this.add.button(420, 500, 'level-main-menu2', this.goGame1, this, 1, 0, 2);
    game2block3.scale.setTo(0.4, 0.4);
    this.add.text(480, 520, "Juego 2", this._fontStyle2);
    
  },
  goGame1: function(){
    this.state.start('MenuB3G2');
  },
  update: function(){
  }
};