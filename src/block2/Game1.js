TuxGame.Block2Game1 = function(game){
  // define needed variables for Candy.Game
  this.game = game;
  this.fishesKeys = ['fish4','fish5','fish6','fish7','fish9'];
  this.game1Commons = new Game1Commons(new Game1Level1());

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

    // Level Info
    wrongsText = this.game1Commons.displayLevelInfo(this);

    // Displaying Numbers
    numberSprites = this.game1Commons.displayNumbers(this);
    
    // Display fishes
    fishSprites = this.game1Commons.displayFishes(this);

    // Getting Random Number to Choice
    this.numberToChoice = this.game1Commons.getRandomNumberToChoice(this);
    this.numberToChoiceSprite = numberSprites[this.numberToChoice];

    // Getting Random Fish to choice
    this.fishToChoiceSprite = fishSprites[Math.floor(Math.random()*fishSprites.length)];
    this.fishToChoice = this.fishesColors[this.fishToChoiceSprite.key];

    // Display Instructions
    this.instructionText = this.add.text(100, 320, "Arrastra el pez de color "+ this.fishToChoice +"\nal número " + this.numberToChoice, this._fontStyle);

    // Add onDragStopEvents for NO correct Fishes
    for (var i = 0; i < fishSprites.length; i++){
      if (fishSprites[i] !== this.fishToChoiceSprite) {
        fishSprites[i].events.onDragStop.add(function(currentSprite){
          this.game1Commons.stopDragIncorrect(this, currentSprite);
        },this);
      }
    }

    // Add onDragStopEvents for correct Fish
    this.fishToChoiceSprite.events.onDragStop.add(function(currentSprite){
      this.game1Commons.stopDrag(this, currentSprite, this.numberToChoiceSprite);
    },this);
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
  update: function(){
  },

  // twoIntegersSumOperationInRange(1, 10)
  // => ["Suma 1 + 9", 10]
  // @return Array with 2 elements.
  //          - First Element: The text to be displayen in the game
  //          - Second Element: The Answer of the operation
  twoIntegersSumOperationInRange: function(min, max){
    // Force it to enter loop
    answer = min - 1;
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
  // In the example given answer >= 1.5 && answer <= 9.5 && (answer % 0.5 == 0)
  // @return Array with 2 elements.
  //          - First Element: The text to be displayen in the game
  //          - Second Element: The Answer of the operation
  twoFloatsDiffOperationInRange: function(min, max){
    // Force it to enter loop
    answer = min - 1;
    while((answer + .5 > max) || (answer - .5) < min) { // answer out of bounds
      randomNumber1 = this._round(
        (Math.random() * (max) - min) + min,
        0.5
      );
      randomNumber2 = this._round(
        (Math.random() * (max) - min) + min,
        0.5
      );


      answer = randomNumber1 - randomNumber2;
    }

    return [
      (randomNumber1 + " - " + randomNumber2),
      answer
    ];
  },

  // threeIntegersOperationWithSumAndRestInRange(1, 10)
  // => ["1 + 10 - 5", 6]
  // @return Array with 2 elements.
  //          - First Element: The text to be displayen in the game
  //          - Second Element: The Answer of the operation
  threeIntegersOperationWithSumAndRestInRange: function(min, max){
    // Force it to enter loop
    answer = min - 1;
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
  // In the example given answer >= 1.5 && answer <= 9.5 && (answer % 0.5 == 0)
  // @return Array with 2 elements.
  //          - First Element: The text to be displayen in the game
  //          - Second Element: The Answer of the operation
  threeFloatsOperationWithSumAndRestInRange: function(min, max){
    // Force it to enter loop
    answer = min - 1;
    while((answer + .5 > max) || (answer - .5) < min) { // answer out of bounds

      randomNumber1 = this._round(
        (Math.random() * (max) - min) + min,
        0.5
      );
      randomNumber2 = this._round(
        (Math.random() * (max + 1) - min) + min,
        0.5
      );
      randomNumber3 = this._round(
        (Math.random() * (max) - min) + min,
        0.5
      );

      answer = randomNumber1 + randomNumber2 - randomNumber3;
    }

    return [
      (randomNumber1 + " + " + randomNumber2 + " - " + randomNumber3),
      answer,
    ];
  },

  _round: function(number, numberToRound) {
    var rest = number%numberToRound;
    if (rest <= (numberToRound/2)) {
      return number-rest;
    } else {
      return number+numberToRound-rest;
    }
  }

};
