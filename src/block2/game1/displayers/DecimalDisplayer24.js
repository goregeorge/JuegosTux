DecimalDisplayer24 = function(){

};

DecimalDisplayer24.prototype = {
  displayNumbers : function (context) {
    line = context.add.sprite(0, 60, 'line');
    number0 = context.add.sprite(40,  60, 'number2');
    number1 = context.add.sprite(93, 60, 'number2,2');
    number2 = context.add.sprite(169, 60, 'number2,4');
    number3 = context.add.sprite(242, 60, 'number2,6');
    number4 = context.add.sprite(316, 60, 'number2,8');
    number5 = context.add.sprite(385, 60, 'number3');
    number6 = context.add.sprite(440, 60, 'number3,2');
    number7 = context.add.sprite(512, 60, 'number3,4');
    number8 = context.add.sprite(582, 60, 'number3,6');
    number9 = context.add.sprite(654, 60, 'number3,8');
    number10 = context.add.sprite(728, 60, 'number4');

    line.scale.setTo(1.25, 1);
    number0.scale.setTo(0.08, 0.08);
    number1.scale.setTo(0.12, 0.12);
    number2.scale.setTo(0.12, 0.12);
    number3.scale.setTo(0.12, 0.12);
    number4.scale.setTo(0.12, 0.12);
    number5.scale.setTo(0.08, 0.08);
    number6.scale.setTo(0.12, 0.12);
    number7.scale.setTo(0.12, 0.12);
    number8.scale.setTo(0.12, 0.12);
    number9.scale.setTo(0.12, 0.12);
    number10.scale.setTo(0.08, 0.08);

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
    context.physics.arcade.enable(number10);

    numberSprites = {
        '2'   : number0,
        '2.2' : number1,
        '2.4' : number2,
        '2.6' : number3,
        '2.8' : number4,
        '3'   : number5,
        '3.2' : number6,
        '3.4' : number7,
        '3.6' : number8,
        '3.8' : number9,
        '4'   : number10,
    };

    return numberSprites;
  }

};