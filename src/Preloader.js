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
		// load images
		this.load.image('background', 'img/background.png');
		this.load.image('sea-bg', 'img/block2/game1/sea-bg.png');
		this.load.image('fish9', 'img/block2/game1/fish9.png');
		this.load.image('fish4', 'img/block2/game1/fish4.png');
		this.load.image('fish5', 'img/block2/game1/fish5.png');
		this.load.image('fish6', 'img/block2/game1/fish6.png');
		this.load.image('fish7', 'img/block2/game1/fish7.png');
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