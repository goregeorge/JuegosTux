BackgroundB3G3 = function(){
	this._buttonOk = null;
};

BackgroundB3G3.prototype = {
	displayBackground : function(context){
		context.add.sprite(0, 0, 'bg-b3g3');
	},

	displayButtonHome : function(context){
		context.add.button(0, 0, 'button-home', context.backToHome, context, 1, 0, 2);
		context.add.text(2, 75, 'menú', { fill: '#fff', font: "30px Arial", stroke: "#000", strokeThickness: 5 });
	},

	displayPanelStatus : function(context, round){
		context.add.sprite(640, 0, 'progress-panel-b3g3');
		context.add.text(TuxGame.GAME_WIDTH-125, 15, "Ronda " + round, { fill: 'white' });

		context.add.sprite(TuxGame.GAME_WIDTH-110, 90, "heart");
		context.add.text(TuxGame.GAME_WIDTH-65, 90, 3-failsB3G3, 
			{ fill: '#fff', font: '25px Verdana', stroke: "#000", strokeThickness: 2  });

		context.add.sprite(TuxGame.GAME_WIDTH-110, 50, "correct-b3g2").scale.setTo(0.5,0.5);
		context.add.text(TuxGame.GAME_WIDTH-65, 50, correctsB3G3, 
			{ fill: '#fff', font: '25px Verdana', stroke: "#000", strokeThickness: 2  });
	},

	displayPanelQuestion : function(context, question){
		context.add.sprite(0, 460, 'info-panel-b3g3');

		context.add.button(TuxGame.GAME_WIDTH-110, TuxGame.GAME_HEIGHT-105, 'button-next-b3g2', context.goToNextLevel, context, 1, 0 , 2);

		context.add.sprite(30, 480, 'tux').scale.setTo(1.1, 1.1);
		context.add.text(150, TuxGame.GAME_HEIGHT-(95), question,
			{ fill: '#fff', font:"20px Verdana", stroke: "#000", strokeThickness: 3});
	},

	displayItmesOnBalance : function(context, item1, item2){
		context.add.sprite(205, 185, item1);
		context.add.sprite(435, 170.1, item2);
	}

}