TuxGame.MainMenu = function(game){
};

TuxGame.goToHome = function () {
  this.state.start('MainMenu');
}

TuxGame.MainMenu.prototype = {
  create: function(){
    // Stop ALL Audios
    TuxGame.G1B1_LOOP.stop();
    TuxGame.G2B1_LOOP.stop();
    TuxGame.G1B2_LOOP.stop();
    TuxGame.G2B2_LOOP.stop();
    TuxGame.G1B3_LOOP.stop();
    TuxGame.G2B3_LOOP.stop();

    // Add LOOP AUDIO
    TuxGame.MAIN_LOOP_SONG.loopFull(1);

    // Ultra Mega Super Hyper quick fix for collading game 1 and game 2 of block1
    goodCounter = 0;
    
    // Another Ultra Mega Super Hyper quick fix for fucking Input, Phaser sucks in this aspect

    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.arcade.gravity.y = 200;
    this._fontStyle = { font: "50px Arial", fill: "#FFFFFF", stroke: "#333", strokeThickness: 5, align: "center" };
    this._fontStyle2 = { font: "35px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };
    this._fontStyle3 = { font: "40px Arial", fill: "#FFFFFF", stroke: "#333", strokeThickness: 5, align: "center" };
    this._fontStyle4 = { font: "25px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };

    this.add.sprite(0, 0, 'bg-main-menu');

    // Info
    this.add.text(220, 30, "Juegos Tux", this._fontStyle);
    tux = this.add.sprite(500, 20, 'welcome-male-tux');
    tux.scale.setTo(0.15, 0.15);

    // Bloque 1
    this.add.text(320, 90, "Bloque 1", this._fontStyle3);
    this.add.text(250, 130, "Sumas, restas y fracciones", this._fontStyle4);
    game1block1 = this.add.button(140, 165, 'level-main-menu2', this.goGame1Block1, this, 1, 0, 2);
    game1block1.scale.setTo(0.4, 0.4);
    this.add.text(190, 180, "Juego 1", this._fontStyle2);

    game2block1 = this.add.button(420, 165, 'level-main-menu2', this.goGame2Block1, this, 1, 0, 2);
    game2block1.scale.setTo(0.4, 0.4);
    this.add.text(480, 180, "Juego 2", this._fontStyle2);

    // Bloque 2
    this.add.text(320, 255, "Bloque 2", this._fontStyle3);
    this.add.text(150, 295, "Recta númerica y simplificación de fracciones", this._fontStyle4);
    game1block2 = this.add.button(140, 330, 'level-main-menu2', this.goGame1Block2, this, 1, 0, 2);
    game1block2.scale.setTo(0.4, 0.4);
    this.add.text(190, 350, "Juego 1", this._fontStyle2);

    game2block2 = this.add.button(420, 330, 'level-main-menu2', this.goGame2Block2, this, 1, 0, 2);
    game2block2.scale.setTo(0.4, 0.4);
    this.add.text(480, 350, "Juego 2", this._fontStyle2);

    // Bloque 3
    this.add.text(320, 430, "Bloque 3", this._fontStyle3);
    this.add.text(110, 470, "Suma, resta de fracciones y conversión de unidades", this._fontStyle4);
    game1block3 = this.add.button(140, 510, 'level-main-menu2', this.goGame1Block3, this, 1, 0, 2);
    game1block3.scale.setTo(0.4, 0.4);
    this.add.text(190, 520, "Juego 1", this._fontStyle2);

    game2block3 = this.add.button(420, 510, 'level-main-menu2', this.goGame2Block3, this, 1, 0, 2);
    game2block3.scale.setTo(0.4, 0.4);
    this.add.text(480, 520, "Juego 2", this._fontStyle2);
    
  },
  goGame1Block1: function(){
    this.state.start('MenuB1G1');
  },
  goGame2Block1: function(){
    this.state.start('MenuB1G2');
  },
  goGame1Block2: function(){
    this.state.start('Block2Welcome');
  },
  goGame2Block2: function(){
    this.state.start('Block2Game2Welcome');
  },
  goGame1Block3: function(){
    this.state.start('MenuB3G2');
  },
  goGame2Block3: function(){
    this.state.start('MenuB3G3');
  }
};
