TuxGame.Block2Game1 = function(game){
  // define needed variables for Candy.Game
  this._player = null;
  this._candyGroup = null;
  this._spawnCandyTimer = 0;
  this._fontStyle = null;
  this.game = game;
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
    fishLeft = this.add.sprite(100, 200, 'fish9');
    fishCenter = this.add.sprite(300, 200, 'fish4');
    fishRight = this.add.sprite(500, 200, 'fish5');

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

    // Enabling Physics
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

    // Add onDragStopEvents
    fishLeft.events.onDragStop.add(function(currentSprite){
      this.stopDrag(currentSprite, number0);
    },this);
    fishCenter.events.onDragStop.add(function(currentSprite){
      this.stopDrag(currentSprite, number0);
    },this);
    fishRight.events.onDragStop.add(function(currentSprite){
      this.stopDrag(currentSprite, number0);
    },this);
    
    this._fontStyle = { font: "40px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };

  },
  stopDrag: function(currentSprite, endSprite){
    console.log(currentSprite.key);
    console.log(endSprite.key);
    cosa = !this.game.physics.arcade.overlap(currentSprite, endSprite, function() {
      currentSprite.input.draggable = false;
      currentSprite.position.copyFrom(endSprite.position); 
      currentSprite.anchor.setTo(endSprite.anchor.x, endSprite.anchor.y); 
    });
    console.log(cosa);
    if (!this.game.physics.arcade.overlap(currentSprite, endSprite, function() {
      currentSprite.input.draggable = false;
      currentSprite.position.copyFrom(endSprite.position); 
      currentSprite.anchor.setTo(endSprite.anchor.x, endSprite.anchor.y); 
    })){
     currentSprite.position.copyFrom(currentSprite.originalPosition);
    }
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
