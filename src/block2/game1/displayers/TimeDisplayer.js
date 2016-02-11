TimeDisplayer = function(){

};

TimeDisplayer.prototype = {
  displayTime : function (context) {
    clock  = context.add.sprite(550, 8, 'clock');
    clock.scale.setTo(0.8, 0.8);
    context.timer = context.game.add.bitmapText(600, 10, 'desyrel', 'Tiempo', 30);
  }

};