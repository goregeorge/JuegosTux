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
		this.load.image('congrats', 'img/block1/game1/congrats.png');
		this.load.image('home_button', 'img/block1/game1/home_button.png');
		this.load.image('avatar', 'img/block1/game1/avatar.png');
		this.load.image('cannon', 'img/block1/game1/cannon.png');
		this.load.image('cannon_ball', 'img/block1/game1/cannon_ball.png');
		this.load.image('pirate_boat', 'img/block1/game1/pirate_boat.png');
		this.load.image('pirate_boat2', 'img/block1/game1/pirate_boat2.png');
		this.load.image('pirate_boat3', 'img/block1/game1/pirate_boat3.png');
		this.load.image('destroyed_boat', 'img/block1/game1/destroyed_boat.png');
		this.load.image('destroyed_boat2', 'img/block1/game1/destroyed_boat2.png');
		this.load.image('destroyed_boat3', 'img/block1/game1/destroyed_boat3.png');
		this.load.image('bubble1', 'img/block1/game1/bubble1.png');
		this.load.image('bubble2', 'img/block1/game1/bubble2.png');
		this.load.image('bubble3', 'img/block1/game1/bubble3.png');
		this.load.image('coins', 'img/block1/game1/coins.png');
		this.load.image('expressions_bubble', 'img/block1/game1/expressions_bubble.png');
		this.load.image('happy_penguin_face', 'img/block1/game1/happy_penguin_face.png');
		this.load.image('sad_penguin_face', 'img/block1/game1/sad_penguin_face.png');
		this.load.image('opr_bg', 'img/block1/game1/opr_bg.png');
		this.load.image('retro', 'img/block1/game1/retro.png');
		// load sounds
		this.load.audio('intro', ['sound/block1/game1/mp3/intro.mp3', 'sound/block1/game1/ogg/intro.ogg']);
		this.load.audio('incorrect', ['sound/block1/game1/mp3/incorrect.mp3', 'sound/block1/game1/ogg/incorrect.ogg']);
		this.load.audio('next_level', ['sound/block1/game1/mp3/next_level.mp3', 'sound/block1/game1/ogg/next_level.ogg']);
		this.load.audio('game_over', ['sound/block1/game1/mp3/game_over.mp3', 'sound/block1/game1/ogg/game_over.ogg']);
		this.load.audio('game_win', ['sound/block1/game1/mp3/game_win.mp3', 'sound/block1/game1/ogg/game_win.ogg']);
		this.load.audio('game_finale', ['sound/block1/game1/mp3/game_end.mp3', 'sound/block1/game1/ogg/game_finale.ogg']);
	},
	create: function(){
		// start the MainMenu state
		this.state.start('Block1Game1');
	}
};
