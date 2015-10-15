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
  TuxGame._score = 0;
  TuxGame._health = 0;
};
TuxGame.Block2Game1.prototype = {
  create: function(){
    // start the physics engine
    this.physics.startSystem(Phaser.Physics.ARCADE);
    // display background
    this.add.sprite(0, 0, 'sea-bg');
    this._fontStyle = { font: "40px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };

    // Displaying Numbers 
    number0 = this.add.sprite(30, 10, 'number0');
    number1 = this.add.sprite(110, 10, 'number1');
    number2 = this.add.sprite(170, 10, 'number2');
    number3 = this.add.sprite(270, 10, 'number3');
    n4      = this.add.sprite(350, 10, 'n4');
    number5 = this.add.sprite(430, 10, 'number5');
    number6 = this.add.sprite(510, 10, 'number6');
    number7 = this.add.sprite(590, 10, 'number7');
    number8 = this.add.sprite(670, 10, 'number8');
    number9 = this.add.sprite(750, 10, 'number9');

    // Display fishes
    fishes = this.getRandomFishes(3);
    fishLeft = this.add.sprite(100, 200, fishes[0]);
    fishCenter = this.add.sprite(300, 200, fishes[1]);
    fishRight = this.add.sprite(500, 200, fishes[2]);

    //Create Arrays of Sprites
    numberSprites = [number0, 
        number1, 
        number2, 
        number3,
        n4,
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
    this.instructionText = this.add.text(100, 320, "Seleciona el Pez de color "+ this.fishToChoice +"\nY colócalo en el número " + this.numberToChoice, this._fontStyle);

    // Scaling Assets
    number0.scale.setTo(0.08, 0.08);
    number1.scale.setTo(0.08, 0.08);
    number2.scale.setTo(0.08, 0.08);
    number3.scale.setTo(0.08, 0.08);
    n4.scale.setTo(0.08, 0.08);
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
    this.physics.arcade.enable(n4);
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
      console.log("Correcto");
    })){
      currentSprite.position.copyFrom(currentSprite.originalPosition);
    }
  },
  stopDragIncorrect: function (currentSprite) {
     currentSprite.position.copyFrom(currentSprite.originalPosition);
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
    // update timer every frame
    // this._spawnCandyTimer += this.time.elapsed;
    // // if spawn timer reach one second (1000 miliseconds)
    // if(this._spawnCandyTimer > 1000) {
    // 	// reset it
    // 	this._spawnCandyTimer = 0;
    // 	// and spawn new candy
    // 	Candy.item.spawnCandy(this);
    // }
    // // loop through all candy on the screen
    // this._candyGroup.forEach(function(candy){
    // 	// to rotate them accordingly
    // 	candy.angle += candy.rotateMe;
    // });
    // // if the health of the player drops to 0, the player dies = game over
    // if(!Candy._health) {
    // 	// show the game over message
    // 	this.add.sprite((Candy.GAME_WIDTH-594)/2, (Candy.GAME_HEIGHT-271)/2, 'game-over');
    // 	// pause the game
    // 	this.game.paused = true;
    // }
  }
};

// Candy.item = {
// 	spawnCandy: function(game){
// 		// calculate drop position (from 0 to game width) on the x axis
// 		var dropPos = Math.floor(Math.random()*Candy.GAME_WIDTH);
// 		// define the offset for every candy
// 		var dropOffset = [-27,-36,-36,-38,-48];
// 		// randomize candy type
// 		var candyType = Math.floor(Math.random()*5);
// 		// create new candy
// 		var candy = game.add.sprite(dropPos, dropOffset[candyType], 'candy');
// 		// add new animation frame
// 		candy.animations.add('anim', [candyType], 10, true);
// 		// play the newly created animation
// 		candy.animations.play('anim');
// 		// enable candy body for physic engine
// 		game.physics.enable(candy, Phaser.Physics.ARCADE);
// 		// enable candy to be clicked/tapped
// 		candy.inputEnabled = true;
// 		// add event listener to click/tap
// 		candy.events.onInputDown.add(this.clickCandy, this);
// 		// be sure that the candy will fire an event when it goes out of the screen
// 		candy.checkWorldBounds = true;
// 		// reset candy when it goes out of screen
// 		candy.events.onOutOfBounds.add(this.removeCandy, this);
// 		// set the anchor (for rotation, position etc) to the middle of the candy
// 		candy.anchor.setTo(0.5, 0.5);
// 		// set the random rotation value
// 		candy.rotateMe = (Math.random()*4)-2;
// 		// add candy to the group
// 		game._candyGroup.add(candy);
// 	},
// 	clickCandy: function(candy){
// 		// kill the candy when it's clicked
// 		candy.kill();
// 		// add points to the score
// 		Candy._score += 1;
// 		// update score text
// 		Candy._scoreText.setText(Candy._score);
// 	},
// 	removeCandy: function(candy){
// 		// kill the candy
// 		candy.kill();
// 		// decrease player's health
// 		Candy._health -= 10;
// 	}
// };
