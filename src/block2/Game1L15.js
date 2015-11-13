TuxGame.Block2Game1L15 = function(game){
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
  this.milliseconds = 0;
  this.seconds = 0;
  this.minutes = 0;
};
TuxGame.Block2Game1L15.prototype = {
  create: function(){
    // start the physics engine
    this.physics.startSystem(Phaser.Physics.ARCADE);
    // display background
    this.add.sprite(0, 0, 'sea-bg');
    this._fontStyle = { font: "35px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };
    this._fontStyle2 = { font: "30px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };

    line = this.add.sprite(0, 60, 'line');

     // Level Info
    point = this.add.sprite(0, 0, 'point');
    levelText = this.add.text(50, 10, "Nivel 9", this._fontStyle2);

    this.add.sprite(680, 175, 'score-half');
    goods = this.add.sprite(700, 200, 'good-s');
    goods.scale.setTo(0.7, 0.7);
    goodsText = this.add.text(770, 200, TuxGame._correct, this._fontStyle2);
    wrongs = this.add.sprite(700, 260, 'wrong-s');
    wrongs.scale.setTo(0.7, 0.7);
    wrongsText = this.add.text(770, 260, TuxGame._incorrect, this._fontStyle2);

    clock  = this.add.sprite(550, 8, 'clock');
    clock.scale.setTo(0.8, 0.8);
    this.timer = this.game.add.bitmapText(600, 10, 'desyrel', 'Tiempo', 30);

    // Displaying Numbers
    number0 = this.add.sprite(60,  60, 'number4');
    number1 = this.add.sprite(116, 60, 'number4,5');
    number2 = this.add.sprite(190, 60, 'number5');
    number3 = this.add.sprite(237, 60, 'number5,5');
    number4 = this.add.sprite(320, 60, 'number6');
    number5 = this.add.sprite(379, 60, 'number6,5');
    number6 = this.add.sprite(450, 60, 'number7');
    number7 = this.add.sprite(505, 60, 'number7,5');
    number8 = this.add.sprite(580, 60, 'number8');
    number9 = this.add.sprite(636, 60, 'number8,5');
    number10 = this.add.sprite(710, 60, 'number9');

    // Display fishes
    fishes =     this.getRandomFishes(3);
    fishLeft =   this.add.sprite(140, 200, fishes[0]);
    fishCenter = this.add.sprite(340, 200, fishes[1]);
    fishRight =  this.add.sprite(540, 200, fishes[2]);

    //Create Arrays of Sprites
    numberSprites = {
        '4'   : number0,
        '4.5' : number1,
        '5'   : number2,
        '5.5' : number3,
        '6'   : number4,
        '6.5' : number5,
        '7'   : number6,
        '7.5' : number7,
        '8'   : number8,
        '8.5' : number9,
        '9'   : number10,
    };

    fishSprites = [
      fishLeft,
      fishCenter,
      fishRight
    ];

    // Getting Random Number to Choice
    this.randomResult = this.twoFloatsSumOperationInRange(4,9);

    this.numberToChoice = this.randomResult[1].toString();
    this.numberToChoiceSprite = numberSprites[this.numberToChoice];
    this.operation = this.randomResult[0];
    // Getting Random Fish to choice
    this.fishToChoiceSprite = fishSprites[Math.floor(Math.random()*fishSprites.length)];
    this.fishToChoice = this.fishesColors[this.fishToChoiceSprite.key];

    // Display Instructions
    this.instructionText = this.add.text(100, 320, "Arrastra el pez de color "+ this.fishToChoice +"\nal resultado de esta operación " + this.operation, this._fontStyle);

    // Scaling Assets
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
    TuxGame._incorrect += 1;
    that = this;
    setTimeout(function () {
      that.state.start('Block2Game1L15');
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
      TuxGame._incorrect += 1;
      wrongsText.setText(TuxGame._incorrect);
      setTimeout(function () {
        wrong.destroy(true); 
      }, 1200);
    } else {
      this.add.sprite(300, 100, 'happy');
      TuxGame._correct += 1;
      var that = this;
      setTimeout(function () {
        that.state.start('Block2Game1L17');
      }, 1200);
    }
  },
  stopDragIncorrect: function (currentSprite) {
     currentSprite.position.copyFrom(currentSprite.originalPosition);
     TuxGame._incorrect += 1;
     wrongsText.setText(TuxGame._incorrect);
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
 
    this.timer.setText(this.seconds + " segundos");
  },
  render: function () {
    // this.game.debug.text("Tiempo: " + this.game.time.events.duration, 32, 32);
  },

  twoFloatsSumOperationInRange: function(min, max){
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


      answer = randomNumber1 + randomNumber2;
    }

    return [
      (randomNumber1 + " + " + randomNumber2),
      answer
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
