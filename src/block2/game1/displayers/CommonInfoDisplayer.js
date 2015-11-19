CommonInfoDisplayer = function(){

};

CommonInfoDisplayer.prototype = {
  displayInfo : function (context, name) {
    context.add.sprite(0, 0, 'point');
    context.add.text(50, 10, "Nivel " + name, context._fontStyle2);
    context.add.sprite(680, 175, 'score-half');
    goods = context.add.sprite(700, 200, 'good-s');
    goods.scale.setTo(0.7, 0.7);
    wrongs = context.add.sprite(700, 260, 'wrong-s');
    wrongs.scale.setTo(0.7, 0.7);
    context.add.text(760, 200, TuxGame._correct, context._fontStyle2);
    wrongsText = context.add.text(760, 260, TuxGame._incorrect, context._fontStyle2);

    return wrongsText;
  }

};