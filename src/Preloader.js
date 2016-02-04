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
		//block1 game1
		this.load.image('b1g1-beach-bg', 'img/block1/game1/b1g1beach-bg.png');
		this.load.image('b1g1-congrats', 'img/block1/game1/b1g1congrats.png');
		this.load.image('b1g1-home_button', 'img/block1/game1/b1g1home_button.png');
		this.load.image('b1g1-avatar', 'img/block1/game1/b1g1avatar.png');
		this.load.image('b1g1-cannon', 'img/block1/game1/b1g1cannon.png');
		this.load.image('b1g1-cannon_ball', 'img/block1/game1/b1g1cannon_ball.png');
		this.load.image('b1g1-pirate_boat', 'img/block1/game1/b1g1pirate_boat.png');
		this.load.image('b1g1-pirate_boat2', 'img/block1/game1/b1g1pirate_boat2.png');
		this.load.image('b1g1-pirate_boat3', 'img/block1/game1/b1g1pirate_boat3.png');
		this.load.image('b1g1-destroyed_boat', 'img/block1/game1/b1g1destroyed_boat.png');
		this.load.image('b1g1-destroyed_boat2', 'img/block1/game1/b1g1destroyed_boat2.png');
		this.load.image('b1g1-destroyed_boat3', 'img/block1/game1/b1g1destroyed_boat3.png');
		this.load.image('b1g1-bubble1', 'img/block1/game1/b1g1bubble1.png');
		this.load.image('b1g1-bubble2', 'img/block1/game1/b1g1bubble2.png');
		this.load.image('b1g1-bubble3', 'img/block1/game1/b1g1bubble3.png');
		this.load.image('b1g1-coins', 'img/block1/game1/b1g1coins.png');
		this.load.image('b1g1-expressions_bubble', 'img/block1/game1/b1g1expressions_bubble.png');
		this.load.image('b1g1-happy_penguin_face', 'img/block1/game1/b1g1happy_penguin_face.png');
		this.load.image('b1g1-sad_penguin_face', 'img/block1/game1/b1g1sad_penguin_face.png');
		this.load.image('b1g1-opr_bg', 'img/block1/game1/b1g1opr_bg.png');
		this.load.image('b1g1-retro', 'img/block1/game1/b1g1retro.png');

		//block1 game2
		this.load.image('b1g2-galleon-bg', 'img/block1/game2/b1g2galleon.png');
		this.load.image('b1g2-table', 'img/block1/game2/b1g2table.png');
		this.load.image('b1g2-octopus', 'img/block1/game2/b1g2octopus.png');
		this.load.image('b1g2-jar', 'img/block1/game2/b1g2jar.png');
		this.load.image('b1g2-barrel', 'img/block1/game2/b1g2barrel.png');
		this.load.image('b1g2-cup', 'img/block1/game2/b1g2cup.png');
		this.load.image('b1g2-button', 'img/block1/game2/b1g2button.png');
		this.load.image('b1g2-thumbs_down', 'img/block1/game2/b1g2thumbs_down.png');
		this.load.image('b1g2-thumbs_up', 'img/block1/game2/b1g2thumbs_up.png');
		this.load.image('b1g2-bg', 'img/block1/game2/b1g2bg.png');


		// load sounds
		//block1 game1
		this.load.audio('b1g1-intro', ['sound/block1/game1/mp3/b1g1intro.mp3', 'sound/block1/game1/ogg/b1g1intro.ogg']);
		this.load.audio('b1g1-incorrect', ['sound/block1/game1/mp3/b1g1incorrect.mp3', 'sound/block1/game1/ogg/b1g1incorrect.ogg']);
		this.load.audio('b1g1-next_level', ['sound/block1/game1/mp3/b1g1next_level.mp3', 'sound/block1/game1/ogg/b1g1next_level.ogg']);
		this.load.audio('b1g1-game_over', ['sound/block1/game1/mp3/b1g1game_over.mp3', 'sound/block1/game1/ogg/b1g1game_over.ogg']);
		this.load.audio('b1g1-game_win', ['sound/block1/game1/mp3/b1g1game_win.mp3', 'sound/block1/game1/ogg/b1g1game_win.ogg']);
		this.load.audio('b1g1-game_finale', ['sound/block1/game1/mp3/b1g1game_end.mp3', 'sound/block1/game1/ogg/b1g1game_finale.ogg']);
	},
	create: function(){
		// start the MainMenu state
		this.state.start('Block1Game2');
	}
};
