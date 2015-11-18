Game1Commons = function(strategy){
 this.strategy = strategy;
};

Game1Commons.prototype = {
  displayNumbers : function  (context) {
    return this.strategy.displayNumbers(context);
  },

  displayFishes: function (context) {
    return this.strategy.displayFishes(context);
  },

  displayLevelInfo: function (context) {
    return this.strategy.displayLevelInfo(context);
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
      var that = context;
      TuxGame._correct += 1;
      setTimeout(function () {
        that.state.start('Block2Game1L2');
      }, 1200);
      return;
    }

    var isOverlapped = false;
    for ( i = 0; i < numberSprites.length; i++) {
      console.log(endSprite.key);
      console.log(numberSprites[i].key);
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


};