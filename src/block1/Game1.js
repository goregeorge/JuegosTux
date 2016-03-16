// Se declaran las siguientes variables para colocar texto en el área de juego
var b1g1_message;
var b1g1_instruction;
var b1g1_scoreText;
var b1g1_levelText;
var b1g1_goodCounterText;
var b1g1_heartsText;
var b1g1_levelStatus = 1;
var reaction = 0;
// Estas son para el conteo de aciertos y de errores
var score = 30;
var goodCounter = 0;
var wrongCounter = 0;
// Posibles respuestas que se le presentan al usuario
var b1g1_option1, b1g1_option2, b1g1_option3;
// Esta se usa para la velocidad de la bala de cañon
var BULLET_SPEED = 800;
// Se definen los siguientes arreglos para el conjunto de preguntas y respuestas de cada nivel
var b1g1_level1 = [
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
var b1g1_level2 = [
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
var b1g1_level3 = [
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
var b1g1_quiz = Math.floor((Math.random() * (b1g1_level1.length - 1)));

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
		// Se detiene la musica de fondo del menu y empieza la del juego
    TuxGame.MAIN_LOOP_SONG.stop();
    TuxGame.G1B1_LOOP.loopFull(1);
    // Se usa para el movimiento de la bala
		this.physics.startSystem(Phaser.Physics.ARCADE);
		// Aquí se cargan los sprites
		this.add.sprite(0, 0, 'b1g1-beach-bg');
    b1g1_home_button = this.add.button(0, 0, 'b1g1-home_button', this.goMainMenu, this, 1, 0, 2);
		b1g1_home_button.scale.setTo(0.07, 0.07);
		b1g1_sprite = this.add.sprite(180, 280, 'b1g1-avatar');
		b1g1_sprite.scale.setTo(0.20, 0.20);
		b1g1_cannon = this.add.sprite(300, 340, 'b1g1-cannon');
		b1g1_cannon.scale.setTo(0.30, 0.30);
		b1g1_sprite = this.add.sprite(20, 50, 'b1g1-expressions_bubble');
		b1g1_sprite.scale.setTo(0.30, 0.30);
		b1g1_sprite = this.add.sprite(680, 16, 'b1g1-coins');
		b1g1_sprite.scale.setTo(0.08, 0.08);
		b1g1_boat1 = this.add.sprite(400, 250, 'b1g1-pirate_boat');
		b1g1_boat1.scale.setTo(0.60, 0.60);
		b1g1_boat2 = this.add.sprite(590, 270, 'b1g1-pirate_boat2');
		b1g1_boat2.scale.setTo(0.55, 0.55);
		b1g1_boat3 = this.add.sprite(600, 380, 'b1g1-pirate_boat3');
		b1g1_boat3.scale.setTo(0.75, 0.75);
		b1g1_bubble1 = this.add.sprite(430, 170, 'b1g1-bubble1');
		b1g1_bubble1.scale.setTo(0.18, 0.15);
		b1g1_bubble2 = this.add.sprite(620, 190, 'b1g1-bubble2');
		b1g1_bubble2.scale.setTo(0.18, 0.15);
		b1g1_bubble3 = this.add.sprite(660, 320, 'b1g1-bubble3');
		b1g1_bubble3.scale.setTo(0.18, 0.15);
		b1g1_opr_bg = this.add.sprite(50, 450, 'b1g1-opr_bg');
		b1g1_opr_bg.scale.setTo(0.40, 0.30);
		b1g1_retro = this.add.sprite(450, 480, 'b1g1-retro');
		b1g1_retro.scale.setTo(0.50, 0.40);
		b1g1_correct = this.add.sprite(700, 540, "b1g1-correct").scale.setTo(0.5,0.5);
		b1g1_heart = this.add.sprite(705, 575, "b1g1-heart").scale.setTo(0.8, 0.8);
		// Los botones responderán a eventos y realizarán alguna acción cuando de les de clic
		b1g1_home_button.inputEnabled = true;
		b1g1_boat1.inputEnabled = true;
	    b1g1_boat2.inputEnabled = true;
	    b1g1_boat3.inputEnabled = true;
		b1g1_bubble1.inputEnabled = true;
	    b1g1_bubble2.inputEnabled = true;
	    b1g1_bubble3.inputEnabled = true;

		// Se cargan los sonidos
		// b1g1_intro = this.add.audio('b1g1-intro');
		b1g1_correct = this.add.audio('correct');
		b1g1_incorrect = this.add.audio('b1g1-incorrect');
		b1g1_next_level = this.add.audio('b1g1-next_level');
		b1g1_game_over = this.add.audio('b1g1-game_over');
		b1g1_game_win = this.add.audio('b1g1-game_win');
		b1g1_game_end = this.add.audio('b1g1-game_finale');

		// b1g1_intro.play();

		// Se establecen la fuente, el color y la posición de los mensajes
		b1g1_message = this.add.text(50, 120, '', { font:'bold 40pt French Script MT', fill: '#000000' });
	    b1g1_scoreText = this.add.text(715, 0, '30', { font:'bold 40pt French Script MT', fill: '#000000' });
	    b1g1_retroText = this.add.text(480, 500, '', { font:'bold 40pt French Script MT', fill: '#ff0800' });
	    b1g1_instruction = this.add.text(150, 510, '', { font:'bold 40pt French Script MT', fill: '#4665b8' });
	    b1g1_instruction.text = b1g1_level1[b1g1_quiz].op + " =";
	    b1g1_levelText = this.add.text(700, 510, ('Nivel ' + b1g1_levelStatus), { font:'bold 25px Verdana', fill: '#4665b8' });
	    b1g1_goodCounterText = this.add.text(760, 540, goodCounter, { font:'bold 25px Verdana', fill: '#4665b8' });
	    b1g1_heartsText = this.add.text(760, 570, 3-wrongCounter, { font:'bold 25px Verdana', fill: '#4665b8' });
	    // Se coloca la pregunta con sus posibles respuestas
		this.setPossibleAnswers(b1g1_level1);

	    b1g1_balls = this.add.group();
	    b1g1_balls.enableBody = true;
	    b1g1_balls.physicsBodyType = Phaser.Physics.ARCADE;

	    b1g1_balls.createMultiple(50, 'b1g1-cannon_ball');
	    b1g1_balls.setAll('checkWorldBounds', true);
	    b1g1_balls.setAll('outOfBoundsKill', true);
	},
	// Esta funcion es para alterar el orden de los elementos del  arreglo que se le pase
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
	setPossibleAnswers: function(b1g1_quizArray) {
        b1g1_home_button.events.onInputDown.add(this.quitGame, this);
	    var possibleChoices = [b1g1_quizArray[b1g1_quiz].answer1, b1g1_quizArray[b1g1_quiz].answer2, b1g1_quizArray[b1g1_quiz].answer3];
	    b1g1_retroText.text = b1g1_quizArray[b1g1_quiz].rightAnswer;
	    b1g1_retroText.visible = false;
	    // La siguiente línea solo se usa para propósitos de desarrollo
	    // console.log(b1g1_quizArray[b1g1_quiz].rightAnswer);
	    // Se altera el orden de las posibles opciones
		this.shuffle(possibleChoices);
		// Se establecen las posibles respuestas
	    b1g1_option1 = this.add.text(465, 170, '', {  font:'bold 40pt French Script MT', fill: '#000000' });
	    b1g1_option1.text = possibleChoices[0];
	    b1g1_option2 = this.add.text(650, 195, '', {  font:'bold 40pt French Script MT', fill: '#000000'  });
	    b1g1_option2.text = possibleChoices[1];
	    b1g1_option3 = this.add.text(690, 325, '', {  font:'bold 40pt French Script MT', fill: '#000000'  });
	    b1g1_option3.text = possibleChoices[2];
	    //Add the events to the boats according to which number has the true answer
	    if (b1g1_option1.text == b1g1_quizArray[b1g1_quiz].rightAnswer) {
	        b1g1_boat1.events.onInputDown.add(this.destroyBoat, this);
	        b1g1_boat1.events.onInputDown.add(this.increaseScore, this);
	        b1g1_boat2.events.onInputDown.add(this.decreaseScore, this);
	        b1g1_boat3.events.onInputDown.add(this.decreaseScore, this);
	        b1g1_bubble1.events.onInputDown.add(function() { this.destroyBoat(b1g1_boat1); }, this);
	        b1g1_bubble1.events.onInputDown.add(function() { this.increaseScore(b1g1_boat1); }, this);
	        b1g1_bubble2.events.onInputDown.add(this.decreaseScore, this);
	        b1g1_bubble3.events.onInputDown.add(this.decreaseScore, this);
	    }
	    if (b1g1_option2.text == b1g1_quizArray[b1g1_quiz].rightAnswer) {
	        b1g1_boat1.events.onInputDown.add(this.decreaseScore, this);
	        b1g1_boat2.events.onInputDown.add(this.destroyBoat, this);
	        b1g1_boat2.events.onInputDown.add(this.increaseScore, this);
	        b1g1_boat3.events.onInputDown.add(this.decreaseScore, this);
	        b1g1_bubble1.events.onInputDown.add(this.decreaseScore, this);
	        b1g1_bubble2.events.onInputDown.add(function() { this.destroyBoat(b1g1_boat2); }, this);
	        b1g1_bubble2.events.onInputDown.add(function() { this.increaseScore(b1g1_boat2); }, this);
	        b1g1_bubble3.events.onInputDown.add(this.decreaseScore, this);
	    }
	    if (b1g1_option3.text == b1g1_quizArray[b1g1_quiz].rightAnswer) {
	        b1g1_boat1.events.onInputDown.add(this.decreaseScore, this);
	        b1g1_boat2.events.onInputDown.add(this.decreaseScore, this);
	        b1g1_boat3.events.onInputDown.add(this.destroyBoat, this);
	        b1g1_boat3.events.onInputDown.add(this.increaseScore, this);
	        b1g1_bubble1.events.onInputDown.add(this.decreaseScore, this);
	        b1g1_bubble2.events.onInputDown.add(this.decreaseScore, this);
	        b1g1_bubble3.events.onInputDown.add(function() { this.destroyBoat(b1g1_boat3); }, this);
	        b1g1_bubble3.events.onInputDown.add(function() { this.increaseScore(b1g1_boat3); }, this);
	    }
	},
	increaseScore: function(boat) {
		// Se añade la cara del pinguino feliz
		if(reaction == 0)
			reaction = this.add.sprite(100, 90, 'b1g1-happy_penguin_face');
		else{
			reaction.loadTexture('b1g1-happy_penguin_face', 0, false);
		}
		reaction.scale.setTo(1.70, 1.70);
		// Se incrementa el contador
	    score+=10;
	    // ... y se muestra en pantalla
	    b1g1_scoreText.text = score;
	    b1g1_retroText.text = "";
	    // Se modifica el contador de aciertos
	    goodCounter += 1;
	    b1g1_goodCounterText.text = goodCounter;
	    // Se reproduce el sonido de respuesta correcta
	    b1g1_correct.play();
	    // Se verifica si ya tiene los aciertos necesarios para el cambio de nivel
	    if(goodCounter == 8 || goodCounter == 16){
	    	// Se reproduce el sonido de cambio de nivel
	    	b1g1_next_level.play();
	    	b1g1_levelStatus += 1;
	    	b1g1_levelText.text = 'Nivel ' + b1g1_levelStatus;
	    	// La siguiente línea solo se usa para propósitos de desarrollo
	    	// console.log("Next Level");
	    	// Se reinicia el contador de malas
	    	wrongCounter = 0;
	    	b1g1_heartsText.text = 3;
	    	b1g1_opr_bg.scale.setTo(0.60, 0.30);
	    	b1g1_opr_bg.x = -10;
	    	b1g1_retro.x = 580;
	    	b1g1_retroText.x = 600;
	    	// Se cambia de pregunta después de dos segundos
			this.time.events.add(2000, function() {
			  	this.changeQuestion(boat);
			}, this);
	    }
	    else{
	    	if(goodCounter == 24){
	    		// Se llega al fin de juego y se muestra un mensaje de felicitacion
	    		b1g1_game_end.play();
				this.add.sprite(0, 0, 'b1g1-congrats');
        that = this;
        		// Y se regresa al menú principal
	    		setTimeout(function(){
					 that.state.start('MainMenu');
	    		}, 4000);
	    	}
	    	else{
			    this.time.events.add(2000, function() {
			    	this.changeQuestion(boat);
			    }, this);
	    	}
	    }
	},
	decreaseScore: function() {
		// Se añade la cara del pingüino triste
		if(reaction == 0)
			reaction = this.add.sprite(100, 90, 'b1g1-sad_penguin_face');
		else{
			reaction.loadTexture('b1g1-sad_penguin_face', 0, false);
		}
		reaction.scale.setTo(1.70, 1.70);
		// Se verifica si el contador ya llegó a cero
		if(score >= 10)
	    	score-=10;
		    b1g1_scoreText.text = score;
		    b1g1_heartsText.text -= 1;
		    b1g1_retroText.visible = true;
		    wrongCounter += 1;
	    // Se verifica si ya se ha fallado tres veces en cuyo caso se termina el juego
		if(wrongCounter == 3){
			//Commenting the next line allows testing without gaming over
			this.gameOver();
		}
		else{
			// Se reproduce el sonido de respuesta errónea
			b1g1_incorrect.play();
		}
	},
	changeQuestion: function(boat){
		// Se preparan los sprites y los textos para el cambio de preguntas y de opciones
		boat.visible = true;
		b1g1_option1.text = "";
		b1g1_option2.text = "";
		b1g1_option3.text = "";
		b1g1_boat1.events.onInputDown.removeAll();
		b1g1_boat2.events.onInputDown.removeAll();
		b1g1_boat3.events.onInputDown.removeAll();
		b1g1_bubble1.events.onInputDown.removeAll();
		b1g1_bubble2.events.onInputDown.removeAll();
		b1g1_bubble3.events.onInputDown.removeAll();
		b1g1_boat1.loadTexture('b1g1-pirate_boat', 0);
        b1g1_boat2.loadTexture('b1g1-pirate_boat2', 0);
        b1g1_boat3.loadTexture('b1g1-pirate_boat3', 0);
        // Si se tienen menos de ocho aciertos se usan las preguntas del nivel uno
		if(goodCounter <8){
			b1g1_quiz = Math.floor((Math.random() * (b1g1_level1.length - 1)));
			b1g1_instruction.text = b1g1_level1[b1g1_quiz].op;
			this.setPossibleAnswers(b1g1_level1);
		}
		else{
			// Nivel 2
			if(goodCounter <16){
				b1g1_quiz = Math.floor((Math.random() * (b1g1_level2.length - 1)));
				b1g1_instruction.text = b1g1_level2[b1g1_quiz].op;
				this.setPossibleAnswers(b1g1_level2);
			}
			else{
				// Nivel 3
				if(goodCounter <= 24){
					b1g1_quiz = Math.floor((Math.random() * (b1g1_level3.length - 1)));
					b1g1_instruction.text = b1g1_level3[b1g1_quiz].op;
					this.setPossibleAnswers(b1g1_level3);
				}
			}
		}
	},
	destroyBoat: function (boat) {
		//Destroy the boats when necessary
		// Si se elige la respuesta correcta la bala se mueve y el sprite desaparece
		// "destruyendo" el bote
		var b1g1_ball = b1g1_balls.getTop();
        b1g1_ball.reset(410, 390);
        this.physics.arcade.moveToPointer(b1g1_ball, 500);
        if (boat == b1g1_boat1) {
	    	setTimeout(function(){
        		b1g1_ball.kill();
            	boat.loadTexture('b1g1-destroyed_boat', 0);
	    	}, 250);
        }
        if (boat == b1g1_boat2) {
        	setTimeout(function(){
        		b1g1_ball.kill();
            	boat.loadTexture('b1g1-destroyed_boat2', 0);
	    	}, 500);
        }
        if (boat == b1g1_boat3) {
        	setTimeout(function(){
        		b1g1_ball.kill();
            	boat.loadTexture('b1g1-destroyed_boat3', 0);
	    	}, 500);
        }
        setTimeout(function(){
	    	}, 1000);
    },
    resetElements: function(){
    	// Se destruyen los sprites y se reestablecen los contadores
    	b1g1_boat1.destroy();
		b1g1_boat2.destroy();
		b1g1_boat3.destroy();
		b1g1_bubble1.destroy();
		b1g1_bubble2.destroy();
		b1g1_bubble3.destroy();
		b1g1_option1.destroy();
		b1g1_option2.destroy();
		b1g1_option3.destroy();
		b1g1_levelStatus = 1;
		reaction = 0;
		score = 30;
		goodCounter = 0;
		wrongCounter = 0;
    },
    // Se reproduce el sonido de Game Over y se resetean los elementos
	gameOver: function(){
		b1g1_game_over.play();
		this.resetElements();
    that = this;
	    setTimeout(function(){
	    	that.state.start("Block1Game1");
	    }, 5000);
	},
	// Esta función se usa si el usuario desea terminar el juego y regresar el menú principal
    quitGame: function(){
	    this.state.start("Block1Game1");
    },
    goMainMenu: function(){
    	this.resetElements();
      	this.state.start('MainMenu');
  }
};
