FirstDecimalDisplayer = function(){

};

FirstDecimalDisplayer.prototype = {
  displayNumbers : function (context) {
    line = context.add.sprite(0, 60, 'line');
    number0 = context.add.sprite(60,  60, 'number0');
    number1 = context.add.sprite(116, 60, 'number0,5');
    number2 = context.add.sprite(190, 60, 'number1');
    number3 = context.add.sprite(237, 60, 'number1,5');
    number4 = context.add.sprite(320, 60, 'number2');
    number5 = context.add.sprite(379, 60, 'number2,5');
    number6 = context.add.sprite(450, 60, 'number3');
    number7 = context.add.sprite(505, 60, 'number3,5');
    number8 = context.add.sprite(580, 60, 'number4');
    number9 = context.add.sprite(636, 60, 'number4,5');
    number10 = context.add.sprite(710, 60, 'number5');

    line.scale.setTo(1.25, 1);
    number0.scale.setTo(0.08, 0.08);
    number1.scale.setTo(0.12, 0.12);
    number2.scale.setTo(0.08, 0.08);
    number3.scale.setTo(0.12, 0.12);
    number4.scale.setTo(0.08, 0.08);
    number5.scale.setTo(0.12, 0.12);
    number6.scale.setTo(0.08, 0.08);
    number7.scale.setTo(0.12, 0.12);
    number8.scale.setTo(0.08, 0.08);
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

    numberSprites = {
        '0'   : number0,
        '0.5' : number1,
        '1'   : number2,
        '1.5' : number3,
        '2'   : number4,
        '2.5' : number5,
        '3'   : number6,
        '3.5' : number7,
        '4'   : number8,
        '4.5' : number9,
        '5'   : number10,
    };

    return numberSprites;
  }

};