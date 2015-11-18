IntegersDisplayer = function(){

};

IntegersDisplayer.prototype = {
  displayNumbers : function (context) {
    line = context.add.sprite(0, 60, 'line');
    number0 = context.add.sprite(60,  60, 'number0');
    number1 = context.add.sprite(132, 60, 'number1');
    number2 = context.add.sprite(204, 60, 'number2');
    number3 = context.add.sprite(276, 60, 'number3');
    number4 = context.add.sprite(348, 60, 'number4');
    number5 = context.add.sprite(420, 60, 'number5');
    number6 = context.add.sprite(492, 60, 'number6');
    number7 = context.add.sprite(564, 60, 'number7');
    number8 = context.add.sprite(636, 60, 'number8');
    number9 = context.add.sprite(708, 60, 'number9');

    line.scale.setTo(1.25, 1);
    number0.scale.setTo(0.08, 0.08);
    number1.scale.setTo(0.08, 0.08);
    number2.scale.setTo(0.08, 0.08);
    number3.scale.setTo(0.08, 0.08);
    number4.scale.setTo(0.08, 0.08);
    number5.scale.setTo(0.08, 0.08);
    number6.scale.setTo(0.08, 0.08);
    number7.scale.setTo(0.08, 0.08);
    number8.scale.setTo(0.08, 0.08);
    number9.scale.setTo(0.08, 0.08);

    context.physics.arcade.enable(number0);
    context.physics.arcade.enable(number1);
    context.physics.arcade.enable(number2);
    context.physics.arcade.enable(number3);
    context.physics.arcade.enable(number4);
    context.physics.arcade.enable(number5);
    context.physics.arcade.enable(number6);
    context.physics.arcade.enable(number7);
    context.physics.arcade.enable(number8);
    context.physics.arcade.enable(number9);

    numberSprites = [
        number0,
        number1,
        number2,
        number3,
        number4,
        number5,
        number6,
        number7,
        number8,
        number9
    ];

    return numberSprites;
  }

};