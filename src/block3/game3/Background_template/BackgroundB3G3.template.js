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

	displayPanelStatus : function(gameContext){
		gameContext.add.sprite(640, 0, 'status-panel');
		gameContext.add.text(TuxGame.GAME_WIDTH-125, 50, 'Nivel: 1', { fill: 'white' });
		gameContext.add.text(TuxGame.GAME_WIDTH-150, 15, 'Aciertos: ' + status, 
			{ fill: '#fff', font: '25px Verdana', stroke: "#000", strokeThickness: 3  });
	},

	displayPanelQuestion : function(gameContext){
		gameContext.add.sprite(0, 500, 'info-panel');

		//Button Ok
		this._buttonOk = gameContext.add.button(570, 510, 'button-ok', gameContext.validateResponse, gameContext, 1, 0, 2);
		this._buttonOk.scale.setTo(.7, .7);
		gameContext.add.button(70, 515, 'button-next', gameContext.goToNextLevel, gameContext, 1, 0 , 2);

		gameContext.add.sprite(TuxGame.GAME_WIDTH-130, TuxGame.GAME_HEIGHT-95, 'tux');
		gameContext.add.text(150, TuxGame.GAME_HEIGHT-(82.5), 
			'A cuantos gramos equivalen \n20 kilogramos de cocos? \n', 
			{ fill: '#fff', font:"20px Verdana", stroke: "#000", strokeThickness: 3});
	}

}