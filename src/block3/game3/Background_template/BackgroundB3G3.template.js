BackgroundB3G3 = function(){
	this._buttonOk = null;
};

BackgroundB3G3.prototype = {
	displayBackground : function(gameContext){
		gameContext.add.sprite(0, 0, 'bg-b3g3');
	},

	displayButtonHome : function(gameContext){
		gameContext.add.button(0, 0, 'button-home', gameContext.backToHome, gameContext, 1, 0, 2);
		gameContext.add.text(2, 75, 'menú', { fill: '#fff', font: "30px Arial", stroke: "#000", strokeThickness: 5 });
	},

	displayPanelStatus : function(gameContext, level){
		gameContext.add.sprite(640, 0, 'progress-panel');
		gameContext.add.text(TuxGame.GAME_WIDTH-125, 15, level, { fill: 'white' });

		gameContext.add.sprite(TuxGame.GAME_WIDTH-110, 90, "heart");
		gameContext.add.text(TuxGame.GAME_WIDTH-65, 90, 3-failsB3G3, 
			{ fill: '#fff', font: '25px Verdana', stroke: "#000", strokeThickness: 2  });

		gameContext.add.sprite(TuxGame.GAME_WIDTH-110, 50, "correct-b3g2").scale.setTo(0.5,0.5);
		gameContext.add.text(TuxGame.GAME_WIDTH-65, 50, correctsB3G3, 
			{ fill: '#fff', font: '25px Verdana', stroke: "#000", strokeThickness: 2  });
	},

	displayPanelQuestion : function(gameContext, question){
		gameContext.add.sprite(0, 460, 'info-panel');

		//Button Ok
		this._buttonOk = gameContext.add.button(590, TuxGame.GAME_HEIGHT-105, 'button-ok', gameContext.validateResponse, gameContext, 1, 0, 2);
		this._buttonOk.scale.setTo(.7, .7);
		gameContext.add.button(TuxGame.GAME_WIDTH-110, TuxGame.GAME_HEIGHT-105, 'button-next', gameContext.goToNextLevel, gameContext, 1, 0 , 2);

		gameContext.add.sprite(30, 480, 'tux').scale.setTo(1.1, 1.1);
		gameContext.add.text(150, TuxGame.GAME_HEIGHT-(95), question,
			{ fill: '#fff', font:"20px Verdana", stroke: "#000", strokeThickness: 3});
	},

	displayItmesOnBalance : function(gameContext, item1, item2){
		gameContext.add.sprite(200, 180, item1).scale.setTo(0.2, 0.2);
		gameContext.add.sprite(420, 180, item2).scale.setTo(0.2, 0.2);
	}

}