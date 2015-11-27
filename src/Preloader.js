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
		this.load.spritesheet('button-start', 'img/block3/game2/menu/button-start.png', 400, 140);
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
		this.load.image("info-panel", "img/block3/game3/panel/infoPanel.jpg");
		this.load.image('status-panel', 'img/block3/game3/panel/statusPanel.jpg');
		this.load.spritesheet('button-ok', 'img/block3/game3/panel/button-ok.png', 100, 100);
		this.load.image("bg-b3g3", "img/block3/game3/bg.png");

		/***************************************
		* Items
		****************************************/
		this.load.image("1-coin", "img/block3/game3/items/1coin.png");
		this.load.image("3-coins", "img/block3/game3/items/3coins.png");
		this.load.image("4-coins", "img/block3/game3/items/4coins.png");
		this.load.image("6-coins", "img/block3/game3/items/6coins.png");
		this.load.image("8.1-coins", "img/block3/game3/items/8.1coins.png");
		this.load.image("8.2-coins", "img/block3/game3/items/8.2coins.png");
		this.load.image("1-banana", "img/block3/game3/items/1banana.png");
		this.load.image("2-banana", "img/block3/game3/items/2bananas.png");
		this.load.image("3-banana", "img/block3/game3/items/3bananas.png");
		this.load.image("4-banana", "img/block3/game3/items/4bananas.png");
		this.load.image("5-banana", "img/block3/game3/items/5bananas.png");
		this.load.image("1-coconut", "img/block3/game3/items/1coconut.png");
		this.load.image("2-coconuts", "img/block3/game3/items/2coconuts.png");
		this.load.image("3-coconuts", "img/block3/game3/items/3coconuts.png");
		this.load.image("5-coconuts", "img/block3/game3/items/5coconuts.png");
		this.load.image("weight-100gr", "img/block3/game3/items/weight-100gr.png");

	},

	create: function(){
		this.state.start("MenuB3G2");
	}
};