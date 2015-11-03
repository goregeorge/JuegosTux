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
    //Commons
    this.load.bitmapFont('desyrel', 'src/commons/desyrel.png', 'src/commons/desyrel.xml');
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
    this.load.image('fish5', 'img/block2/game1/fish5.png?c');
    this.load.image('fish6', 'img/block2/game1/fish6.png?b');
    this.load.image('fish7', 'img/block2/game1/fish7.png?a');
    // Block 2 Wrong
    this.load.image('happy', 'img/block2/game1/happy.png?a');
    this.load.image('wrong', 'img/block2/game1/wrong.png?a');

    // Number assets
    this.load.image('number0', 'img/block2/game1/number_0.png?l2');
    this.load.image('number1', 'img/block2/game1/number_1.png?l2');
    this.load.image('number2', 'img/block2/game1/number_2.png?l2');
    this.load.image('number3', 'img/block2/game1/number_3.png?l2');
    this.load.image('number4', 'img/block2/game1/number_4.png?l2');
    this.load.image('number5', 'img/block2/game1/number_5.png?l2');
    this.load.image('number6', 'img/block2/game1/number_6.png?l2');
    this.load.image('number7', 'img/block2/game1/number_7.png?l2');
    this.load.image('number8', 'img/block2/game1/number_8.png?l2');
    this.load.image('number9', 'img/block2/game1/number_9.png?l2');
    this.load.image('numberDot', 'img/block2/game1/number_dot.jpg');
    this.load.image('fishHook', 'img/block2/game1/fish_hook.png?vc');
    this.load.image('line', 'img/block2/game1/line.png?v=5');

    this.load.image('monster-cover', 'img/monster-cover.png');
    this.load.image('title', 'img/title.png');

    // load spritesheets
    this.load.spritesheet('button-start', 'img/button-start.png', 401, 143);
  },
  create: function(){
    // start the MainMenu state
    this.state.start('Block2Welcome');
  }
};
