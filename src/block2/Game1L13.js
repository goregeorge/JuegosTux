TuxGame.Block2Game1L13 = function(game){
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
  this.textStyle = { font: '64px Desyrel', align: 'center'};
  this.milliseconds = 0;
  this.seconds = 0;
  this.minutes = 0;
};
TuxGame.Block2Game1L13.prototype = {
  create: function(){
    // start the physics engine
    this.physics.startSystem(Phaser.Physics.ARCADE);
    // display background
    this.add.sprite(0, 0, 'sea-bg');
    this._fontStyle = { font: "35px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };
    this.timer = this.game.add.bitmapText(150, 420, 'desyrel', 'Tiempo', 34);

    line = this.add.sprite(0, 10, 'line');

    // Displaying Numbers
    number0 = this.add.sprite(30,  10, 'number0');
    fishHook0 = this.add.sprite(30, 50, 'fishHook');

    number1 = this.add.sprite(110, 10, 'number1');
    fishHook1 = this.add.sprite(110, 50, 'fishHook');

    number2 = this.add.sprite(190, 10, 'number2');
    fishHook2 = this.add.sprite(190, 50, 'fishHook');

    number3 = this.add.sprite(270, 10, 'number3');
    fishHook3 = this.add.sprite(270, 50, 'fishHook');

    number4 = this.add.sprite(350, 10, 'number4');
    fishHook4 = this.add.sprite(350, 50, 'fishHook');

    number5 = this.add.sprite(430, 10, 'number5');
    fishHook5 = this.add.sprite(430, 50, 'fishHook');

    number6 = this.add.sprite(510, 10, 'number6');
    fishHook6 = this.add.sprite(510, 50, 'fishHook');

    number7 = this.add.sprite(590, 10, 'number7');
    fishHook7 = this.add.sprite(590, 50, 'fishHook');

    number8 = this.add.sprite(670, 10, 'number8');
    fishHook8 = this.add.sprite(670, 50, 'fishHook');

    number9 = this.add.sprite(740, 10, 'number9');
    fishHook9 = this.add.sprite(740, 50, 'fishHook');


    console.log(this.twoIntegersSumOperationInRange(1,10));
    console.log(this.twoFloatsSumOperationInRange(1,10));
    console.log(this.threeFloatsOperationWithSumAndRestInRange(1,10));

    // Display fishes
    fishes =     this.getRandomFishes(3);
    fishLeft =   this.add.sprite(100, 200, fishes[0]);
    fishCenter = this.add.sprite(300, 200, fishes[1]);
    fishRight =  this.add.sprite(500, 200, fishes[2]);

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
    this.randomResult = this.threeIntegersOperationWithSumAndDif();

    this.numberToChoice = this.randomResult[1];
    this.numberToChoiceSprite = numberSprites[this.numberToChoice];
    this.operation = this.randomResult[0];
    // Getting Random Fish to choice
    this.fishToChoiceSprite = fishSprites[Math.floor(Math.random()*fishSprites.length)];
    this.fishToChoice = this.fishesColors[this.fishToChoiceSprite.key];

    // Display Instructions
    this.instructionText = this.add.text(100, 320, "Arrastra el Pez de color "+ this.fishToChoice +"\nAl resultado de esta operación " + this.operation, this._fontStyle);

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

    // Add Timer
    this.time.events.add(Phaser.Timer.SECOND * 20, this.timeOver, this);
  },
  timeOver : function () {
    wrong = this.add.sprite(300, 100, 'wrong');
    that = this;
    setTimeout(function () {
      that.state.start('Block2Game1L13');
    }, 1200);
  },
  stopDrag: function(currentSprite, endSprite){
    if (!this.physics.arcade.overlap(currentSprite, endSprite, function() {
      currentSprite.input.draggable = false;
      currentSprite.position.copyFrom(endSprite.position);
      currentSprite.anchor.setTo(endSprite.anchor.x, endSprite.anchor.y);
    })){
      currentSprite.position.copyFrom(currentSprite.originalPosition);
      wrong = this.add.sprite(300, 100, 'wrong');
      setTimeout(function () {
        wrong.destroy(true); 
      }, 1200);
    } else {
      this.add.sprite(300, 100, 'happy');
      var that = this;
      setTimeout(function () {
        that.state.start('Block2Game1L13');
      }, 1200);
    }
  },
  stopDragIncorrect: function (currentSprite) {
     currentSprite.position.copyFrom(currentSprite.originalPosition);
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
    this.minutes = Math.floor(this.game.time.events.duration / 60000) % 60;
    this.seconds = Math.floor(this.game.time.events.duration / 1000) % 60;
    this.milliseconds = Math.floor(this.game.time.events.duration) % 100;
    //If any of the digits becomes a single digit number, pad it with a zero
    if (this.milliseconds < 10)
        this.milliseconds = '0' + this.milliseconds;
 
    if (this.seconds < 10)
        this.seconds = '0' + this.seconds;
 
    if (this.minutes < 10)
        this.minutes = '0' + this.minutes;
 
    this.timer.setText("Tiempo Restante: "+ this.seconds + " segundos");
  },
  render: function () {
    // this.game.debug.text("Tiempo: " + this.game.time.events.duration, 32, 32);
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
      ( randomNumber1 + " + " + randomNumber2),
      answer
    ];
  },
  twoIntegersDifOperationInRange: function(){
    answer = null;
    answer = this.getRandomNaturalNumber();
    if(answer > 5) {
      randomNumber1 = 10;
      randomNumber2 = 10 - answer;
    } else {
      randomNumber1 = 10 - answer;
      randomNumber2 = randomNumber1 - answer;
    }
    return [
      ( randomNumber1 + " - " + randomNumber2),
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
      (randomNumber1 + " + " + randomNumber2),
      answer
    ];
  },

  // threeIntegersOperationWithSumAndRestInRange(1, 10)
  // => ["1 + 10 - 5", 6]
  // @return Array with 2 elements.
  //          - First Element: The text to be displayen in the game
  //          - Second Element: The Answer of the operation
  threeIntegersOperationWithSumAndDif: function(){
    randomNumber1 = 4;
    randomNumber2 = Math.floor(Math.random()*6);
    randomNumber3 = Math.floor(Math.random()*5);
    answer = randomNumber1 + randomNumber2 - randomNumber3;
    return [
      (randomNumber1 + " + " + randomNumber2 + " - " + randomNumber3),
      answer,
    ];
  },
  threeIntegersSumInRange: function(){
    randomNumber1 = Math.floor(Math.random()*4);
    randomNumber2 = Math.floor(Math.random()*4);
    randomNumber3 = Math.floor(Math.random()*4);
    answer = randomNumber1 + randomNumber2 + randomNumber3;
    return [
      (randomNumber1 + " + " + randomNumber2 + " + " + randomNumber3),
      answer,
    ];
  },
  threeIntegersDif: function(){
    randomNumber1 = 10;
    randomNumber2 = Math.floor(Math.random()*6);
    randomNumber3 = Math.floor(Math.random()*6);
    answer = randomNumber1 - randomNumber2 - randomNumber3;
    return [
      (randomNumber1 + " - " + randomNumber2 + " - " + randomNumber3),
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
