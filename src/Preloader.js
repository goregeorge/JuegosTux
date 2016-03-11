TuxGame.Preloader = function(game){

  TuxGame.GAME_WIDTH = 800;
  TuxGame.GAME_HEIGHT = 600;
  TuxGame.MAIN_LOOP_SONG;
};
TuxGame.Preloader.prototype = {
  preload: function(){
    // set background color and preload image
    this.stage.backgroundColor = '#B4D9E7';
    this.preloadBar = this.add.sprite((TuxGame.GAME_WIDTH-311)/2, (TuxGame.GAME_HEIGHT-27)/2, 'preloaderBar');
    this.load.setPreloadSprite(this.preloadBar);
    this.load.bitmapFont('desyrel', 'src/commons/desyrel.png', 'src/commons/desyrel.xml');
    /***************************************
    * Sounds
    ****************************************/
    this.load.audio('g1b1-loop','img/commons/g1b1-loop.mp3');
    this.load.audio('g2b1-loop','img/commons/g2b1-loop.mp3');
    this.load.audio('g1b2-loop','img/commons/g1b2-loop.mp3');
    this.load.audio('g2b2-loop','img/commons/g2b2-loop.mp3');
    this.load.audio('g1b3-loop','img/commons/g1b3-loop.mp3');
    this.load.audio('g2b3-loop','img/commons/g2b3-loop.mp3');

    /***************************************
    * Main Menu
    ****************************************/
    this.load.image("bg-main-menu", "img/menu/map.png?1");
    this.load.image("bg-main-menu2", "img/menu/map2.jpg?1");
    this.load.image("level-main-menu", "img/menu/level.png?2");
    this.load.image("level-main-menu2", "img/menu/level2.png?3");

    /**************************************
    * Block 1
    ***************************************/
    /**************************************
    * Block 1 Game 1
    ***************************************/
    this.load.image('b1g1-beach-bg', 'img/block1/game1/b1g1beach-bg.png');
    this.load.image('b1g1-congrats', 'img/block1/game1/b1g1congrats.png');
    this.load.image('b1g1-menu', 'img/block1/game1/b1g1menu.png');
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
    this.load.image('b1g1-correct', 'img/block1/game1/b1g1correct.png');
    this.load.image('b1g1-heart', 'img/block1/game1/b1g1heart.png');
    
    // load sounds
    this.load.audio('b1g1-intro', ['sound/block1/game1/mp3/b1g1intro.mp3', 'sound/block1/game1/ogg/b1g1intro.ogg']);
    this.load.audio('b1g1-incorrect', ['sound/block1/game1/mp3/b1g1incorrect.mp3', 'sound/block1/game1/ogg/b1g1incorrect.ogg']);
    this.load.audio('b1g1-next_level', ['sound/block1/game1/mp3/b1g1next_level.mp3', 'sound/block1/game1/ogg/b1g1next_level.ogg']);
    this.load.audio('b1g1-game_over', ['sound/block1/game1/mp3/b1g1game_over.mp3', 'sound/block1/game1/ogg/b1g1game_over.ogg']);
    this.load.audio('b1g1-game_win', ['sound/block1/game1/mp3/b1g1game_win.mp3', 'sound/block1/game1/ogg/b1g1game_win.ogg']);
    this.load.audio('b1g1-game_finale', ['sound/block1/game1/mp3/b1g1game_end.mp3', 'sound/block1/game1/ogg/b1g1game_finale.ogg']);

    /**************************************
    * Block 1 Game 2
    ***************************************/
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
    this.load.image('b1g2-menu', 'img/block1/game2/b1g2menu.png');
    this.load.image('b1g2-correct', 'img/block1/game2/b1g2correct.png');
    this.load.image('b1g2-heart', 'img/block1/game2/b1g2heart.png');

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
    this.load.image('background', 'img/background.png?2');
    this.load.image('sea-bg', 'img/block2/game1/sea-bg.png?2');
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


    /**************************************
    * Block 2 Game 2
    ***************************************/
    // Sounds
    this.load.audio('correct','img/commons/correct.mp3');
    this.load.audio('incorrect','img/commons/incorrect.mp3');
    this.load.audio('bubble','img/commons/bubble.mp3');
    this.load.audio('loop','img/commons/loop.mp3');
    
    // Images
    this.load.image('welcome-male-tux-brush', 'img/block2/game2/male-tux-brush.png?v=1');
    this.load.image('sea-bg-2',   'img/block2/game2/fondo3.png?v=3');
    this.load.image('fish_body',  'img/block2/game2/fish_body.png?v=2');
    this.load.image('square_blue','img/block2/game2/square_blue.png?v=2');
    this.load.image('square_green','img/block2/game2/square_green.png?v=2');
    this.load.image('square_orange','img/block2/game2/square_orange.png?v=2');
    this.load.image('square_pistache','img/block2/game2/square_pistache.png?v=2');
    this.load.image('square_purple','img/block2/game2/square_purple.png?v=3');
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
    this.load.image('square_pink_12','img/block2/game2/square_pink_12.png?v=3');
    this.load.image('square_purple_12','img/block2/game2/square_purple_12.png?v=3');
    this.load.image('square_red_12','img/block2/game2/square_red_12.png?v=2');
    this.load.image('square_yellow_12','img/block2/game2/square_yellow_12.png?v=2');

    // 1 / 4
    this.load.image('square_white_14','img/block2/game2/square_white_1_4.png?v=2');
    this.load.image('square_green_14','img/block2/game2/square_green_1_4.png?v=2');
    this.load.image('square_orange_14','img/block2/game2/square_orange_1_4.png?v=2');
    this.load.image('square_pink_14','img/block2/game2/square_pink_1_4.png?v=3');
    this.load.image('square_purple_14','img/block2/game2/square_purple_1_4.png?v=3');
    this.load.image('square_red_14','img/block2/game2/square_red_1_4.png?v=2');
    this.load.image('square_yellow_14','img/block2/game2/square_yellow_1_4.png?v=2');

    // 1 / 6
    this.load.image('square_white_16','img/block2/game2/square_white_1_6.png?v=2');
    this.load.image('square_green_16','img/block2/game2/square_green_1_6.png?v=2');
    this.load.image('square_orange_16','img/block2/game2/square_orange_1_6.png?v=2');
    this.load.image('square_pink_16','img/block2/game2/square_pink_1_6.png?v=3');
    this.load.image('square_purple_16','img/block2/game2/square_purple_1_6.png?v=3');
    this.load.image('square_red_16','img/block2/game2/square_red_1_6.png?v=2');
    this.load.image('square_yellow_16','img/block2/game2/square_yellow_1_6.png?v=2');

    // 1 / 8
    this.load.image('square_white_18','img/block2/game2/square_white_1_8.png?v=3');
    this.load.image('square_green_18','img/block2/game2/square_green_1_8.png?v=4');
    this.load.image('square_orange_18','img/block2/game2/square_orange_1_8.png?v=3');
    this.load.image('square_pink_18','img/block2/game2/square_pink_1_8.png?v=4');
    this.load.image('square_purple_18','img/block2/game2/square_purple_1_8.png?v=4');
    this.load.image('square_red_18','img/block2/game2/square_red_1_8.png?v=3');
    this.load.image('square_yellow_18','img/block2/game2/square_yellow_1_8.png?v=3');

    this.load.image('block2-game2-next','img/block2/game2/next.png?v=2');
    // Block 2 game 3
    this.load.image('sea-bg-3',   'img/block2/game3/fondo3.png?v=2');
    this.load.image('fish-body-2',  'img/block2/game3/fish_body2.jpg?v=2');
    this.load.image('b2g3-welcome',  'img/block2/game3/welcome-2.png?v=2');

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

    /**************************************
    * Block 3 Game 3
    ***************************************/
    /***************************************
    * Panel and background
    ****************************************/
    this.load.image("info-panel-b3g3", "img/block3/game3/panel/infoPanel.jpg");
    this.load.image('progress-panel-b3g3', 'img/block3/game3/panel/progressPanel.jpg');
    this.load.spritesheet('button-ok', 'img/block3/game3/panel/button-ok.png', 200, 100);
    this.load.image("bg-b3g3", "img/block3/game3/bg.jpg");
    this.load.image("balance-b3", "img/block3/game3/balance.png");
    this.load.image("you-fail-b3g3", "img/block3/game3/sad-penguin-fail-b3.png");
    this.load.script('filterX', 'https://cdn.rawgit.com/photonstorm/phaser/master/filters/BlurX.js');
    this.load.script('filterY', 'https://cdn.rawgit.com/photonstorm/phaser/master/filters/BlurY.js');
    this.load.image('backgroundMenu-b3g3', 'img/block3/game3/menu/bg.png');

    /***************************************
    * Items
    ****************************************/
    this.load.image("2-bananas-b3", "img/block3/game3/items/2bananas.png");
    this.load.image("1-telescope-b3", "img/block3/game3/items/1telescope.png");
    this.load.image("5-coconuts-b3", "img/block3/game3/items/5coconuts.png");
    this.load.image("1-bottle-b3", "img/block3/game3/items/11bottle.png");
    this.load.image("5-coins-b3", "img/block3/game3/items/5coins.png");
    this.load.image("3-coins-b3", "img/block3/game3/items/3coins.png");
    this.load.image("3-coconuts-b3", "img/block3/game3/items/3coconuts.png");
    this.load.image("2-coins-b3", "img/block3/game3/items/2coins.png");
    this.load.image("3-bottles-b3", "img/block3/game3/items/3bottles.png");
    this.load.image("2-telescopes-b3", "img/block3/game3/items/2telescopes.png");
    this.load.image("5-bananas-b3", "img/block3/game3/items/5bananas.png");
    this.load.image("5-coconuts-b3", "img/block3/game3/items/5coconuts.png");

    this.load.image("300gr-b3", "img/block3/game3/items/weight-300gr.png");
    this.load.image("4kg-b3", "img/block3/game3/items/weight-4kg.png");
    this.load.image("0.5kg-b3", "img/block3/game3/items/weight-0.5kg.png");
    this.load.image("8000gr-b3", "img/block3/game3/items/weight-8000gr.png");
    this.load.image("2gr-b3", "img/block3/game3/items/weight-2gr.png");
    this.load.image("2500mg-b3", "img/block3/game3/items/weight-2500mg.png");

    this.load.image("weight-lv7-b3", "img/block3/game3/items/2kgy150gr.png");
    this.load.image("weight-lv8-b3", "img/block3/game3/items/2500mgy3gr.png");
    this.load.image("weight-lv9-b3", "img/block3/game3/items/2500gry3kg.png");
    this.load.image("weight-lv10-b3", "img/block3/game3/items/0.2kgy500gry0.3kg.png");
    this.load.image("weight-lv11-b3", "img/block3/game3/items/2000gry2.4kgy250gr.png");
    this.load.image("weight-lv12-b3", "img/block3/game3/items/0.2kgy2.5kgy1000gr.png");

  },
  create: function(){
    // start the MainMenu state
    TuxGame.MAIN_LOOP_SONG = this.add.audio('loop');
    TuxGame.G1B1_LOOP = this.add.audio('g1b1-loop');
    TuxGame.G2B1_LOOP = this.add.audio('g2b1-loop');
    TuxGame.G1B2_LOOP = this.add.audio('g1b2-loop');
    TuxGame.G2B2_LOOP = this.add.audio('g2b2-loop');
    TuxGame.G1B3_LOOP = this.add.audio('g1b3-loop');
    TuxGame.G2B3_LOOP = this.add.audio('g2b3-loop');

    this.state.start('Welcome');
  }
};
