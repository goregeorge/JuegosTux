var message;
var instruction;
var scoreText;
var reaction = 0;
var score = 30;
var goodCounter = 0;
var wrongCounter = 0;
var option1, option2, option3;
var level1 = [
    {"op": "25+17", "answer1": 39, "answer2": 42, "answer3": 41, "rightAnswer": 25+17},
    {"op": "125+5+10", "answer1": 95, "answer2": 145, "answer3": 140, "rightAnswer": 125+5+10},
    {"op": "38+10", "answer1": 48, "answer2": 58, "answer3": 47, "rightAnswer": 38+10},
    {"op": "22-10+2-3", "answer1": 7, "answer2": 9, "answer3": 11, "rightAnswer": 22-10+2-3},
    {"op": "18-3-6+2", "answer1": 11, "answer2": 9, "answer3": 7, "rightAnswer": 18-3-6+2},
    {"op": "34+4-8", "answer1": 29, "answer2": 30, "answer3": 40, "rightAnswer": 34+4-8},
    {"op": "45-15+10", "answer1": 45, "answer2": 38, "answer3": 40, "rightAnswer": 45-15+10},
    {"op": "8+2-3+6-1", "answer1": 12, "answer2": 13, "answer3": 14, "rightAnswer": 8+2-3+6-1},
    {"op": "10+8-3+9-2", "answer1": 25, "answer2": 22, "answer3": 30, "rightAnswer": 10+8-3+9-2},
    {"op": "17+3-5-2+1", "answer1": 17, "answer2": 12, "answer3": 14, "rightAnswer": 17+3-5-2+1},
    {"op": "19+0+10-1", "answer1": 19, "answer2": 28, "answer3": 29, "rightAnswer": 19+0+10-1},
    {"op": "33+2+3-28", "answer1": 10, "answer2": 15, "answer3": 28, "rightAnswer": 33+2+3-28},
    {"op": "22+10", "answer1": 30, "answer2": 32, "answer3": 31, "rightAnswer": 22+10},
    {"op": "17+2+5-14", "answer1": 17, "answer2": 5, "answer3": 10, "rightAnswer": 17+2+5-14},
    {"op": "1+15-2", "answer1": 9, "answer2": 14, "answer3": 12, "rightAnswer": 1+15-2},
    {"op": "40+5-30", "answer1": 20, "answer2": 18, "answer3": 15, "rightAnswer": 40+5-30},
    {"op": "45+5-25-5", "answer1": 19, "answer2": 20, "answer3": 22, "rightAnswer": 45+5-25-5},
    {"op": "60-30-15", "answer1": 16, "answer2": 15, "answer3": 12, "rightAnswer": 60-30-15},
    {"op": "50-25-15", "answer1": 9, "answer2": 10, "answer3": 11, "rightAnswer": 50-25-15},
    {"op": "24-14+5", "answer1": 15, "answer2": 12, "answer3": 14, "rightAnswer": 24-14+5}
];
var level2 = [
    {"op": "17.50+12", "answer1": 29.50, "answer2": 29, "answer3": 28.50, "rightAnswer": 29.50},
    {"op": "10.50+5.50", "answer1": 16, "answer2": 15, "answer3": 15.50, "rightAnswer": 16},
    {"op": "2.50+3.50", "answer1": 6, "answer2": 5.50, "answer3": 7, "rightAnswer": 6},
    {"op": "4.25+18.50", "answer1": 22.75, "answer2": 23, "answer3": 23.75, "rightAnswer": 22.75},
    {"op": "19.50+17.25+2.50", "answer1": 39.25, "answer2": 39, "answer3": 38.25, "rightAnswer": 39.25},
    {"op": "5.75+2.50-0.50", "answer1": 8.75, "answer2": 7.75, "answer3": 9.75, "rightAnswer": 7.75},
    {"op": "4.50+1.50-2.75", "answer1": 8.75, "answer2": 7.75, "answer3": 3.25, "rightAnswer": 3.25},
    {"op": "35.90+5.60", "answer1": 41.50, "answer2": 40.60, "answer3": 40.90, "rightAnswer": 41.50},
    {"op": "17.60+3.30", "answer1": 20.90, "answer2": 19.90, "answer3": 18.90, "rightAnswer": 20.90},
    {"op": "20.50+25.25+3.25", "answer1": 49, "answer2": 40.25, "answer3": 48.50, "rightAnswer": 49},
    {"op": "10.75+4.25", "answer1": 15, "answer2": 14.75, "answer3": 15.25, "rightAnswer": 15},
    {"op": "34.50+15.50", "answer1": 50, "answer2": 49.50, "answer3": 50.50, "rightAnswer": 50},
    {"op": "165.60+35.30", "answer1": 200.90, "answer2": 195.60, "answer3": 201.60, "rightAnswer": 200.90},
    {"op": "18.50+5.25+2.25", "answer1": 26, "answer2": 27.25, "answer3": 26.25, "rightAnswer": 26},
    {"op": "14.80+4.90+3.30", "answer1": 22.80, "answer2": 10.30, "answer3": 23, "rightAnswer": 23},
    {"op": "7×8+2.50", "answer1": 57.50, "answer2": 58.50, "answer3": 56.50, "rightAnswer": 58.50},
    {"op": "5×9-7.50+2.50", "answer1": 37.50, "answer2": 40, "answer3": 45, "rightAnswer": 40},
    {"op": "7×7+17.50+7.25", "answer1": 73.50, "answer2": 73.75, "answer3": 72.50, "rightAnswer": 73.75},
    {"op": "3×2+8×2+6.50", "answer1": 27.50, "answer2": 28.50, "answer3": 29, "rightAnswer": 28.50},
    {"op": "5×5+2.50+3×2.50+2.50", "answer1": 40.50, "answer2": 42.50, "answer3": 15.90, "rightAnswer": 42.50}
];
var level3 = [
    {"op": "10×0.50+2.75", "answer1": 8.50, "answer2": 7.25, "answer3": 7.75, "rightAnswer": 7.75},
    {"op": "18×0.25+2.50+3.75", "answer1": 10.75, "answer2": 11.50, "answer3": 18.25, "rightAnswer": 10.75},
    {"op": "16×0.50+10×0.25+2", "answer1": 11.50, "answer2": 12.50, "answer3": 13, "rightAnswer": 12.50},
    {"op": "30×0.50+18×0.50-3", "answer1": 20.50, "answer2": 21, "answer3": 22.50, "rightAnswer": 21},
    {"op": "60×0.25+2.50+3.25", "answer1": 19.50, "answer2": 20.75, "answer3": 20.25, "rightAnswer": 20.75},
    {"op": "40×0.25+12×0.25-3", "answer1": 9.50, "answer2": 10, "answer3": 10.25, "rightAnswer": 10},
    {"op": "20×0.75-4×0.25", "answer1": 13.50, "answer2": 14, "answer3": 14.75, "rightAnswer": 14},
    {"op": "40×0.50-10×0.25-4×0.25", "answer1": 15.25, "answer2": 16.50, "answer3": 16, "rightAnswer": 16.50},
    {"op": "75×0.75+10×0.25-10×0.50", "answer1": 52.50, "answer2": 53.75, "answer3": 53.50, "rightAnswer": 53.75},
    {"op": "25×0.50+12.50-2.50", "answer1": 23.50, "answer2": 22.50, "answer3": 20.50, "rightAnswer": 22.50},
    {"op": "2.75+10×0.25", "answer1": 4.50, "answer2": 5.50, "answer3": 5.25, "rightAnswer": 5.25},
    {"op": "10×0.50-3.50", "answer1": 2, "answer2": 1.50, "answer3": 1.75, "rightAnswer": 1.50},
    {"op": "60×0.25-12", "answer1": 3, "answer2": 4, "answer3": 12.25, "rightAnswer": 3},
    {"op": "10×0.20+3-2.50", "answer1": 2.50, "answer2": 3.25, "answer3": 10.70, "rightAnswer": 2.50},
    {"op": "8×0.25+40×0.25", "answer1": 12, "answer2": 12.50, "answer3": 48.50, "rightAnswer": 12}
];
// We need a number between 0 and the array's length - 1. This is to select one
// of the possible questions with their respective answers.
var quiz = Math.floor((Math.random() * (level1.length - 1)));

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
		ball = this.add.sprite(410, 390, 'cannon_ball');
		ball.scale.setTo(0.30, 0.30);
		sprite = this.add.sprite(300, 340, 'cannon');
		sprite.scale.setTo(0.30, 0.30);
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
		opr_bg = this.add.sprite(50, 450, 'opr_bg');
		opr_bg.scale.setTo(0.40, 0.30);
		retro = this.add.sprite(450, 480, 'retro');
		retro.scale.setTo(0.50, 0.40);

		home_button.inputEnabled = true;
		boat1.inputEnabled = true;
	    boat2.inputEnabled = true;
	    boat3.inputEnabled = true;
		bubble1.inputEnabled = true;
	    bubble2.inputEnabled = true;
	    bubble3.inputEnabled = true;

		intro = this.add.audio('intro');
		incorrect = this.add.audio('incorrect');
		next_level = this.add.audio('next_level');
		game_over = this.add.audio('game_over');
		game_win = this.add.audio('game_win');
		game_end = this.add.audio('game_finale');

		intro.play();

		message = this.add.text(50, 120, '', { font:'bold 40pt French Script MT', fill: '#000000' });
	    scoreText = this.add.text(715, 0, '30', { font:'bold 40pt French Script MT', fill: '#000000' });
	    retroText = this.add.text(480, 500, '', { font:'bold 40pt French Script MT', fill: '#ff0800' });
	    instruction = this.add.text(150, 510, '', { font:'bold 40pt French Script MT', fill: '#4665b8' });
	    instruction.text = level1[quiz].op + " =";
		this.setPossibleAnswers(level1);

	    ball.enableBody = true;
	    ball.physicsBodyType = Phaser.Physics.ARCADE;
	},
	shuffle: function(array) {
		var currentIndex = array.length, temporaryValue, randomIndex ;
		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
		    // And swap it with the current element.
	    	temporaryValue = array[currentIndex];
	    	array[currentIndex] = array[randomIndex];
	    	array[randomIndex] = temporaryValue;
	  	}
	  	return array;
	},
	setPossibleAnswers: function(quizArray) {
        home_button.events.onInputDown.add(this.quitGame, this);
	    var possibleChoices = [quizArray[quiz].answer1, quizArray[quiz].answer2, quizArray[quiz].answer3];
	    retroText.text = quizArray[quiz].rightAnswer;
	    retroText.visible = false;
		this.shuffle(possibleChoices);
	    option1 = this.add.text(515, 150, '', {  font:'bold 40pt French Script MT', fill: '#000000' });
	    option1.text = possibleChoices[0];
	    option2 = this.add.text(680, 180, '', {  font:'bold 40pt French Script MT', fill: '#000000'  });
	    option2.text = possibleChoices[1];
	    option3 = this.add.text(720, 320, '', {  font:'bold 40pt French Script MT', fill: '#000000'  });
	    option3.text = possibleChoices[2];
	    //Add the events to the boats according to which number has the true answer
	    if (option1.text == quizArray[quiz].rightAnswer) {
	        boat1.events.onInputDown.add(this.correctAnswer, this);
	        boat1.events.onInputDown.add(this.increaseScore, this);
	        boat2.events.onInputDown.add(this.decreaseScore, this);
	        boat3.events.onInputDown.add(this.decreaseScore, this);
	        bubble1.events.onInputDown.add(this.correctAnswer, {boat: boat1});
	        bubble1.events.onInputDown.add(this.increaseScore, {boat: boat1});
	        bubble2.events.onInputDown.add(this.decreaseScore, this);
	        bubble3.events.onInputDown.add(this.decreaseScore, this);
	    }
	    if (option2.text == quizArray[quiz].rightAnswer) {
	        boat1.events.onInputDown.add(this.decreaseScore, this);
	        boat2.events.onInputDown.add(this.correctAnswer, this);
	        boat2.events.onInputDown.add(this.increaseScore, this);
	        boat3.events.onInputDown.add(this.decreaseScore, this);
	        bubble1.events.onInputDown.add(this.decreaseScore, this);
	        bubble2.events.onInputDown.add(this.correctAnswer, {boat: boat2});
	        bubble2.events.onInputDown.add(this.increaseScore, {boat: boat2});
	        bubble3.events.onInputDown.add(this.decreaseScore, this);
	    }
	    if (option3.text == quizArray[quiz].rightAnswer) {
	        boat1.events.onInputDown.add(this.decreaseScore, this);
	        boat2.events.onInputDown.add(this.decreaseScore, this);
	        boat3.events.onInputDown.add(this.correctAnswer, this);
	        boat3.events.onInputDown.add(this.increaseScore, this);
	        bubble1.events.onInputDown.add(this.decreaseScore, this);
	        bubble2.events.onInputDown.add(this.decreaseScore, this);
	        bubble3.events.onInputDown.add(this.correctAnswer, {boat: boat3});
	        bubble3.events.onInputDown.add(this.increaseScore, {boat: boat3});
	    }
	},
	increaseScore: function(boat) {
		if(reaction == 0)
			reaction = this.add.sprite(100, 90, 'happy_penguin_face');
		else{
			reaction.loadTexture('happy_penguin_face', 0, false);
		}
		//this.physics.arcade.moveToPointer(ball, 300);
		reaction.scale.setTo(1.70, 1.70);
	    score+=10;
	    scoreText.text = score;
	    retroText.text = "";
	    goodCounter += 1;
	    if(goodCounter == 8 || goodCounter == 16){
	    	next_level.play();
	    	opr_bg.scale.setTo(0.60, 0.30);
	    	opr_bg.x = -10;
	    	retro.x = 570;
	    	retroText.x = 600;
			this.time.events.add(2000, function() {
			  	this.changeQuestion(boat);
			}, this);
	    }
	    else{
	    	if(goodCounter == 24){
	    		game_end.play();
				this.add.sprite(0, 0, 'congrats');
	    		setTimeout(function(){
	    		    location.reload();
	    		}, 5000);
	    	}
	    	else{
			    this.time.events.add(2000, function() {
			    	this.changeQuestion(boat);
			    }, this);
	    	}
	    }
	},
	decreaseScore: function() {
		if(reaction == 0)
			reaction = this.add.sprite(100, 90, 'sad_penguin_face');
		else{
			reaction.loadTexture('sad_penguin_face', 0, false);
		}
		reaction.scale.setTo(1.70, 1.70);
		if(score >= 10)
	    	score-=10;
	    scoreText.text = score;
	    retroText.visible = true;
	    wrongCounter += 1;
		if(wrongCounter == 3 && goodCounter <=8){
			this.gameOver();
		}
		else{
			incorrect.play();
		}
	},
	changeQuestion: function(boat){
		boat.visible = true;
		option1.text = "";
		option2.text = "";
		option3.text = "";
		boat1.events.onInputDown.removeAll();
		boat2.events.onInputDown.removeAll();
		boat3.events.onInputDown.removeAll();
		bubble1.events.onInputDown.removeAll();
		bubble2.events.onInputDown.removeAll();
		bubble3.events.onInputDown.removeAll();
		if(goodCounter <8){
			quiz = Math.floor((Math.random() * (level1.length - 1)));
			instruction.text = level1[quiz].op;
			this.setPossibleAnswers(level1);
		}
		else{
			if(goodCounter <16){
				quiz = Math.floor((Math.random() * (level2.length - 1)));
				instruction.text = level2[quiz].op;
				this.setPossibleAnswers(level2);
			}
			else{
				if(goodCounter <= 24){
					quiz = Math.floor((Math.random() * (level3.length - 1)));
					instruction.text = level3[quiz].op;
					this.setPossibleAnswers(level3);
				}
			}
		}
	},
	correctAnswer: function(sprite){
		sprite.visible = false;
	},
	gameOver: function(){
		game_over.play();
		boat1.destroy();
		boat2.destroy();
		boat3.destroy();
		bubble1.destroy();
		bubble2.destroy();
		bubble3.destroy();
		option1.destroy();
		option2.destroy();
		option3.destroy();
	    setTimeout(function(){
	    	location.reload();
	    }, 5000);
	},
    quitGame: function(){
        location.reload();
    }
};
