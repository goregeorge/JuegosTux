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
    this.load.audio('welcome-block2-game1','img/block2/game1/welcome-game1.mp3');
    // Block 2 game 1
    this.load.image('background', 'img/background.png');
    this.load.image('sea-bg', 'img/block2/game1/sea-bg.png');
    this.load.image('fish9', 'img/block2/game1/fish9.png?2');
    this.load.image('fish4', 'img/block2/game1/fish4.png?3');
    this.load.image('fish5', 'img/block2/game1/fish5.png?4');
    this.load.image('fish6', 'img/block2/game1/fish6.png?5');
    this.load.image('fish7', 'img/block2/game1/fish7.png?6');
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

    this.load.image('number0,5', 'img/block2/game1/number_0,5.png?v=2');
    this.load.image('number1,5', 'img/block2/game1/number_1,5.png?v=2');
    this.load.image('number2,5', 'img/block2/game1/number_2,5.png?v=2');
    this.load.image('number3,5', 'img/block2/game1/number_3,5.png?v=2');
    this.load.image('number4,5', 'img/block2/game1/number_4,5.png?v=2');
    this.load.image('number5,5', 'img/block2/game1/number_5,5.png?v=2');
    this.load.image('number6,5', 'img/block2/game1/number_6,5.png?v=2');
    this.load.image('number7,5', 'img/block2/game1/number_7,5.png?v=2');
    this.load.image('number7,5', 'img/block2/game1/number_7,5.png?v=2');
    this.load.image('number8,5', 'img/block2/game1/number_8,5.png?v=2');
    this.load.image('numberDot', 'img/block2/game1/number_dot.jpg');

    this.load.image('number2,2', 'img/block2/game1/number_2,2.png?v=2');
    this.load.image('number2,4', 'img/block2/game1/number_2,4.png?v=2');
    this.load.image('number2,6', 'img/block2/game1/number_2,6.png?v=2');
    this.load.image('number2,8', 'img/block2/game1/number_2,8.png?v=2');
    this.load.image('number3,2', 'img/block2/game1/number_3,2.png?v=2');
    this.load.image('number3,4', 'img/block2/game1/number_3,4.png?v=2');
    this.load.image('number3,6', 'img/block2/game1/number_3,6.png?v=2');
    this.load.image('number3,8', 'img/block2/game1/number_3,8.png?v=2');
    
    this.load.image('number6,2', 'img/block2/game1/number_6,2.png?v=2');
    this.load.image('number6,4', 'img/block2/game1/number_6,4.png?v=2');
    this.load.image('number6,6', 'img/block2/game1/number_6,6.png?v=2');
    this.load.image('number6,8', 'img/block2/game1/number_6,8.png?v=2');
    this.load.image('number7,2', 'img/block2/game1/number_7,2.png?v=2');
    this.load.image('number7,4', 'img/block2/game1/number_7,4.png?v=2');
    this.load.image('number7,6', 'img/block2/game1/number_7,6.png?v=2');
    this.load.image('number7,8', 'img/block2/game1/number_7,8.png?v=2');

    this.load.image('line', 'img/block2/game1/line.png?v=1');

    // Other Assets
    this.load.image('clock',  'img/block2/game1/clock.png?v=2');
    this.load.image('point',  'img/block2/game1/point.png?v=1');

    this.load.image('monster-cover', 'img/monster-cover.png');
    this.load.image('title', 'img/title.png');
    this.load.image('score-table', 'img/block2/game1/scoreTable.png?v=2');
    this.load.image('score-half', 'img/block2/game1/score-half.png?v=3');
    this.load.image('globo-text', 'img/block2/game1/GloboText.png?v=3');

    // load spritesheets
    this.load.image('button-start', 'img/block2/game1/button_green_over.png?v=2');
    this.load.image('b2g2-welcome', 'img/block2/game2/welcome-bg.png?v=2');

    // Block 2 game 2
    // Sounds
    this.load.audio('correct','img/commons/correct.mp3');
    this.load.audio('incorrect','img/commons/incorrect.mp3');
    this.load.audio('bubble','img/commons/bubble.mp3');
    this.load.audio('loop','img/commons/loop.mp3');
    
    // Images
    this.load.image('welcome-male-tux-brush', 'img/block2/game2/male-tux-brush.png?v=1');
    this.load.image('sea-bg-2',   'img/block2/game2/fondo3.png?v=2');
    this.load.image('fish_body',  'img/block2/game2/fish_body.png?v=2');
    this.load.image('square_blue','img/block2/game2/square_blue.png?v=2');
    this.load.image('square_green','img/block2/game2/square_green.png?v=2');
    this.load.image('square_orange','img/block2/game2/square_orange.png?v=2');
    this.load.image('square_pistache','img/block2/game2/square_pistache.png?v=2');
    this.load.image('square_purple','img/block2/game2/square_purple.png?v=2');
    this.load.image('square_teal','img/block2/game2/square_teal.png?v=2');
    this.load.image('square_violet','img/block2/game2/square_violet.png?v=2');
    this.load.image('square_white','img/block2/game2/square_white.png?v=2');
    this.load.image('square_white_12','img/block2/game2/square_white_12.png?v=2');
    this.load.image('square_yellow','img/block2/game2/square_yellow.png?v=2');
    this.load.image('palette','img/block2/game2/palette.png?v=2');
    // 1 / 2
    this.load.image('square_white_12','img/block2/game2/square_white_12.png?v=2');
    this.load.image('square_green_12','img/block2/game2/square_green_12.png?v=2');
    this.load.image('square_orange_12','img/block2/game2/square_orange_12.png?v=2');
    this.load.image('square_pink_12','img/block2/game2/square_pink_12.png?v=2');
    this.load.image('square_purple_12','img/block2/game2/square_purple_12.png?v=2');
    this.load.image('square_red_12','img/block2/game2/square_red_12.png?v=2');
    this.load.image('square_yellow_12','img/block2/game2/square_yellow_12.png?v=2');

    // 1 / 4
    this.load.image('square_white_14','img/block2/game2/square_white_1_4.png?v=2');
    this.load.image('square_green_14','img/block2/game2/square_green_1_4.png?v=2');
    this.load.image('square_orange_14','img/block2/game2/square_orange_1_4.png?v=2');
    this.load.image('square_pink_14','img/block2/game2/square_pink_1_4.png?v=2');
    this.load.image('square_purple_14','img/block2/game2/square_purple_1_4.png?v=2');
    this.load.image('square_red_14','img/block2/game2/square_red_1_4.png?v=2');
    this.load.image('square_yellow_14','img/block2/game2/square_yellow_1_4.png?v=2');

    // 1 / 6
    this.load.image('square_white_16','img/block2/game2/square_white_1_6.png?v=2');
    this.load.image('square_green_16','img/block2/game2/square_green_1_6.png?v=2');
    this.load.image('square_orange_16','img/block2/game2/square_orange_1_6.png?v=2');
    this.load.image('square_pink_16','img/block2/game2/square_pink_1_6.png?v=2');
    this.load.image('square_purple_16','img/block2/game2/square_purple_1_6.png?v=2');
    this.load.image('square_red_16','img/block2/game2/square_red_1_6.png?v=2');
    this.load.image('square_yellow_16','img/block2/game2/square_yellow_1_6.png?v=2');

    // 1 / 8
    this.load.image('square_white_18','img/block2/game2/square_white_1_8.png?v=3');
    this.load.image('square_green_18','img/block2/game2/square_green_1_8.png?v=4');
    this.load.image('square_orange_18','img/block2/game2/square_orange_1_8.png?v=3');
    this.load.image('square_pink_18','img/block2/game2/square_pink_1_8.png?v=3');
    this.load.image('square_purple_18','img/block2/game2/square_purple_1_8.png?v=3');
    this.load.image('square_red_18','img/block2/game2/square_red_1_8.png?v=3');
    this.load.image('square_yellow_18','img/block2/game2/square_yellow_1_8.png?v=3');

    this.load.image('block2-game2-next','img/block2/game2/next.png?v=2');
    // Block 2 game 3
    this.load.image('sea-bg-3',   'img/block2/game3/fondo3.png?v=2');
    this.load.image('fish_body',  'img/block2/game3/fish_body2.png?v=2');
  },
  create: function(){
    // start the MainMenu state
    this.add.audio('loop').loopFull(1);
    this.state.start('Block2Game2Welcome');
  }
};
