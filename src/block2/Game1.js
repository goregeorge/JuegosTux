TuxGame.Block2Game1 = function(game){
  // define needed variables for Candy.Game
  this._player = null;
  this._candyGroup = null;
  this._spawnCandyTimer = 0;
  this._fontStyle = null;
  // define Candy variables to reuse them in Candy.item functions
  TuxGame._scoreText = null;
  TuxGame._score = 0;
  TuxGame._health = 0;
};
TuxGame.Block2Game1.prototype = {
  create: function(){
    var sprite;
    // start the physics engine
    this.physics.startSystem(Phaser.Physics.ARCADE);
    // set the global gravity
    this.physics.arcade.gravity.y = 200;
    // display background
    this.add.sprite(0, 0, 'sea-bg');

    // Display fishes fishes
    fishLeft = this.add.sprite(100, 200, 'fish9');
    fishLeft.scale.setTo(0.25, 0.25);
    fishCenter = this.add.sprite(300, 200, 'fish4');
    fishCenter.scale.setTo(0.25, 0.25);
    fishRight = this.add.sprite(500, 200, 'fish5');
    fishRight.scale.setTo(0.25, 0.25);

    // Enable drag & drop on fishes
    fishLeft.inputEnabled = true;
    fishLeft.input.enableDrag(true);
    fishCenter.inputEnabled = true;
    fishCenter.input.enableDrag(true);
    fishRight.inputEnabled = true;
    fishRight.input.enableDrag(true);

    this._fontStyle = { font: "40px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };

  },
  managePause: function(){
    // pause the game
    this.game.paused = true;
    // add proper informational text
    var pausedText = this.add.text(100, 250, "Game paused.\nTap anywhere to continue.", this._fontStyle);
    // set event listener for the user's click/tap the screen
    this.input.onDown.add(function(){
      // remove the pause text
      pausedText.destroy();
      // unpause the game
      this.game.paused = false;
    }, this);
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
