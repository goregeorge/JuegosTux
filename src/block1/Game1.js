var message;
var instruction;
var scoreText;
var score = 0;
var number1, number2, number3;
var image, image2, image3;
var operations = ["2+3", "1+1", "4*2"];
var results = ["5", "2", "8"];
// Between 0 and 2
var randomNumber1 = Math.floor((Math.random() * 3));
// Another number between 0 and 2
var randomNumber2 = Math.floor((Math.random() * 3));
// Between 1 and 2
var randomNumber3 = Math.floor((Math.random() * 2) + 1);
var rightAnswer = results[randomNumber1];
var wrongAnswer1 = Math.floor((Math.random() * 100) + 1);
var wrongAnswer2 = Math.floor((Math.random() * 100) + 1);
var possibleAnswers = [rightAnswer, wrongAnswer1, wrongAnswer2];

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
		image = this.add.sprite(450, 320, 'pirate_boat');
		image.scale.setTo(0.75, 0.75);
		image2 = this.add.sprite(180, 420, 'pirate_boat');
		image2.scale.setTo(0.75, 0.75);
		image3 = this.add.sprite(600, 500, 'pirate_boat');
		image3.scale.setTo(0.75, 0.75);

		image.inputEnabled = true;
	    image2.inputEnabled = true;
	    image3.inputEnabled = true;

		message = this.add.text(250, 16, '', { fill: '#ffffff' });
	    scoreText = this.add.text(800, 16, '', { fill: '#ffffff' });
	    instruction = this.add.text(300, 100, '', { fill: '#ffffff' });
	    instruction.text = "Select the " + operations[randomNumber1] + " boat";
		// setPossibleAnswers();
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

	},
	setPossibleAnswers: function() {
	    number1 = this.add.text(100, 100, '', { fill: '#ffffff' });
	    number1.text = possibleAnswers[randomNumber2];
	    number2 = this.add.text(250, 250, '', { fill: '#ffffff' });
	    if (number1.text == possibleAnswers[0]) {
	        number2.text = possibleAnswers[randomNumber3];
	    } else {
	        number2.text = possibleAnswers[0];
	    }
	    number3 = this.add.text(400, 400, '', { fill: '#ffffff' });
	    if (number1.text == possibleAnswers[0] || number2.text == possibleAnswers[0]) {
	        if (number1.text == possibleAnswers[1] || number2.text == possibleAnswers[1]) {
	            number3.text = possibleAnswers[2];
	        } else {
	            number3.text = possibleAnswers[1];
	        }
	    } else {
	        number3.text = possibleAnswers[0];
	    }
	    if (number1.text == possibleAnswers[0]) {
	        image.events.onInputDown.add(increaseScore, this);
	        image2.events.onInputDown.add(decreaseScore, this);
	        image3.events.onInputDown.add(decreaseScore, this);
	    }
	    if (number2.text == possibleAnswers[0]) {
	        image.events.onInputDown.add(decreaseScore, this);
	        image2.events.onInputDown.add(increaseScore, this);
	        image3.events.onInputDown.add(decreaseScore, this);
	    }
	    if (number3.text == possibleAnswers[0]) {
	        image.events.onInputDown.add(decreaseScore, this);
	        image2.events.onInputDown.add(decreaseScore, this);
	        image3.events.onInputDown.add(increaseScore, this);
	    }
	},
	increaseScore: function() {
	    score++;
	    message.text = "Nice done.";
	    scoreText.text = "Score: " + score;
	},
	decreaseScore: function() {
	    score--;
	    message.text = "Oops, wrong answer.";
	    scoreText.text = "Score: " + score;
	}
};
