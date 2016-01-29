var TuxGame = {};

TuxGame.Preloader = function(game){
	// define width and height of the game
	TuxGame.GAME_WIDTH = 800;
	TuxGame.GAME_HEIGHT = 600;
};
TuxGame.Preloader.prototype = {
	preload: function(){

		/***************************************
		* Global
		****************************************/
		this.load.image("tux-male", "img/block3/game2/menu/male-tux.png");
		this.load.spritesheet('button-start-b3', 'img/block3/game2/menu/button-start.png', 400, 140);
		this.load.spritesheet('button-continue-b3', 'img/block3/game2/menu/button-continue.png', 400, 140);
		this.load.image('tux', 'img/block3/game2/panel/tux.png');
		this.load.image('sad-penguin', 'img/block3/game2/panel/sad-penguin.png');
		this.load.image('happy-penguin', 'img/block3/game2/panel/happy-penguin.png');
		this.load.spritesheet('button-home', 'img/block3/game2/button-home.png', 80, 80);
		this.load.image('heart', 'img/block3/game2/panel/heart.png');
		this.load.image('bg-menu-B3G2', 'img/block3/game2/menu/bg-MenuB3G2.jpg');

		
		/*<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>
		* 					GAME 2
		<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>*/
		/***************************************
		* Panel and background
		****************************************/
		this.load.image('infoPanel', 'img/block3/game2/panel/infoPanel.png');
		this.load.image('progressPanel', 'img/block3/game2/panel/progressPanel.png');
		this.load.spritesheet('button-previous', 'img/block3/game2/panel/button-previous.png', 70, 70);
		this.load.spritesheet('button-next-b3g2', 'img/block3/game2/panel/button-next.png', 70, 70);
		this.load.image("bg-b3g2", "img/block3/game2/bg.png");
		this.load.image("correct-b3g2", "img/block3/game2/panel/correct.png");

		/***************************************
		* Sprite's Boats
		****************************************/
		this.load.spritesheet('b-c-1/1', 'img/block3/game2/Boats/Circulo/c1.1.png', 200, 150);
		this.load.spritesheet('b-c-2/3', 'img/block3/game2/Boats/Circulo/c2.3.png', 200, 150);
		this.load.spritesheet('b-c-3/6', 'img/block3/game2/Boats/Circulo/c3.6.png', 200, 150);
		this.load.spritesheet('b-c-3/8', 'img/block3/game2/Boats/Circulo/c3.8.png', 200, 150);
		this.load.spritesheet('b-c-5/6', 'img/block3/game2/Boats/Circulo/c5.6.png', 200, 150);
		this.load.spritesheet('b-c-6/12', 'img/block3/game2/Boats/Circulo/c6.12.png', 200, 150);

		this.load.spritesheet('b-s-1/1', 'img/block3/game2/Boats/Cuadrado/s1.1.png', 200, 150);
		this.load.spritesheet('b-s-1/2', 'img/block3/game2/Boats/Cuadrado/s1.2.png', 200, 150);
		this.load.spritesheet('b-s-1/4', 'img/block3/game2/Boats/Cuadrado/s1.4.png', 200, 150);
		this.load.spritesheet('b-s-2/8', 'img/block3/game2/Boats/Cuadrado/s2.8.png', 200, 150);
		this.load.spritesheet('b-s-3/8', 'img/block3/game2/Boats/Cuadrado/s3.8.png', 200, 150);
		this.load.spritesheet('b-s-4/8', 'img/block3/game2/Boats/Cuadrado/s4.8.png', 200, 150);

		this.load.spritesheet('b-t-1/2', 'img/block3/game2/Boats/Triangulo/t1.2.png', 200, 150);
		this.load.spritesheet('b-t-1/3', 'img/block3/game2/Boats/Triangulo/t1.3.png', 200, 150);
		this.load.spritesheet('b-t-1/9', 'img/block3/game2/Boats/Triangulo/t1.9.png', 200, 150);
		this.load.spritesheet('b-t-2/2', 'img/block3/game2/Boats/Triangulo/t2.2.png', 200, 150);
		this.load.spritesheet('b-t-2/3', 'img/block3/game2/Boats/Triangulo/t2.3.png', 200, 150);
		this.load.spritesheet('b-t-3/4', 'img/block3/game2/Boats/Triangulo/t3.4.png', 200, 150);
		this.load.spritesheet('b-t-3/9', 'img/block3/game2/Boats/Triangulo/t3.9.png', 200, 150);
		this.load.spritesheet('b-t-4/6', 'img/block3/game2/Boats/Triangulo/t4.6.png', 200, 150);
		this.load.spritesheet('b-t-6/18', 'img/block3/game2/Boats/Triangulo/t6.18.png', 200, 150);

		/***************************************
		* Audios
		****************************************/
		this.load.audio('intro', 'img/block3/game2/audios/introB3G2.mp3');
		this.load.audio('q1o1', 'img/block3/game2/audios/q1o1.mp3');
		this.load.audio('q1o2', 'img/block3/game2/audios/q1o2.mp3');
		this.load.audio('q1o3', 'img/block3/game2/audios/q1o3.mp3');
		this.load.audio('q2o1', 'img/block3/game2/audios/q2o1.mp3');
		this.load.audio('q2o2', 'img/block3/game2/audios/q2o2.mp3');
		this.load.audio('q2o3', 'img/block3/game2/audios/q2o3.mp3');
		this.load.audio('q3o1', 'img/block3/game2/audios/q3o1.mp3');
		this.load.audio('q3o2', 'img/block3/game2/audios/q3o2.mp3');
		this.load.audio('q3o3', 'img/block3/game2/audios/q3o3.mp3');
		this.load.audio('q4o1', 'img/block3/game2/audios/q4o1.mp3');
		this.load.audio('q4o2', 'img/block3/game2/audios/q4o2.mp3');
		this.load.audio('q4o3', 'img/block3/game2/audios/q4o3.mp3');



		/*<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>
		* 					GAME 3
		<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>*/
		/***************************************
		* Panel and background
		****************************************/
		this.load.image("info-panel-b3g3", "img/block3/game3/panel/infoPanel.jpg");
		this.load.image('progress-panel-b3g3', 'img/block3/game3/panel/progressPanel.jpg');
		this.load.spritesheet('button-ok', 'img/block3/game3/panel/button-ok.png', 100, 100);
		this.load.image("bg-b3g3", "img/block3/game3/bg.jpg");
		this.load.image("balance-b3", "img/block3/game3/balance.png");
		this.load.image("you-fail-b3g3", "img/block3/game3/sad-penguin-fail-b3.png");
		this.load.script('filterX', 'https://cdn.rawgit.com/photonstorm/phaser/master/filters/BlurX.js');
    		this.load.script('filterY', 'https://cdn.rawgit.com/photonstorm/phaser/master/filters/BlurY.js');

    		this.load.image('backgroundMenu-b3g3', 'img/block3/game3/menu/bg.png');

		/***************************************
		* Items
		****************************************/
		this.load.image("2-bananas-b3", "img/block3/game3/items/2bananas.png");
		this.load.image("1-telescope-b3", "img/block3/game3/items/1telescope.png");
		this.load.image("5-coconuts-b3", "img/block3/game3/items/5coconuts.png");
		this.load.image("1-bottle-b3", "img/block3/game3/items/11bottle.png");
		this.load.image("5-coins-b3", "img/block3/game3/items/5coins.png");
		this.load.image("3-coins-b3", "img/block3/game3/items/3coins.png");
		this.load.image("3-coconuts-b3", "img/block3/game3/items/3coconuts.png");
		this.load.image("2-coins-b3", "img/block3/game3/items/2coins.png");
		this.load.image("3-bottles-b3", "img/block3/game3/items/3bottles.png");
		this.load.image("2-telescopes-b3", "img/block3/game3/items/2telescopes.png");
		this.load.image("5-bananas-b3", "img/block3/game3/items/5bananas.png");
		this.load.image("5-coconuts-b3", "img/block3/game3/items/5coconuts.png");

		this.load.image("300gr-b3", "img/block3/game3/items/weight-300gr.png");
		this.load.image("4kg-b3", "img/block3/game3/items/weight-4kg.png");
		this.load.image("0.5kg-b3", "img/block3/game3/items/weight-0.5kg.png");
		this.load.image("8000gr-b3", "img/block3/game3/items/weight-8000gr.png");
		this.load.image("2gr-b3", "img/block3/game3/items/weight-2gr.png");
		this.load.image("2500mg-b3", "img/block3/game3/items/weight-2500mg.png");

		this.load.image("weight-lv7-b3", "img/block3/game3/items/2kgy150gr.png");
		this.load.image("weight-lv8-b3", "img/block3/game3/items/2500mgy3gr.png");
		this.load.image("weight-lv9-b3", "img/block3/game3/items/2500gry3kg.png");
		this.load.image("weight-lv10-b3", "img/block3/game3/items/0.2kgy500gry0.3kg.png");
		this.load.image("weight-lv11-b3", "img/block3/game3/items/2000gry2.4kgy250gr.png");
		this.load.image("weight-lv12-b3", "img/block3/game3/items/0.2kgy2.5kgy1000gr.png");

		/***************************************
		* Sound
		****************************************/
		this.load.audio('correct', 'img/commons/correct.mp3');
		this.load.audio('incorrect', 'img/commons/incorrect.mp3');
		this.load.audio('loop', 'img/commons/loop.mp3');

	},

	create: function(){
		this.state.start("MenuB3G2");
	}
};