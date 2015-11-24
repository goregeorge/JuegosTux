var TuxGame = {};

TuxGame.Preloader = function(game){
	// define width and height of the game
	TuxGame.GAME_WIDTH = 800;
	TuxGame.GAME_HEIGHT = 600;
};
TuxGame.Preloader.prototype = {
	preload: function(){

		/***************************************
		* Menu
		****************************************/
		this.load.image("tux-male", "img/menu/male-tux.png");
		this.load.spritesheet('button-start', 'img/menu/button-start.png', 400, 140);

		/***************************************
		* Panel
		****************************************/
		//Panel
		this.load.image('infoPanel', 'img/panel/infoPanel.png');
		//this.load.image('progressPanel', 'img/panel/progressPanel.png');
		this.load.image('progressPanel', 'img/panel/newPanel.png');
		this.load.spritesheet('button-previous', 'img/panel/button-previous.png', 70, 70);
		this.load.spritesheet('button-next', 'img/panel/button-next.png', 70, 70);
		this.load.image('tux', 'img/panel/tux.png');
		this.load.image('sad-penguin', 'img/panel/sad-penguin.png');
		this.load.image('happy-penguin', 'img/panel/happy-penguin.png');

		/***************************************
		* Sprite's Boats
		****************************************/
		/*#######################################
		##	nomenclature b-[t|c|s]-[fraction]
		##	t = triangle
		##	s = square
		##	c = circle		
		#######################################*/
		this.load.spritesheet('b-c-1/1', 'img/Boats/Circulo/c1.1.png', 200, 150);
		this.load.spritesheet('b-c-2/3', 'img/Boats/Circulo/c2.3.png', 200, 150);
		this.load.spritesheet('b-c-3/6', 'img/Boats/Circulo/c3.6.png', 200, 150);
		this.load.spritesheet('b-c-3/8', 'img/Boats/Circulo/c3.8.png', 200, 150);
		this.load.spritesheet('b-c-5/6', 'img/Boats/Circulo/c5.6.png', 200, 150);
		this.load.spritesheet('b-c-6/12', 'img/Boats/Circulo/c6.12.png', 200, 150);

		this.load.spritesheet('b-s-1/1', 'img/Boats/Cuadrado/s1.1.png', 200, 150);
		this.load.spritesheet('b-s-1/2', 'img/Boats/Cuadrado/s1.2.png', 200, 150);
		this.load.spritesheet('b-s-1/4', 'img/Boats/Cuadrado/s1.4.png', 200, 150);
		this.load.spritesheet('b-s-2/8', 'img/Boats/Cuadrado/s2.8.png', 200, 150);
		this.load.spritesheet('b-s-3/8', 'img/Boats/Cuadrado/s3.8.png', 200, 150);
		this.load.spritesheet('b-s-4/8', 'img/Boats/Cuadrado/s4.8.png', 200, 150);

		this.load.spritesheet('b-t-1/2', 'img/Boats/Triangulo/t1.2.png', 200, 150);
		this.load.spritesheet('b-t-1/3', 'img/Boats/Triangulo/t1.3.png', 200, 150);
		this.load.spritesheet('b-t-1/9', 'img/Boats/Triangulo/t1.9.png', 200, 150);
		this.load.spritesheet('b-t-2/2', 'img/Boats/Triangulo/t2.2.png', 200, 150);
		this.load.spritesheet('b-t-2/3', 'img/Boats/Triangulo/t2.3.png', 200, 150);
		this.load.spritesheet('b-t-3/4', 'img/Boats/Triangulo/t3.4.png', 200, 150);
		this.load.spritesheet('b-t-3/9', 'img/Boats/Triangulo/t3.9.png', 200, 150);
		this.load.spritesheet('b-t-4/6', 'img/Boats/Triangulo/t4.6.png', 200, 150);
		this.load.spritesheet('b-t-6/18', 'img/Boats/Triangulo/t6.18.png', 200, 150);


		/***************************************
		* Audio
		****************************************/
		this.load.audio('intro', 'audio/introB3G2.mp3');
		this.load.audio('q1o1', 'audio/q1o1.mp3');
		this.load.audio('q1o2', 'audio/q1o2.mp3');
		this.load.audio('q1o3', 'audio/q1o3.mp3');
		this.load.audio('q2o1', 'audio/q2o1.mp3');
		this.load.audio('q2o2', 'audio/q2o2.mp3');
		this.load.audio('q2o3', 'audio/q2o3.mp3');
		this.load.audio('q3o1', 'audio/q3o1.mp3');
		this.load.audio('q3o2', 'audio/q3o2.mp3');
		this.load.audio('q3o3', 'audio/q3o3.mp3');
		this.load.audio('q4o1', 'audio/q4o1.mp3');
		this.load.audio('q4o2', 'audio/q4o2.mp3');
		this.load.audio('q4o3', 'audio/q4o3.mp3');


		//Other
		//this.load.image("home", "img/home.png");

		// set background color
		this.stage.backgroundColor = '#B4D9E7';
		this.load.image("bg", "img/bg.png");

		//Other
		this.load.spritesheet('button-home', 'img/button-home.png', 80, 80);


	},

	create: function(){
		// start the first question
		//this.state.start("MenuB3G2");
		this.state.start("MenuB3G2");
	}
};