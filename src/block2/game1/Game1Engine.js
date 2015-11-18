Game1Engine = function(strategies, levelName, nextLevelName, name){
  this.strategy = LevelFactory.create(strategies);
  this.nextLevelName = nextLevelName;
  this.levelName = levelName;
  this.name = name;
  this.numberGenerator = new RandomNumberGenerator();
};

Game1Engine.update = function () {
    this.minutes = Math.floor(this.game.time.events.duration / 60000) % 60;
    this.seconds = Math.floor(this.game.time.events.duration / 1000) % 60;
    this.milliseconds = Math.floor(this.game.time.events.duration) % 100;
    //If any of the digits becomes a single digit number, pad it with a zero
    if (this.milliseconds < 10)
        this.milliseconds = '0' + this.milliseconds;
 
    if (this.seconds < 10)
        this.seconds = '0' + this.seconds;
 
    if (this.minutes < 10)
        this.minutes = '0' + this.minutes;
 
    this.timer.setText(this.seconds + " segundos");
};

Game1Engine.timeOver = function () {
  wrong = this.add.sprite(300, 100, 'wrong');
  TuxGame._incorrect += 1;
  that = this;
  setTimeout(function () {
    console.log(that.gameEngine.levelName);
    that.state.start(that.gameEngine.levelName);
  }, 1200);
};

Game1Engine.prototype = {
  init: function (context) {
    this.strategy.init(context);
  },
  displayNumbers : function  (context) {
    return this.strategy.displayNumbers(context);
  },
  displayFishes: function (context) {
    return this.strategy.displayFishes(context);
  },

  displayLevelInfo: function (context) {
    return this.strategy.displayLevelInfo(context, this.name);
  },
  getRandomNumberToChoice: function (context) {
    return this.strategy.getRandomNumberToChoice(context);
  },
  stopDragIncorrect: function (context,currentSprite) {
    var isOverlapped = false;
    for (var i = 0; i < numberSprites.length; i++) {
      isOverlapped = this.checkOverlap(currentSprite, numberSprites[i]);
      if (isOverlapped) {
        TuxGame._incorrect += 1;
        wrongsText.setText(TuxGame._incorrect);
        wrong = context.add.sprite(300, 100, 'wrong');
        setTimeout(function () {
          wrong.destroy(true);
        }, 1200);
        break;
      }
    }
    currentSprite.position.copyFrom(currentSprite.originalPosition);
  },
  stopDrag: function (context, currentSprite, endSprite) {
        // Check if is the correct sprite
    isOverlapped = this.checkOverlap(currentSprite, endSprite);
    if (isOverlapped) {
      currentSprite.position.x = endSprite.position.x - 30;
      context.add.sprite(300, 100, 'happy');
      var that   = context;
      var engine = this;
      TuxGame._correct += 1;
      setTimeout(function () {
        console.log(engine.nextLevelName);
        that.state.start(engine.nextLevelName);
      }, 1200);
      return;
    }

    var isOverlapped = false;
    for ( i = 0; i < numberSprites.length; i++) {
      isOverlapped = this.checkOverlap(currentSprite, numberSprites[i]);
      if (isOverlapped) {
        TuxGame._incorrect += 1;
        wrongsText.setText(TuxGame._incorrect);
        wrong = context.add.sprite(300, 100, 'wrong');
        setTimeout(function () {
          wrong.destroy(true);
        }, 1200);
        break;
      }
    }
    currentSprite.position.copyFrom(currentSprite.originalPosition);
  },
  checkOverlap: function(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);

  },
  addDragEvents: function (context) {
    for (var i = 0; i < context.fishSprites.length; i++){
      if (context.fishSprites[i] !== context.fishToChoiceSprite) {
        context.fishSprites[i].events.onDragStop.add(function(currentSprite){
          context.gameEngine.stopDragIncorrect(context, currentSprite);
        },context);
      }
    }

    // Add onDragStopEvents for correct Fish
    context.fishToChoiceSprite.events.onDragStop.add(function(currentSprite){
      context.gameEngine.stopDrag(context, currentSprite, context.numberToChoiceSprite);
    },context);
  },
  timeOver: function (context) {
    wrong = context.add.sprite(300, 100, 'wrong');
    TuxGame._incorrect += 1;
    var that   = context;
    var engine = this;
    setTimeout(function () {
      that.state.start(engine.levelName);
    }, 1200);
  }
};