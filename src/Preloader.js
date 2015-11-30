TuxGame.Preloader = function(game){
  // define width and height of the game
  // TuxGame.GAME_WIDTH = 640;
  // TuxGame.GAME_HEIGHT = 960;

  TuxGame.GAME_WIDTH = 800;
  TuxGame.GAME_HEIGHT = 600;
};
TuxGame.Preloader.prototype = {
  preload: function(){
    // set background color and preload image
    this.stage.backgroundColor = '#B4D9E7';
    this.preloadBar = this.add.sprite((TuxGame.GAME_WIDTH-311)/2, (TuxGame.GAME_HEIGHT-27)/2, 'preloaderBar');
    this.load.setPreloadSprite(this.preloadBar);
    this.load.bitmapFont('desyrel', 'src/commons/desyrel.png', 'src/commons/desyrel.xml');

    /**************************************
    * Block 2
    ***************************************/
    // Block 2 Welcome
    this.load.image('welcome-bg', 'img/block2/welcome/background.png');
    this.load.image('welcome-boat', 'img/block2/welcome/boat.png');
    this.load.image('welcome-male-tux', 'img/block2/welcome/male-tux.png?v=1');
    this.load.audio('welcome-block2-game1','img/block2/game1/welcome-game1.mp3');

    /**************************************
    * Block 2 Game 1
    ***************************************/
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

    /**************************************
    * Block 3
    ***************************************/
    /**************************************
    * Block 3 Globals
    ***************************************/
    this.load.image("tux-male", "img/block3/game2/menu/male-tux.png");
    this.load.spritesheet('button-start-b3', 'img/block3/game2/menu/button-start.png', 400, 140);
    this.load.spritesheet('button-continue-b3', 'img/block3/game2/menu/button-continue.png', 400, 140);
    this.load.image('tux', 'img/block3/game2/panel/tux.png');
    this.load.image('sad-penguin', 'img/block3/game2/panel/sad-penguin.png');
    this.load.image('happy-penguin', 'img/block3/game2/panel/happy-penguin.png');
    this.load.spritesheet('button-home', 'img/block3/game2/button-home.png', 80, 80);
    this.load.image('heart', 'img/block3/game2/panel/heart.png');
    this.load.image('bg-menu-B3G2', 'img/block3/game2/menu/bg-MenuB3G2.jpg');

    /**************************************
    * Block 3 Game 2
    ***************************************/
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

  },
  create: function(){
    // start the MainMenu state
    this.state.start('Block2Welcome');
  }
};