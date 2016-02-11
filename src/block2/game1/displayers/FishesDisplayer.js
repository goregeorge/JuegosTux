FishesDisplayer = function(){

};

FishesDisplayer.prototype = {
  displayFishes : function (context) {
    fishes     =  this.getRandomFishes(3, context);

    fishLeft   =  context.add.sprite(140, 200, fishes[0]);
    fishCenter =  context.add.sprite(340, 200, fishes[1]);
    fishRight  =  context.add.sprite(540, 200, fishes[2]);

    fishLeft.scale.setTo(0.25, 0.25);
    fishCenter.scale.setTo(0.25, 0.25);
    fishRight.scale.setTo(0.25, 0.25);

    context.physics.arcade.enable(fishLeft);
    context.physics.arcade.enable(fishCenter);
    context.physics.arcade.enable(fishRight);

    fishLeft.originalPosition = fishLeft.position.clone();
    fishCenter.originalPosition = fishCenter.position.clone();
    fishRight.originalPosition = fishRight.position.clone();

    fishLeft.inputEnabled = true;
    fishLeft.input.enableDrag(true);
    fishCenter.inputEnabled = true;
    fishCenter.input.enableDrag(true);
    fishRight.inputEnabled = true;
    fishRight.input.enableDrag(true);

    fishSprites = [
      fishLeft,
      fishCenter,
      fishRight
    ];

    return fishSprites;
  },
  getRandomFishes: function (numberOfFishes, context) {
    var selectedIndexes = [];
    var randomFishes = [];
    var i = 0;
    while (i < numberOfFishes) {
      randomNumber = Math.floor(Math.random()*context.fishesKeys.length);
      if (!this.existsInArray(selectedIndexes, randomNumber)) {
        fishKey = context.fishesKeys[randomNumber];
        selectedIndexes.push(randomNumber);
        randomFishes[i] = fishKey;
        i++;
      }
    }
    return randomFishes;
  },
  existsInArray: function (array, element) {
    var exists = false;
    var arrayLength = array.length;
    for (var i = 0; i < arrayLength; i++) {
      if (array.indexOf(element) > -1) {
        exists = true;
      }
    }
    return exists;
  },

};