TuxGame.Preloader = function(game){
	// define width and height of the game
	TuxGame.GAME_WIDTH = 800;
	TuxGame.GAME_HEIGHT = 600;
};
TuxGame.Preloader.prototype = {
	preload: function(){
		// set background color and preload image
		this.stage.backgroundColor = '#B4D9E7';
		this.preloadBar = this.add.sprite((TuxGame.GAME_WIDTH-311)/2, (TuxGame.GAME_HEIGHT-27)/2, 'preloaderBar');
		this.load.setPreloadSprite(this.preloadBar);
		// load images
		this.load.image('beach-bg', 'img/block1/game1/beach-bg.png');
		this.load.image('avatar', 'img/block1/game1/avatar.png');
		this.load.image('cannon', 'img/block1/game1/cannon.png');
		this.load.image('pirate_boat', 'img/block1/game1/pirate_boat.png');
	},
	create: function(){
		// start the MainMenu state
		this.state.start('Block1Game1');
	}
};