var instruction;
var scoreText;
var reaction = 0;
var score = 30;
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
    {"op": "17.50+12", "answer1": 29.50, "answer2": 29, "answer3": 28.50, "rightAnswer": 17.50+12},
    {"op": "10.50+5.50", "answer1": 16, "answer2": 15, "answer3": 15.50, "rightAnswer": 10.50+5.50},
    {"op": "2.50+3.50", "answer1": 6, "answer2": 5.50, "answer3": 7, "rightAnswer": 2.50+3.50},
    {"op": "4.25+18.50", "answer1": 22.75, "answer2": 23, "answer3": 23.75, "rightAnswer": 4.25+18.50},
    {"op": "19.50+17.25+2.50", "answer1": 39.25, "answer2": 39, "answer3": 38.25, "rightAnswer": 19.50+17.25+2.50},
    {"op": "5.75+2.50-0.50", "answer1": 8.75, "answer2": 7.75, "answer3": 9.75, "rightAnswer": 5.75+2.50-0.50},
    {"op": "4.50+1.50-2.75", "answer1": 8.75, "answer2": 7.75, "answer3": 6.75, "rightAnswer": 4.50+1.50-2.75},
    {"op": "35.90+5.60", "answer1": 41.50, "answer2": 40.60, "answer3": 40.90, "rightAnswer": 35.90+5.60},
    {"op": "17.60+3.30", "answer1": 20.90, "answer2": 19.90, "answer3": 18.90, "rightAnswer": 17.60+3.30},
    {"op": "20.50+25.25+3.25", "answer1": 49, "answer2": 40.25, "answer3": 48.50, "rightAnswer": 20.50+25.25+3.25},
    {"op": "10.75+4.25", "answer1": 15, "answer2": 14.75, "answer3": 15.25, "rightAnswer": 10.75+4.25},
    {"op": "34.50+15.50", "answer1": 50, "answer2": 49.50, "answer3": 50.50, "rightAnswer": 34.50+15.50},
    {"op": "165.60+35.30", "answer1": 200.90, "answer2": 195.60, "answer3": 2001.60, "rightAnswer": 165.60+35.30},
    {"op": "18.50+5.25+2.25", "answer1": 26, "answer2": 27.25, "answer3": 26.25, "rightAnswer": 18.50+5.25+2.25},
    {"op": "14.80+4.90+3.30", "answer1": 22.80, "answer2": 10.30, "answer3": 23, "rightAnswer": 14.80+4.90+3.30},
    {"op": "7*(8)+2.50", "answer1": 57.50, "answer2": 58.50, "answer3": 56.50, "rightAnswer": 7*(8)+2.50},
    {"op": "5*(9)-7.50+2.50", "answer1": 12.50, "answer2": 13, "answer3": 12.90, "rightAnswer": 5*(9)-7.50+2.50},
    {"op": "7*(7)+17.50+7.25", "answer1": 73.50, "answer2": 73.75, "answer3": 72.50, "rightAnswer": 7*(7)+17.50+7.25},
    {"op": "3*(2)+8*(2)+6.50", "answer1": 27.50, "answer2": 28.50, "answer3": 29, "rightAnswer": 3*(2)+8*(2)+6.50},
    {"op": "5*(5)+2.50+3*(2.50+2.50)", "answer1": 40.50, "answer2": 42.50, "answer3": 15.90, "rightAnswer": 5*(5)+2.50+3*(2.50+2.50)}
];
var level3 = [
    {"op": "10*(0.50)+2.75", "answer1": 13.50, "answer2": 13.25, "answer3": 12.75, "rightAnswer": 10*(0.50)+2.75},
    {"op": "18*(0.25)+2.50+3.75", "answer1": 10.75, "answer2": 11.50, "answer3": 18.25, "rightAnswer": 18*(0.25)+2.50+3.75},
    {"op": "16*(0.50)+10*(0.25)+2", "answer1": 11.50, "answer2": 12.50, "answer3": 13, "rightAnswer": 16*(0.50)+10*(0.25)+2},
    {"op": "30*(0.50)+18*(0.50)-3", "answer1": 20.50, "answer2": 21, "answer3": 22.50, "rightAnswer": 30*(0.50)+18*(0.50)-3},
    {"op": "60*(0.25)+2.50+3.25", "answer1": 19.50, "answer2": 20.75, "answer3": 20.25, "rightAnswer": 60*(0.25)+2.50+3.25},
    {"op": "40*(0.25)+12*(0.25)-3", "answer1": 9.50, "answer2": 10, "answer3": 10.25, "rightAnswer": 40*(0.25)+12*(0.25)-3},
    {"op": "20*(0.75)-4*(0.25)", "answer1": 13.50, "answer2": 14, "answer3": 14.75, "rightAnswer": 20*(0.75)-4*(0.25)},
    {"op": "40*(0.50)-10*(0.25)-4*(0.25)", "answer1": 15.25, "answer2": 16.50, "answer3": 16, "rightAnswer": 40*(0.50)-10*(0.25)-4*(0.25)},
    {"op": "75*(0.75)+10*(0.25)-10*(0.50)", "answer1": 52.50, "answer2": 53.75, "answer3": 53.50, "rightAnswer": 75*(0.75)+10*(0.25)-10*(0.50)},
    {"op": "25*(0.50)+12.50-2.50", "answer1": 23.50, "answer2": 22.50, "answer3": 20.50, "rightAnswer": 25*(0.50)+12.50-2.50},
    {"op": "2.75+10*(.25)", "answer1": 4.50, "answer2": 5.50, "answer3": 5.25, "rightAnswer": 2.75+10*(.25)},
    {"op": "10*(0.50)-3.50", "answer1": 2, "answer2": 1.50, "answer3": 1.75, "rightAnswer": 10*(0.50)-3.50},
    {"op": "60*(0.25)-12", "answer1": 3, "answer2": 4, "answer3": 12.25, "rightAnswer": 60*(0.25)-12},
    {"op": "10*(.20)+3-2.50", "answer1": 2.50, "answer2": 3.25, "answer3": 10.70, "rightAnswer": 10*(.20)+3-2.50},
    {"op": "8*(0.25)+40*(0.25)", "answer1": 12, "answer2": 12.50, "answer3": 48.50, "rightAnswer": 8*(0.25)+40*(0.25)}
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

		music = this.add.audio('intro');

		music.play();

	    scoreText = this.add.text(715, 0, '30', { font:'bold 40pt French Script MT', fill: '#000000' });
	    instruction = this.add.text(200, 480, '', { font:'bold 50pt French Script MT', fill: '#000000' });
	    instruction.text = level1[quiz].op;
		this.setPossibleAnswers();
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
	setPossibleAnswers: function() {
        home_button.events.onInputDown.add(this.quitGame, this);
		var possibleChoices = [level1[quiz].answer1, level1[quiz].answer2, level1[quiz].answer3];
		this.shuffle(possibleChoices);
	    option1 = this.add.text(515, 150, '', {  font:'bold 40pt French Script MT', fill: '#000000' });
	    option1.text = possibleChoices[0];
	    option2 = this.add.text(695, 180, '', {  font:'bold 40pt French Script MT', fill: '#000000'  });
	    option2.text = possibleChoices[1];
	    option3 = this.add.text(720, 320, '', {  font:'bold 40pt French Script MT', fill: '#000000'  });
	    option3.text = possibleChoices[2];
	    //Add the events to the boats according to which number has the true answer
	    if (option1.text == level1[quiz].rightAnswer) {
	        boat1.events.onInputDown.add(this.increaseScore, this);
	        boat2.events.onInputDown.add(this.decreaseScore, this);
	        boat3.events.onInputDown.add(this.decreaseScore, this);
	    }
	    if (option2.text == level1[quiz].rightAnswer) {
	        boat1.events.onInputDown.add(this.decreaseScore, this);
	        boat2.events.onInputDown.add(this.increaseScore, this);
	        boat3.events.onInputDown.add(this.decreaseScore, this);
	    }
	    if (option3.text == level1[quiz].rightAnswer) {
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
		quiz = Math.floor((Math.random() * (level1.length - 1)));
		instruction.text = level1[quiz].op;
		option1.text = "";
		option2.text = "";
		option3.text = "";
		boat1.events.onInputDown.removeAll();
		boat2.events.onInputDown.removeAll();
		boat3.events.onInputDown.removeAll();
		this.setPossibleAnswers();
	},
    quitGame: function(){
        location.reload();
    }
};
