TuxGame.Block2Game1 = function(game){
  // define needed variables for Candy.Game
  this.game = game;
  this.fishesKeys = ['fish4','fish5','fish6','fish7','fish9'];
  this.fishesColors = {
    'fish4': 'naranja',
    'fish5': 'rojo',
    'fish6': 'verde',
    'fish7': 'morado',
    'fish9': 'azul',
  };
  // define Candy variables to reuse them in Candy.item functions
  TuxGame._scoreText = null;
  TuxGame._correct = 0;
  TuxGame._incorrect = 0;
};
TuxGame.Block2Game1.prototype = {
  create: function(){
    TuxGame._correct = 0;
    TuxGame._incorrect = 0;
    // start the physics engine
    this.physics.startSystem(Phaser.Physics.ARCADE);
    // display background
    this.add.sprite(0, 0, 'sea-bg');
    this._fontStyle = { font: "40px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };
    this._fontStyle2 = { font: "30px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };

    line = this.add.sprite(0, 60, 'line');

    // Level Info
    point = this.add.sprite(0, 0, 'point');
    levelText = this.add.text(50, 10, "Nivel 1", this._fontStyle2);

    goods = this.add.sprite(180, 10, 'good-s');
    goods.scale.setTo(0.7, 0.7);
    goodsText = this.add.text(230, 10, TuxGame._correct +" Aciertos", this._fontStyle2);

    wrongs = this.add.sprite(380, 10, 'wrong-s');
    wrongs.scale.setTo(0.7, 0.7);
    wrongsText = this.add.text(430, 10, TuxGame._incorrect +" Fallos", this._fontStyle2);

    // Displaying Numbers
    number0 = this.add.sprite(60,  60, 'number0');
    number1 = this.add.sprite(132, 60, 'number1');
    number2 = this.add.sprite(204, 60, 'number2');
    number3 = this.add.sprite(276, 60, 'number3');
    number4 = this.add.sprite(348, 60, 'number4');
    number5 = this.add.sprite(420, 60, 'number5');
    number6 = this.add.sprite(492, 60, 'number6');
    number7 = this.add.sprite(564, 60, 'number7');
    number8 = this.add.sprite(636, 60, 'number8');
    number9 = this.add.sprite(708, 60, 'number9');

    // Display fishes
    fishes =     this.getRandomFishes(3);
    fishLeft =   this.add.sprite(140, 200, fishes[0]);
    fishCenter = this.add.sprite(340, 200, fishes[1]);
    fishRight =  this.add.sprite(540, 200, fishes[2]);

    //Create Arrays of Sprites
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

    fishSprites = [
      fishLeft,
      fishCenter,
      fishRight
    ];

    // Getting Random Number to Choice
    this.numberToChoice = this.getRandomNaturalNumber();
    this.numberToChoiceSprite = numberSprites[this.numberToChoice];

    // Getting Random Fish to choice
    this.fishToChoiceSprite = fishSprites[Math.floor(Math.random()*fishSprites.length)];
    this.fishToChoice = this.fishesColors[this.fishToChoiceSprite.key];

    // Display Instructions
    this.instructionText = this.add.text(100, 320, "Arrastra el pez de color "+ this.fishToChoice +"\nal número " + this.numberToChoice, this._fontStyle);

    // Scaling Assets
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
    fishLeft.scale.setTo(0.25, 0.25);
    fishCenter.scale.setTo(0.25, 0.25);
    fishRight.scale.setTo(0.25, 0.25);

    // numberToChoice Physics
    this.physics.arcade.enable(number0);
    this.physics.arcade.enable(number1);
    this.physics.arcade.enable(number2);
    this.physics.arcade.enable(number3);
    this.physics.arcade.enable(number4);
    this.physics.arcade.enable(number5);
    this.physics.arcade.enable(number6);
    this.physics.arcade.enable(number7);
    this.physics.arcade.enable(number8);
    this.physics.arcade.enable(number9);
    this.physics.arcade.enable(fishLeft);
    this.physics.arcade.enable(fishCenter);
    this.physics.arcade.enable(fishRight);

    // Cloning Position for Fishes
    fishLeft.originalPosition = fishLeft.position.clone();
    fishCenter.originalPosition = fishCenter.position.clone();
    fishRight.originalPosition = fishRight.position.clone();

    // Enable drag & drop on fishes
    fishLeft.inputEnabled = true;
    fishLeft.input.enableDrag(true);
    fishCenter.inputEnabled = true;
    fishCenter.input.enableDrag(true);
    fishRight.inputEnabled = true;
    fishRight.input.enableDrag(true);

    // Add onDragStopEvents for NO correct Fishes
    for (var i = 0; i < fishSprites.length; i++){
      if (fishSprites[i] !== this.fishToChoiceSprite) {
        fishSprites[i].events.onDragStop.add(function(currentSprite){
          this.stopDragIncorrect(currentSprite);
        },this);
      }
    }

    // Add onDragStopEvents for correct Fish
    this.fishToChoiceSprite.events.onDragStop.add(function(currentSprite){
      this.stopDrag(currentSprite, this.numberToChoiceSprite);
    },this);
  },
  stopDrag: function(currentSprite, endSprite){
    if (!this.game.physics.arcade.overlap(currentSprite, endSprite, function() {
      currentSprite.input.draggable = false;
      currentSprite.position.copyFrom(endSprite.position);
      currentSprite.anchor.setTo(endSprite.anchor.x, endSprite.anchor.y);
    })){
      currentSprite.position.copyFrom(currentSprite.originalPosition);
      wrong = this.add.sprite(300, 100, 'wrong');
      TuxGame._incorrect += 1;
      wrongsText.setText(TuxGame._incorrect +" Fallos");
      setTimeout(function () {
        wrong.destroy(true); 
      }, 1200);
    } else {
      this.add.sprite(300, 100, 'happy');
      var that = this;
      TuxGame._correct += 1;
      setTimeout(function () {
        that.state.start('Block2Game1L2');
      }, 1200);
    }
  },
  stopDragIncorrect: function (currentSprite) {
     currentSprite.position.copyFrom(currentSprite.originalPosition);
     TuxGame._incorrect += 1;
     wrongsText.setText(TuxGame._incorrect +" Fallos");
     wrong = this.add.sprite(300, 100, 'wrong');
      setTimeout(function () {
        wrong.destroy(true); 
      }, 1200);
  },
  getRandomFishes: function (numberOfFishes) {
    var selectedIndexes = [];
    var randomFishes = [];
    var i = 0;
    while (i < numberOfFishes) {
      randomNumber = Math.floor(Math.random()*this.fishesKeys.length);
      if (!this.existsInArray(selectedIndexes, randomNumber)) {
        fishKey = this.fishesKeys[randomNumber];
        selectedIndexes.push(randomNumber);
        randomFishes[i] = fishKey;
        i++;
      }
    }
    return randomFishes;
  },
  existsInArray: function (array, element) {
    var exists = false;
    var arrayLength = array.length;
    for (var i = 0; i < arrayLength; i++) {
      if (array.indexOf(element) > -1) {
        exists = true;
      }
    }
    return exists;
  },
  getRandomNaturalNumber: function () {
    // Returns a Number between 0 and 9
    return Math.floor(Math.random()*10);
  },
  isCorrectChoice: function(fishSprite, numberSprite) {
    return this.fishToChoiceSprite == fishSprite &&
    this.numberToChoiceSprite == numberSprite;
  },
  update: function(){
  },

  // twoIntegersSumOperationInRange(1, 10)
  // => ["Suma 1 + 9", 10]
  // @return Array with 2 elements.
  //          - First Element: The text to be displayen in the game
  //          - Second Element: The Answer of the operation
  twoIntegersSumOperationInRange: function(min, max){
    answer = null;
    while(answer > max || answer < min) {
      randomNumber1 = (Math.random() * (max - min)) + min;
      randomNumber2 = (Math.random() * (max - min)) + min;
      randomNumber1 = parseInt(randomNumber1);
      randomNumber2 = parseInt(randomNumber2);

      answer = randomNumber1 + randomNumber2;
    }

    return [
      ("Suma " + randomNumber1 + " y " + randomNumber2),
      answer
    ];
  },

  // twoFloatsSumOperationInRange(1, 10)
  // => ["Suma 1.5 + 5.5", 7]
  // @return Array with 2 elements.
  //          - First Element: The text to be displayen in the game
  //          - Second Element: The Answer of the operation
  twoFloatsSumOperationInRange: function(min, max){
    answer = null;
    while(answer > max || answer < min) {
      randomNumber1 = (Math.random() * ((max*2) - min)) + min;
      randomNumber2 = (Math.random() * ((max*2) - min)) + min;
      randomNumber1 = parseInt(randomNumber1) / 2;
      randomNumber2 = parseInt(randomNumber2) / 2;

      answer = randomNumber1 + randomNumber2;
    }

    return [
      ("Suma " + randomNumber1 + " y " + randomNumber2),
      answer
    ];
  },

  // threeIntegersOperationWithSumAndRestInRange(1, 10)
  // => ["1 + 10 - 5", 6]
  // @return Array with 2 elements.
  //          - First Element: The text to be displayen in the game
  //          - Second Element: The Answer of the operation
  threeIntegersOperationWithSumAndRestInRange: function(min, max){
    answer = null;
    while(answer > max || answer < min) {
      randomNumber1 = (Math.random() * (max - min)) + min;
      randomNumber2 = (Math.random() * (max - min)) + min;
      randomNumber3 = (Math.random() * (max - min)) + min;

      randomNumber1 = parseInt(randomNumber1);
      randomNumber2 = parseInt(randomNumber2);
      randomNumber3 = parseInt(randomNumber3);

      answer = randomNumber1 + randomNumber2 - randomNumber3;
    }

    return [
      (randomNumber1 + " + " + randomNumber2 + " - " + randomNumber3),
      answer,
    ];
  },

  // threeFloatsOperationWithSumAndRestInRange(1, 10)
  // => ["1.5 + 2 - .5", 3]
  // @return Array with 2 elements.
  //          - First Element: The text to be displayen in the game
  //          - Second Element: The Answer of the operation
  threeFloatsOperationWithSumAndRestInRange: function(min, max){
    answer = null;
    while(answer > max || answer < min) {
      randomNumber1 = (Math.random() * ((max*2) - min)) + min;
      randomNumber2 = (Math.random() * ((max*2) - min)) + min;
      randomNumber3 = (Math.random() * ((max*2) - min)) + min;

      randomNumber1 = parseInt(randomNumber1) / 2;
      randomNumber2 = parseInt(randomNumber2) / 2;
      randomNumber3 = parseInt(randomNumber3) / 2;

      answer = randomNumber1 + randomNumber2 - randomNumber3;
    }

    return [
      (randomNumber1 + " + " + randomNumber2 + " - " + randomNumber3),
      answer,
    ];
  }

};
