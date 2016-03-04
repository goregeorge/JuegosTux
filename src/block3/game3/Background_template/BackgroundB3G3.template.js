BackgroundB3G3 = function(){
	this.buttonOk = null;
	this.panelStatus = null;
	this.panelInfo = null;
	this.bg = null;
	this.balance = null;
	this.textCorrects = null;
	this.textFails = null;
	this.imageCorrects = null;
	this.imageFails = null;
	this.buttonHome = null;
	this.textQuestion = null;
	this.tuxAvatar = null;
	this.item1 = null;
	this.item2 = null;
	this.round = null;
	//this.arrow = null;
	this.textMenuHome = null;
};

BackgroundB3G3.prototype = {
	displayBackground : function(context){
		this.bg = context.add.sprite(0, 0, 'bg-b3g3');
		this.balance = context.add.sprite(190, 220, 'balance-b3');
		this.balance.scale.setTo(0.6, 0.6);
	},

	displayBackgroundBlur : function(context, avatar){
		var blurX = context.add.filter('BlurX');
		var blurY = context.add.filter('BlurY');
		
		context.add.sprite(180, 100, "you-fail-b3g3").scale.setTo(0.6, 0.6);
		context.add.text(180, 500, 'Perdiste tus vidas', 
			{ fill: '#fff', font: "55px Arial", stroke: "#000", strokeThickness: 5 });
		input.setAttribute("type", "hidden");

		this.panelInfo.filters = [blurX, blurY];
		this.panelStatus.filters = [blurX, blurY];
		this.bg.filters = [blurX, blurY];
		this.buttonOk.filters = [blurX, blurY];
		this.balance.filters = [blurX, blurY];
		this.imageCorrects.filters = [blurX, blurY];
		this.textCorrects.filters = [blurX, blurY];
		this.imageFails.filters = [blurX, blurY];
		this.textFails.filters = [blurX, blurY];
		this.buttonHome.filters = [blurX, blurY];
		this.textQuestion.filters = [blurX, blurY];
		this.tuxAvatar.filters = [blurX, blurY];
		this.round.filters = [blurX, blurY];
		//this.arrow.filters = [blurX, blurY];
		this.textMenuHome.filters = [blurX, blurY];
		avatar.filters = [blurX, blurY];
		this.item1.destroy();
		this.item2.destroy();
	},

	displayButtonHome : function(context){
		this.buttonHome = context.add.button(0, 0, 'button-home', context.backToHome, context, 1, 0, 2);
		this.textMenuHome = context.add.text(2, 75, 'menú', { fill: '#fff', font: "30px Arial", stroke: "#000", strokeThickness: 8 });
	},

	displayPanelStatus : function(context, round){
		this.panelStatus = context.add.sprite(640, 0, 'progress-panel-b3g3');
		this.round = context.add.text(TuxGame.GAME_WIDTH-125, 15, "Nivel " + round, { fill: 'white' });

		this.imageFails = context.add.sprite(TuxGame.GAME_WIDTH-110, 90, "heart");
		if ( level2_3fail ) {
			this.textFails = context.add.text(TuxGame.GAME_WIDTH-65, 90, 4-failsB3G3, 
			{ fill: '#fff', font: '25px Verdana', stroke: "#000", strokeThickness: 2  });	
		}else{
			this.textFails = context.add.text(TuxGame.GAME_WIDTH-65, 90, 3-failsB3G3, 
			{ fill: '#fff', font: '25px Verdana', stroke: "#000", strokeThickness: 2  });
		}

		this.imageCorrects = context.add.sprite(TuxGame.GAME_WIDTH-110, 50, "correct-b3g2");
		this.imageCorrects.scale.setTo(0.5,0.5);
		this.textCorrects = context.add.text(TuxGame.GAME_WIDTH-65, 50, correctsB3G3, 
			{ fill: '#fff', font: '25px Verdana', stroke: "#000", strokeThickness: 2  });
	},

	displayPanelStatusLevel2 : function(context, round){
		this.panelStatus = context.add.sprite(640, 0, 'progress-panel-b3g3');
		this.round = context.add.text(TuxGame.GAME_WIDTH-125, 15, "Nivel " + round, { fill: 'white' });

		this.imageFails = context.add.sprite(TuxGame.GAME_WIDTH-110, 90, "heart");
		this.textFails = context.add.text(TuxGame.GAME_WIDTH-65, 90, 4-failsB3G3, 
			{ fill: '#fff', font: '25px Verdana', stroke: "#000", strokeThickness: 2  });

		this.imageCorrects = context.add.sprite(TuxGame.GAME_WIDTH-110, 50, "correct-b3g2");
		this.imageCorrects.scale.setTo(0.5,0.5);
		this.textCorrects = context.add.text(TuxGame.GAME_WIDTH-65, 50, correctsB3G3, 
			{ fill: '#fff', font: '25px Verdana', stroke: "#000", strokeThickness: 2  });
	},

	displayPanelQuestion : function(context, question){
		this.panelInfo = context.add.sprite(0, 460, 'info-panel-b3g3');
		this.buttonOk = context.add.button(580, TuxGame.GAME_HEIGHT-118, 'button-ok', context.validateResponse, context, 1, 0, 2).scale.setTo(0.9,0.9);

		//this.arrow = context.add.button(TuxGame.GAME_WIDTH-110, TuxGame.GAME_HEIGHT-105, 'button-next-b3g2', context.goToNextLevel, context, 1, 0 , 2);

		this.tuxAvatar = context.add.sprite(30, 480, 'tux');
		this.tuxAvatar.scale.setTo(1.1, 1.1);
		this.textQuestion = context.add.text(150, TuxGame.GAME_HEIGHT-(114), question,
			{ fill: '#fff', font:"28px Verdana", stroke: "#000", strokeThickness: 3});
	},

	displayItmesOnBalance : function(context, item1, item2, value_axisY){
		var axisY = value_axisY || 170;
		this.item1 = context.add.sprite(205, 185, item1);
		this.item2 = context.add.sprite(435, axisY, item2);
	},

}