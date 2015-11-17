Game1Commons = function(){

};

Game1Commons.prototype = {
  displayNumbers : function  (context) {
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
  },
  displayFishes: function (context) {
    fishes     =  context.getRandomFishes(3);

    fishLeft   =  context.add.sprite(140, 200, fishes[0]);
    fishCenter =  context.add.sprite(340, 200, fishes[1]);
    fishRight  =  context.add.sprite(540, 200, fishes[2]);

    fishLeft.scale.setTo(0.25, 0.25);
    fishCenter.scale.setTo(0.25, 0.25);
    fishRight.scale.setTo(0.25, 0.25);

    context.physics.arcade.enable(fishLeft);
    context.physics.arcade.enable(fishCenter);
    context.physics.arcade.enable(fishRight);

    fishLeft.inputEnabled = true;
    fishLeft.input.enableDrag(true);
    fishCenter.inputEnabled = true;
    fishCenter.input.enableDrag(true);
    fishRight.inputEnabled = true;
    fishRight.input.enableDrag(true);

    fishSprites = [
      fishLeft,
      fishCenter,
      fishRight
    ];

    return fishSprites;
  }
};