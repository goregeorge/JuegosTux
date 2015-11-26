TimeInitializer = function(){
  this.commonInitializer = new CommonInitializer();
};

TimeInitializer.prototype = {
  init : function (context) {
    this.commonInitializer.init(context);
    this.initTime(context);
  },
  initTime: function (context) {
    context.milliseconds = 0;
    context.seconds = 0;
    context.minutes = 0;
    context.time.events.add(Phaser.Timer.SECOND * 20, Game1Engine.timeOver, context);
  }

};