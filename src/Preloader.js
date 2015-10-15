TuxGame.Preloader = function(game){
	// define width and height of the game
	TuxGame.GAME_WIDTH = 640;
	TuxGame.GAME_HEIGHT = 960;
};
TuxGame.Preloader.prototype = {
	preload: function(){
		// set background color and preload image
		this.stage.backgroundColor = '#B4D9E7';
		this.preloadBar = this.add.sprite((TuxGame.GAME_WIDTH-311)/2, (TuxGame.GAME_HEIGHT-27)/2, 'preloaderBar');
		this.load.setPreloadSprite(this.preloadBar);
		// Loading Images
		/**************************************
		* Block 2
		***************************************/
		// Block 2 Welcome
		this.load.image('welcome-bg', 'img/block2/welcome/background.png');
		this.load.image('welcome-boat', 'img/block2/welcome/boat.png');
		this.load.image('welcome-male-tux', 'img/block2/welcome/male-tux.png');
		// Block 2 game 1
		this.load.image('background', 'img/background.png');
		this.load.image('sea-bg', 'img/block2/game1/sea-bg.png');
		this.load.image('fish9', 'img/block2/game1/fish9.png');
		this.load.image('fish4', 'img/block2/game1/fish4.png');
		this.load.image('fish5', 'img/block2/game1/fish5.png');
		this.load.image('fish6', 'img/block2/game1/fish6.png');
		this.load.image('fish7', 'img/block2/game1/fish7.png');
		this.load.image('number0', 'img/block2/game1/number0.png');
		this.load.image('number1', 'img/block2/game1/number1.png');
		this.load.image('number2', 'img/block2/game1/number2.png');
		this.load.image('number3', 'img/block2/game1/number3.png');
		this.load.image('n4', 'img/block2/game1/n4.png');
		this.load.image('number5', 'img/block2/game1/number5.png');
		this.load.image('number6', 'img/block2/game1/number6.png');
		this.load.image('number7', 'img/block2/game1/number7.png');
		this.load.image('number8', 'img/block2/game1/number8.png');
		this.load.image('number9', 'img/block2/game1/number9.png');

		// this.load.image('floor', 'img/floor.png');
		this.load.image('monster-cover', 'img/monster-cover.png');
		this.load.image('title', 'img/title.png');
		// this.load.image('game-over', 'img/gameover.png');
		// this.load.image('score-bg', 'img/score-bg.png');
		// this.load.image('button-pause', 'img/button-pause.png');
		// load spritesheets
		// this.load.spritesheet('candy', 'img/candy.png', 82, 98);
		// this.load.spritesheet('monster-idle', 'img/monster-idle.png', 103, 131);
		this.load.spritesheet('button-start', 'img/button-start.png', 401, 143);
	},
	create: function(){
		// start the MainMenu state
		this.state.start('MainMenu');
	}
};