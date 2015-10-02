TuxGame.Block1Game1 = function(game){
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
TuxGame.Block1Game1.prototype = {
	create: function(){
		this.add.sprite(0, 0, 'beach-bg');
		sprite = this.add.sprite(5, 500, 'avatar');
		sprite.scale.setTo(0.15, 0.15);
		sprite = this.add.sprite(100, 530, 'cannon');
		sprite.scale.setTo(0.15, 0.15);
		sprite = this.add.sprite(450, 320, 'pirate_boat');
		sprite.scale.setTo(0.75, 0.75);
		sprite = this.add.sprite(180, 420, 'pirate_boat');
		sprite.scale.setTo(0.75, 0.75);
		sprite = this.add.sprite(600, 500, 'pirate_boat');
		sprite.scale.setTo(0.75, 0.75);
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

	}
};
