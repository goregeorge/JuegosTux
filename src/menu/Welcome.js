TuxGame.Welcome = function(game){
};

TuxGame.Welcome.prototype = {
  create: function(){
    
    // Another Ultra Mega Super Hyper quick fix for fucking Input, Phaser sucks in this aspect
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.arcade.gravity.y = 200;
    this._fontStyle2 = { font: "150px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };
    this._fontStyle = { font: "50px Arial", fill: "#FFFFFF", stroke: "#333", strokeThickness: 5, align: "center" };
    this._fontStyle3 = { font: "25px Arial", fill: "#FFFFFF", stroke: "#333", strokeThickness: 5, align: "center" };

    this.add.sprite(0, 0, 'bg-main-menu');

    // Info
    this.add.text(220, 30, "Juegos Tux", this._fontStyle);
    tux = this.add.sprite(500, 20, 'welcome-male-tux');
    tux.scale.setTo(0.15, 0.15);

    // Bloque 1
    this.add.text(20, 130, "Esta serie de juegos fueron elaborados durante el servicio social", this._fontStyle3);
    this.add.text(20, 180, "en el proyecto \"Juega, Aprende y Divierte con Linux\" y tienen", this._fontStyle3);
    this.add.text(20, 230, "como propósito ayudar a los niños de cuarto de primaria en su ", this._fontStyle3);
    this.add.text(20, 280, "aprendizaje de las matemáticas.", this._fontStyle3);
    //  y tienen como propósito   
    goButton = this.add.button(100, 360, 'level-main-menu2', this.goToMainMenu, this, 1, 0, 2);
    // game1block1.scale.setTo(0.4, 0.4);
    this.add.text(155, 380, "¡Jugar!", this._fontStyle2);
    // Esta serie de juegos fueron elaborado durante el servicio social llamado "Juega, Aprende y Divierte con Linux"
    // Y tienen como propósito de ayudar a la enseñanza de las matemáticas a niños de 3° Grado de Primaria.
  },
  goToMainMenu: function(){
    this.state.start('MainMenu');
  }
};