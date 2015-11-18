CommonInitializer = function(){

};

CommonInitializer.prototype = {
  init : function (context) {
    context.fishesKeys = ['fish4','fish5','fish6','fish7','fish9'];
    context.fishesColors = {
      'fish4': 'naranja',
      'fish5': 'rojo',
      'fish6': 'verde',
      'fish7': 'morado',
      'fish9': 'azul',
    };
    // start the physics engine
    context.physics.startSystem(Phaser.Physics.ARCADE);
    // display background
    context.add.sprite(0, 0, 'sea-bg');
    context._fontStyle = { font: "40px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };
    context._fontStyle2 = { font: "30px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };

    // Level Info
    context.wrongsText = context.gameEngine.displayLevelInfo(context);

    // Displaying Numbers
    context.numberSprites = context.gameEngine.displayNumbers(context);
    
    // Display fishes
    context.fishSprites = context.gameEngine.displayFishes(context);

    // Getting Random Number to Choice
    context.numberToChoice = context.gameEngine.getRandomNumberToChoice();
    context.numberToChoiceSprite = numberSprites[context.numberToChoice];

    // Getting Random Fish to choice
    context.fishToChoiceSprite = fishSprites[Math.floor(Math.random()*fishSprites.length)];
    context.fishToChoice = context.fishesColors[context.fishToChoiceSprite.key];

    // Display Instructions
    context.instructionText = context.add.text(100, 320, "Arrastra el pez de color "+ context.fishToChoice +"\nal número " + context.numberToChoice, context._fontStyle);
    context.gameEngine.addDragEvents(context);
  }

};