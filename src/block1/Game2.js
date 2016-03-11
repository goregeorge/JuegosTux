var b1g2_message;
var b1g2_instruction;
var b1g2_scoreText;
var b1g2_levelText;
var b1g2_goodCounterText;
var b1g2_heartsText;
var b1g2_levelStatus = 1;
var score = 30;
var goodCounter = 0;
var wrongCounter = 0;
var b1g2_option1, b1g2_option2, b1g2_option3;
var b1g2_level1 = [
    {"op": "Si la jarra contiene un litro,\n ¿Cuánto debe contener cada vaso?", "answer1": "1/2", "answer2": "1/4", "answer3": "1/3", "numberOfCups":2, "liters":1, "rightAnswer": "1/2"},
    {"op": "Si la jarra contiene un litro,\n ¿Cuánto debe contener cada vaso?", "answer1": "3/4", "answer2": "1/3", "answer3": "2/3", "numberOfCups":3, "liters":1, "rightAnswer": "1/3"},
    {"op": "Si la jarra contiene un litro,\n ¿Cuánto debe contener cada vaso?", "answer1": "1/2", "answer2": "1/5", "answer3": "1/4", "numberOfCups":4, "liters":1, "rightAnswer": "1/4"},
    {"op": "Si la jarra contiene un litro,\n ¿Cuánto debe contener cada vaso?", "answer1": "7/8", "answer2": "1/5", "answer3": "1/6", "numberOfCups":5, "liters":1, "rightAnswer": "1/5"},
    {"op": "Si la jarra contiene un litro,\n ¿Cuánto debe contener cada vaso?", "answer1": "1/6", "answer2": "1/3", "answer3": "1/2", "numberOfCups":6, "liters":1, "rightAnswer": "1/6"},
    {"op": "Si la jarra contiene un litro,\n ¿Cuánto debe contener cada vaso?", "answer1": "1/7", "answer2": "7/1", "answer3": "1/6", "numberOfCups":7, "liters":1, "rightAnswer": "1/7"},
    {"op": "Si la jarra contiene un litro,\n ¿Cuánto debe contener cada vaso?", "answer1": "1/2", "answer2": "1/8", "answer3": "1/4", "numberOfCups":8, "liters":1, "rightAnswer": "1/8"},
    {"op": "Si la jarra contiene un litro,\n ¿Cuánto debe contener cada vaso?", "answer1": "1/9", "answer2": "3/6", "answer3": "1/3", "numberOfCups":9, "liters":1, "rightAnswer": "1/9"},
    {"op": "Si la jarra contiene un litro,\n ¿Cuánto debe contener cada vaso?", "answer1": "1/10", "answer2": "1/11", "answer3": "1/12", "numberOfCups":10, "liters":1, "rightAnswer": "1/10"},
    {"op": "Si la jarra contiene un litro,\n ¿Cuánto debe contener cada vaso?", "answer1": "1/11", "answer2": "2/12", "answer3": "2/11", "numberOfCups":11, "liters":1, "rightAnswer": "1/11"},
    {"op": "Si la jarra contiene un litro,\n ¿Cuánto debe contener cada vaso?", "answer1": "3/1", "answer2": "3/4", "answer3": "1/12", "numberOfCups":12, "liters":1, "rightAnswer": "1/12"}
];
var b1g2_level2 = [
    {"op": "Si la jarra contiene un litro,\n ¿Cuánto debe contener cada vaso?", "answer1": "1/2", "answer2": "1/8", "answer3": "1/4", "numberOfCups":8, "liters":1, "rightAnswer": "1/8"},
    {"op": "Si la jarra contiene un litro,\n ¿Cuánto debe contener cada vaso?", "answer1": "1/9", "answer2": "3/6", "answer3": "1/3", "numberOfCups":9, "liters":1, "rightAnswer": "1/9"},
    {"op": "Si la jarra contiene un litro,\n ¿Cuánto debe contener cada vaso?", "answer1": "1/10", "answer2": "1/11", "answer3": "1/12", "numberOfCups":10, "liters":1, "rightAnswer": "1/10"},
    {"op": "Si la jarra contiene un litro,\n ¿Cuánto debe contener cada vaso?", "answer1": "1/11", "answer2": "2/12", "answer3": "2/11", "numberOfCups":11, "liters":1, "rightAnswer": "1/11"},
    {"op": "Si la jarra contiene un litro,\n ¿Cuánto debe contener cada vaso?", "answer1": "3/1", "answer2": "3/4", "answer3": "1/12", "numberOfCups":12, "liters":1, "rightAnswer": "1/12"},
    {"op": "Si las 2 jarras contienen un litro,\n ¿Cuánto debe contener cada vaso?", "answer1": "1/6", "answer2": "2/3", "answer3": "1/3", "numberOfCups":3, "liters":2, "rightAnswer": "2/3"},
    {"op": "Si las 2 jarras contienen un litro,\n ¿Cuánto debe contener cada vaso?", "answer1": "1/2", "answer2": "2/1", "answer3": "1", "numberOfCups":2, "liters":2, "rightAnswer": "1"},
    {"op": "Si las 2 jarras contienen un litro,\n ¿Cuánto debe contener cada vaso?", "answer1": "1/2", "answer2": "2/8", "answer3": "3/4", "numberOfCups":4, "liters":2, "rightAnswer": "1/2"},
    {"op": "Si las 2 jarras contienen un litro,\n ¿Cuánto debe contener cada vaso?", "answer1": "2/5", "answer2": "3/5", "answer3": "1/5", "numberOfCups":5, "liters":2, "rightAnswer": "2/5"},
    {"op": "Si las 3 jarras contienen un litro,\n ¿Cuánto debe contener cada vaso?", "answer1": "1/6", "answer2": "1/2", "answer3": "3/6", "numberOfCups":6, "liters":3, "rightAnswer": "1/2"}
];
var b1g2_level3 = [
    {"op": "Si las 2 jarras contienen un litro,\n ¿Cuánto debe contener cada vaso?", "answer1": "0.5", "answer2": "1/4", "answer3": "0.20", "numberOfCups":8, "liters":2, "rightAnswer": "1/4"},
    {"op": "Si las 2 jarras contienen un litro,\n ¿Cuánto debe contener cada vaso?", "answer1": "0.25", "answer2": "1/10", "answer3": "1/5", "numberOfCups":10, "liters":2, "rightAnswer": "1/5"},
    {"op": "Si las 2 jarras contienen un litro,\n ¿Cuánto debe contener cada vaso?", "answer1": "0.33", "answer2": "1/12", "answer3": "1/6", "numberOfCups":12, "liters":2, "rightAnswer": "1/6"},
    {"op": "Si la jarra contiene un litro,\n ¿Cuánto debe contener cada vaso?", "answer1": "1/3", "answer2": "0.5", "answer3": "1/5", "numberOfCups":2, "liters":1, "rightAnswer": "0.5"},
    {"op": "Si la jarra contiene un litro,\n ¿Cuánto debe contener cada vaso?", "answer1": "3", "answer2": "2/3", "answer3": "0.33", "numberOfCups":3, "liters":1, "rightAnswer": "0.33"},
    {"op": "Si la jarra contiene un litro,\n ¿Cuánto debe contener cada vaso?", "answer1": "0.25", "answer2": "1/2", "answer3": "1/8", "numberOfCups":4, "liters":1, "rightAnswer": "0.25"},
    {"op": "Si la jarra contiene un litro,\n ¿Cuánto debe contener cada vaso?", "answer1": "1/2", "answer2": "1/8", "answer3": "0.20", "numberOfCups":5, "liters":1, "rightAnswer": "0.20"},
    {"op": "Si las 2 jarras contienen un litro,\n ¿Cuánto debe contener cada vaso?", "answer1": "0.5", "answer2": "0.25", "answer3": "0.75", "numberOfCups":4, "liters":2, "rightAnswer": "0.5"},
    {"op": "Si las 2 jarras contienen un litro,\n ¿Cuánto debe contener cada vaso?", "answer1": "0.4", "answer2": "0.20", "answer3": "0.25", "numberOfCups":5, "liters":2, "rightAnswer": "0.4"},
    {"op": "Si las 3 jarras contienen un litro,\n ¿Cuánto debe contener cada vaso?", "answer1": "0.5", "answer2": "0.75", "answer3": "0.40", "numberOfCups":4, "liters":3, "rightAnswer": "0.75"},
    {"op": "Si las 5 jarras contienen un litro,\n ¿Cuánto debe contener cada vaso?", "answer1": "2.5", "answer2": "4.5", "answer3": "0.5", "numberOfCups":2, "liters":5, "rightAnswer": "2.5"},
    {"op": "Si las 5 jarras contienen un litro,\n ¿Cuánto debe contener cada vaso?", "answer1": "1.25", "answer2": "4.5", "answer3": "0.5", "numberOfCups":4, "liters":5, "rightAnswer": "1.25"},
    {"op": "Si las 5 jarras contienen un litro,\n ¿Cuánto debe contener cada vaso?", "answer1": "0.4", "answer2": "0.5", "answer3": "0.25", "numberOfCups":10, "liters":5, "rightAnswer": "0.5"}
];
// We need a number between 0 and the array's length - 1. This is to select one
// of the possible questions with their respective answers.
var b1g2_quiz = Math.floor((Math.random() * (b1g2_level1.length - 1)));
var numberOfCups = b1g2_level1[b1g2_quiz].numberOfCups;
var liters = b1g2_level1[b1g2_quiz].liters;
var cupXPos = 320;
var cupYPos = 210;
var jugXPos = 90;
var cups = [];
var jugs = [];
TuxGame.Block1Game2 = function(game){
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
TuxGame.Block1Game2.prototype = {
	create: function(){
    TuxGame.MAIN_LOOP_SONG.stop();
    TuxGame.G2B1_LOOP.loopFull(1);
		this.physics.startSystem(Phaser.Physics.ARCADE);
		this.add.sprite(0, 0, 'b1g2-galleon-bg');
        b1g2_bg = this.add.sprite(200, -5, 'b1g2-bg');
        b1g2_bg.scale.setTo(0.312, 0.30);
    home_button = this.add.button(0, 0, 'b1g1-home_button', this.goMainMenu, this, 1, 0, 2);
		home_button.scale.setTo(0.07, 0.07);
		b1g2_table = this.add.sprite(295, 240, 'b1g2-table');
		b1g2_table.scale.setTo(0.50, 0.50);
		b1g2_octopus = this.add.sprite(5, 200, 'b1g2-octopus');
		b1g2_octopus.scale.setTo(0.50, 0.50);
		for (var i = 0; i < liters; i++) {
			jugs[i] = this.add.sprite(jugXPos, 160, 'b1g2-jar');
			jugs[i].scale.setTo(0.50, 0.50);
			jugXPos += 75;
		}
		//b1g2_barrel = this.add.sprite(620, 240, 'b1g2-barrel');
		//b1g2_barrel.scale.setTo(0.10, 0.10);
		for (var i = 0; i < numberOfCups; i++) {
            cups[i] = this.add.sprite(cupXPos, cupYPos, 'b1g2-cup');
    		cups[i].scale.setTo(0.50, 0.50);
            cupXPos += 70;
            if(i == 5){
            	cupXPos = 320;
            	cupYPos = 230;
            }
        }
		b1g2_buttons = this.add.group();
    	b1g2_buttons.enableBody = true;
        b1g2_button1 = b1g2_buttons.create(136, 450, 'b1g2-button');
		b1g2_button1.scale.setTo(0.40, 0.40);
        b1g2_button2 = b1g2_buttons.create(336, 450, 'b1g2-button');
		b1g2_button2.scale.setTo(0.40, 0.40);
        b1g2_button3 = b1g2_buttons.create(536, 450, 'b1g2-button');
		b1g2_button3.scale.setTo(0.40, 0.40);
		b1g2_reaction = this.add.sprite(0, 260, 'b1g2-thumbs_up');
		b1g2_reaction.scale.setTo(0.50, 0.50);
		b1g2_reaction.visible = false;
		b1g2_correct = this.add.sprite(100, 40, "b1g2-correct").scale.setTo(0.5,0.5);
		b1g2_heart = this.add.sprite(105, 75, "b1g2-heart").scale.setTo(0.8, 0.8);

		home_button.inputEnabled = true;
		b1g2_button1.inputEnabled = true;
		b1g2_button2.inputEnabled = true;
		b1g2_button3.inputEnabled = true;

		b1g1_correct = this.add.audio('correct');
		b1g1_incorrect = this.add.audio('b1g1-incorrect');
		b1g1_next_level = this.add.audio('b1g1-next_level');
		// b1g1_game_over = this.add.audio('b1g1-game_over');
		// b1g1_game_win = this.add.audio('b1g1-game_win');
		// b1g1_game_end = this.add.audio('b1g1-game_finale');

		b1g2_message = this.add.text(50, 120, '', { font:'bold 40pt Times New Roman', fill: '#000000' });
	    b1g2_instruction = this.add.text(320, 30, '', { font:'bold 20pt Times New Roman', fill: '#000000' });
	    b1g2_instruction.text = b1g2_level1[b1g2_quiz].op;
	    b1g2_levelText = this.add.text(100, 10, ('Nivel ' + b1g2_levelStatus), { font:'bold 25px Verdana', fill: '#4665b8' });
	    b1g2_goodCounterText = this.add.text(160, 40, goodCounter, { font:'bold 25px Verdana', fill: '#4665b8' });
	    b1g2_heartsText = this.add.text(160, 70, 3-wrongCounter, { font:'bold 25px Verdana', fill: '#4665b8' });
		this.setPossibleAnswers(b1g2_level1);
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
	setPossibleAnswers: function(b1g2_quizArray) {
        home_button.events.onInputDown.add(this.quitGame, this);
	    var possibleChoices = [b1g2_quizArray[b1g2_quiz].answer1, b1g2_quizArray[b1g2_quiz].answer2, b1g2_quizArray[b1g2_quiz].answer3];
	    //retroText.text = b1g2_quizArray[b1g2_quiz].rightAnswer;
	    //retroText.visible = false;
		this.shuffle(possibleChoices);
	    b1g2_option1 = this.add.text(160, 480, '', {  font:'bold 35pt Times New Roman', fill: '#000000' });
	    b1g2_option1.text = possibleChoices[0];
	    b1g2_option2 = this.add.text(360, 480, '', {  font:'bold 35pt Times New Roman', fill: '#000000'  });
	    b1g2_option2.text = possibleChoices[1];
	    b1g2_option3 = this.add.text(560, 480, '', {  font:'bold 35pt Times New Roman', fill: '#000000'  });
	    b1g2_option3.text = possibleChoices[2];
	    //Add the events to the buttons according to which number has the true answer
	    if (b1g2_option1.text == b1g2_quizArray[b1g2_quiz].rightAnswer) {
	        b1g2_button1.events.onInputDown.add(this.increaseScore, this);
	        b1g2_button3.events.onInputDown.add(this.decreaseScore, this);
	        b1g2_button2.events.onInputDown.add(this.decreaseScore, this);
	    }
	    if (b1g2_option2.text == b1g2_quizArray[b1g2_quiz].rightAnswer) {
	        b1g2_button1.events.onInputDown.add(this.decreaseScore, this);
	        b1g2_button2.events.onInputDown.add(this.increaseScore, this);
	        b1g2_button3.events.onInputDown.add(this.decreaseScore, this);
	    }
	    if (b1g2_option3.text == b1g2_quizArray[b1g2_quiz].rightAnswer) {
	        b1g2_button1.events.onInputDown.add(this.decreaseScore, this);
	        b1g2_button2.events.onInputDown.add(this.decreaseScore, this);
	        b1g2_button3.events.onInputDown.add(this.increaseScore, this);
	    }
	},
	increaseScore: function() {
		b1g2_reaction.loadTexture('b1g2-thumbs_up', 0, false);
	    b1g2_reaction.visible = true;
	    goodCounter += 1;
	    b1g2_goodCounterText.text = goodCounter;
	    b1g1_correct.play();
	    if(goodCounter == 8 || goodCounter == 16){
	    	b1g1_next_level.play();
	    	b1g2_levelStatus += 1;
	    	b1g2_levelText.text = 'Nivel ' + b1g2_levelStatus;
	    	wrongCounter = 0;
	    	this.time.events.add(1500, function() {
	    		b1g2_reaction.visible = false;
				this.changeQuestion();
			}, this);
	    }
	    else{
	    	if(goodCounter == 24){
          that = this;
          setTimeout(function(){
					 that.state.start('MainMenu');
	    		}, 4000);
	    	}
	    	else{
	    		this.time.events.add(1500, function() {
	    			b1g2_reaction.visible = false;
			    	this.changeQuestion();
			    }, this);
	    	}
	    }
	},
	decreaseScore: function() {
		b1g2_reaction.loadTexture('b1g2-thumbs_down', 0, false);
	    b1g2_reaction.visible = true;
	    wrongCounter += 1;
	    b1g2_heartsText.text -= 1;
	    this.time.events.add(1500, function() {
			b1g2_reaction.visible = false;
	    }, this);
		if(wrongCounter == 3){
			//Commenting the next line allows testing without gaming over
			this.gameOver();
		} else {
			b1g1_incorrect.play();
		}
	},
	changeQuestion: function(){
		b1g2_option1.text = "";
		b1g2_option2.text = "";
		b1g2_option3.text = "";
		for (var i = 0; i < jugs.length; i++) {
			jugs[i].destroy();
		}
        for (var i = 0; i < cups.length; i++) {
            cups[i].destroy();
        }
		b1g2_button1.events.onInputDown.removeAll();
		b1g2_button2.events.onInputDown.removeAll();
		b1g2_button3.events.onInputDown.removeAll();
		if(goodCounter <8){
			this.resetSprites(b1g2_level1);
		}
		else{
			if(goodCounter <16){
				this.resetSprites(b1g2_level2);
			}
			else{
				if(goodCounter <= 24){
					this.resetSprites(b1g2_level3);
				}
			}
		}
		
	},
	resetSprites: function(b1g2_quizArray){
		b1g2_quiz = Math.floor((Math.random() * (b1g2_quizArray.length - 1)));
		numberOfCups = b1g2_quizArray[b1g2_quiz].numberOfCups;
		liters = b1g2_quizArray[b1g2_quiz].liters;
        cupXPos = 320;
        cupYPos = 210;
		jugXPos = 90;
		jugYPos = 160;
		for (var i = 0; i < liters; i++) {
			jugs[i] = this.add.sprite(jugXPos, jugYPos, 'b1g2-jar');
			jugs[i].scale.setTo(0.50, 0.50);
			jugXPos += 75;
			if(i == 2){
				jugXPos = 120;
				jugYPos = 180;
			}
		}
        for (var i = 0; i < numberOfCups; i++) {
            cups[i] = this.add.sprite(cupXPos, cupYPos, 'b1g2-cup');
    		cups[i].scale.setTo(0.50, 0.50);
            cupXPos += 70;
            if(i == 5){
            	cupXPos = 320;
            	cupYPos = 240;
            }
        }
        b1g2_instruction.text = b1g2_quizArray[b1g2_quiz].op;
		this.setPossibleAnswers(b1g2_quizArray);
	},
	resetElements: function(){
		b1g2_button1.destroy();
		b1g2_button2.destroy();
		b1g2_button3.destroy();
		b1g2_option1.destroy();
	    b1g2_option2.destroy();
	    b1g2_option3.destroy();
	    b1g2_levelStatus = 1;
		score = 30;
		goodCounter = 0;
		wrongCounter = 0;
		cupXPos = 320;
		cupYPos = 210;
		jugYPos = 160;
		for (var i = 0; i < jugs.length; i++) {
			jugs[i].destroy();
		}
        for (var i = 0; i < cups.length; i++) {
            cups[i].destroy();
        }
	},
	gameOver: function(){
		this.resetElements();
		that = this;
	    setTimeout(function(){
	    	that.state.start("Block1Game2");
	    }, 5000);
    },
	quitGame: function(){
		this.state.start('Block1Game2');
    },
    goMainMenu: function(){
    	this.resetElements();
      	this.state.start('MainMenu');
  }
};
