var message;
var instruction;
var scoreText;
var reaction = 0;
var score = 30;
var number1, number2, number3;
var image, image2, image3;
var operations = ["2+3", "1+1", "4*2", "6*5", "8-4", "9-3", "3*4", "9+9", "8-5"];
var results = ["5", "2", "8", "30", "4", "6", "12", "18", "3"];
// Between 0 and 2
var randomNumber1 = Math.floor((Math.random() * 9));
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
		home_button = this.add.sprite(0, 0, 'home_button');
		home_button.scale.setTo(0.07, 0.07);
		sprite = this.add.sprite(180, 280, 'avatar');
		sprite.scale.setTo(0.20, 0.20);
		sprite = this.add.sprite(280, 410, 'cannon_ball');
		sprite.scale.setTo(0.25, 0.25);
		sprite = this.add.sprite(180, 370, 'cannon');
		sprite.scale.setTo(0.25, 0.25);
		sprite = this.add.sprite(20, 50, 'expressions_bubble');
		sprite.scale.setTo(0.30, 0.30);
		bubble3 = this.add.sprite(680, 16, 'coins');
		bubble3.scale.setTo(0.08, 0.08);
		boat1 = this.add.sprite(450, 230, 'pirate_boat');
		boat1.scale.setTo(0.60, 0.60);
		boat2 = this.add.sprite(600, 270, 'pirate_boat2');
		boat2.scale.setTo(0.55, 0.55);
		boat3 = this.add.sprite(610, 370, 'pirate_boat3');
		boat3.scale.setTo(0.80, 0.80);
		bubble1 = this.add.sprite(480, 150, 'bubble1');
		bubble1.scale.setTo(0.15, 0.15);
		bubble2 = this.add.sprite(650, 180, 'bubble2');
		bubble2.scale.setTo(0.15, 0.15);
		bubble3 = this.add.sprite(690, 320, 'bubble3');
		bubble3.scale.setTo(0.15, 0.15);

		home_button.inputEnabled = true;
		boat1.inputEnabled = true;
	    boat2.inputEnabled = true;
	    boat3.inputEnabled = true;
		bubble1.inputEnabled = true;
	    bubble2.inputEnabled = true;
	    bubble3.inputEnabled = true;

		//music = this.add.audio('intro');

		//music.play();

		message = this.add.text(50, 120, '', { font:'bold 40pt French Script MT', fill: '#000000' });
	    scoreText = this.add.text(715, 0, '30', { font:'bold 40pt French Script MT', fill: '#000000' });
	    instruction = this.add.text(200, 480, '', { font:'bold 50pt French Script MT', fill: '#000000' });
	    instruction.text = operations[randomNumber1];
		this.setPossibleAnswers();
	},
	setPossibleAnswers: function() {
	    number1 = this.add.text(515, 150, '', {  font:'bold 40pt French Script MT', fill: '#000000' });
	    number1.text = possibleAnswers[randomNumber2];
	    number2 = this.add.text(695, 180, '', {  font:'bold 40pt French Script MT', fill: '#000000'  });
	    //Check if the first number is the true answer
	    if (number1.text == possibleAnswers[0]) {
	        number2.text = possibleAnswers[randomNumber3];
	    } else {
	    	//The second number becomes the true answer
	        number2.text = possibleAnswers[0];
	    }
	    number3 = this.add.text(720, 320, '', {  font:'bold 40pt French Script MT', fill: '#000000'  });
	    if (number1.text == possibleAnswers[0] || number2.text == possibleAnswers[0]) {
	        if (number1.text == possibleAnswers[1] || number2.text == possibleAnswers[1]) {
	            number3.text = possibleAnswers[2];
	        } else {
	            number3.text = possibleAnswers[1];
	        }
	    } else {
	        number3.text = possibleAnswers[0];
	    }
	    //Add the events to the boats according to which number has the true answer
	    if (number1.text == possibleAnswers[0]) {
	        boat1.events.onInputDown.add(this.increaseScore, this);
	        boat2.events.onInputDown.add(this.decreaseScore, this);
	        boat3.events.onInputDown.add(this.decreaseScore, this);
	    }
	    if (number2.text == possibleAnswers[0]) {
	        boat1.events.onInputDown.add(this.decreaseScore, this);
	        boat2.events.onInputDown.add(this.increaseScore, this);
	        boat3.events.onInputDown.add(this.decreaseScore, this);
	    }
	    if (number3.text == possibleAnswers[0]) {
	        boat1.events.onInputDown.add(this.decreaseScore, this);
	        boat2.events.onInputDown.add(this.decreaseScore, this);
	        boat3.events.onInputDown.add(this.increaseScore, this);
	    }
	},
	increaseScore: function() {
		if(reaction == 0)
			reaction = this.add.sprite(100, 90, 'happy_penguin_face');
		else{
			reaction.x = 100;
			reaction.loadTexture('happy_penguin_face', 0, false);
		}
		reaction.scale.setTo(1.70, 1.70);
	    score+=10;
	    scoreText.text = score;
	    this.changeQuestion();
	},
	decreaseScore: function() {
		if(reaction == 0)
			reaction = this.add.sprite(70, 90, 'sad_penguin_face');
		else{
			reaction.loadTexture('sad_penguin_face', 0, false);
			reaction.x = 70;
		}
		reaction.scale.setTo(1.70, 1.70);
	    score-=10;
	    scoreText.text = score;
	},
	changeQuestion: function(){
		// Between 0 and 2
		randomNumber1 = Math.floor((Math.random() * 9));
		// Another number between 0 and 2
		randomNumber2 = Math.floor((Math.random() * 3));
		// Between 1 and 2
		randomNumber3 = Math.floor((Math.random() * 2) + 1);
		rightAnswer = results[randomNumber1];
		wrongAnswer1 = Math.floor((Math.random() * 100) + 1);
		wrongAnswer2 = Math.floor((Math.random() * 100) + 1);
		possibleAnswers = [rightAnswer, wrongAnswer1, wrongAnswer2];
		instruction.text = operations[randomNumber1];
		number1.text = "";
		number2.text = "";
		number3.text = "";
		boat1.events.onInputDown.removeAll();
		boat2.events.onInputDown.removeAll();
		boat3.events.onInputDown.removeAll();
		this.setPossibleAnswers();
	}
};
