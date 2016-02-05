CommonInfoDisplayer = function(){
    var globalContext;
};

CommonInfoDisplayer.prototype = {
  displayInfo : function (context, name) {
    globalContext = context;
    context.add.sprite(0, 0, 'point');
    context.add.text(50, 10, "Nivel " + name, context._fontStyle3);
    context.add.sprite(680, 175, 'score-half');
    goods = context.add.sprite(700, 200, 'good-s');
    goods.scale.setTo(0.7, 0.7);
    wrongs = context.add.sprite(700, 260, 'wrong-s');
    wrongs.scale.setTo(0.7, 0.7);
    context.add.text(760, 200, TuxGame._correct, context._fontStyle2);
    wrongsText = context.add.text(760, 260, TuxGame._incorrect, context._fontStyle2);
    context.add.button(700, 500, 'button-home', this.backToHome, this, 1, 0, 2);
    return wrongsText;
  },
  backToHome: function () {
    globalContext.state.start('MainMenu');
  }

};