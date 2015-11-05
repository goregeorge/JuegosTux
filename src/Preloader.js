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
    this.load.image('welcome-male-tux', 'img/block2/welcome/male-tux.png?v=1');
    // Block 2 game 1
    this.load.image('background', 'img/background.png');
    this.load.image('sea-bg', 'img/block2/game1/sea-bg.png');
    this.load.image('fish9', 'img/block2/game1/fish9.png');
    this.load.image('fish4', 'img/block2/game1/fish4.png');
    this.load.image('fish5', 'img/block2/game1/fish5.png?c');
    this.load.image('fish6', 'img/block2/game1/fish6.png?b');
    this.load.image('fish7', 'img/block2/game1/fish7.png?a');
    // Block 2 Wrong
    this.load.image('happy', 'img/block2/game1/happy.png?v=2');
    this.load.image('wrong', 'img/block2/game1/wrong.png?a');
    this.load.image('wrong-s', 'img/block2/game1/wrong_s.png?a');
    this.load.image('good-s', 'img/block2/game1/good_s.png?a');

    // Number assets
    this.load.image('number0', 'img/block2/game1/number_0.png?v=1');
    this.load.image('number1', 'img/block2/game1/number_1.png?v=1');
    this.load.image('number2', 'img/block2/game1/number_2.png?v=1');
    this.load.image('number3', 'img/block2/game1/number_3.png?v=1');
    this.load.image('number4', 'img/block2/game1/number_4.png?v=1');
    this.load.image('number5', 'img/block2/game1/number_5.png?v=1');
    this.load.image('number6', 'img/block2/game1/number_6.png?v=1');
    this.load.image('number7', 'img/block2/game1/number_7.png?v=1');
    this.load.image('number8', 'img/block2/game1/number_8.png?v=1');
    this.load.image('number9', 'img/block2/game1/number_9.png?v=1');
    this.load.image('numberDot', 'img/block2/game1/number_dot.jpg');
    // Hooks
    this.load.image('fishHook', 'img/block2/game1/fish_hook.png?vc');
    this.load.image('fishHook0', 'img/block2/game1/fish_hook.png?vc');
    this.load.image('fishHook1', 'img/block2/game1/fish_hook.png?vc');
    this.load.image('fishHook2', 'img/block2/game1/fish_hook.png?vc');
    this.load.image('fishHook3', 'img/block2/game1/fish_hook.png?vc');
    this.load.image('fishHook4', 'img/block2/game1/fish_hook.png?vc');
    this.load.image('fishHook5', 'img/block2/game1/fish_hook.png?vc');
    this.load.image('fishHook6', 'img/block2/game1/fish_hook.png?vc');
    this.load.image('fishHook7', 'img/block2/game1/fish_hook.png?vc');
    this.load.image('fishHook8', 'img/block2/game1/fish_hook.png?vc');
    this.load.image('fishHook9', 'img/block2/game1/fish_hook.png?vc');
    this.load.image('line', 'img/block2/game1/line.png?v=1');

    // Other Assets
    this.load.image('clock',  'img/block2/game1/clock.png?v=2');
    this.load.image('point',  'img/block2/game1/point.png?v=1');

    this.load.image('monster-cover', 'img/monster-cover.png');
    this.load.image('title', 'img/title.png');
    this.load.image('score-table', 'img/block2/game1/scoreTable.png?v=2');
    this.load.image('globo-text', 'img/block2/game1/GloboText.png?v=3');

    // load spritesheets
    this.load.image('button-start', 'img/block2/game1/button_green_over.png?v=2');
  },
  create: function(){
    // start the MainMenu state
    this.state.start('Block2Welcome');
  }
};
