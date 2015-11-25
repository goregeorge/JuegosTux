window.onload = function() {
	var input = document.getElementById("input");
};

var correct = 0;
var fails = 0;

var happyFace = null;
var sadFace = null;

TuxGame.Block3Game3_Q1 = function(game){
	// define needed variables for Candy.Game
	this._background = null;
	this._tuxAvatar = null;
	this._buttonOk = null;
};

TuxGame.Block3Game3_Q1.prototype = {
	create : function(){
		input.setAttribute("type", "number");
		//Background
		this._background = this.add.sprite(0, 0, 'bg-b3g3');

		//Button Home
		this.add.button(0, 0, 'button-home', this.backToHome, this, 1, 0, 2);
		this.add.text(2, 75, 'menú', { fill: '#fff', font: "30px Arial", stroke: "#000", strokeThickness: 5 });

		this.add.sprite(0, 500, 'info-panel');
		this.add.sprite(640, 0, 'status-panel');

		//Items
		//this.add.sprite(205, 180, 'banana-5').scale.setTo(0.08);
		this.add.sprite(225, 170, '6-coins').scale.setTo(0.08);
		this.add.sprite(455, 170, 'weight-100gr').scale.setTo(0.05);

		//Button Ok
		this._buttonOk = this.add.button(580, 510, 'button-ok', this.validateResponse, this, 1, 0, 2);
		this._buttonOk.scale.setTo(.7, .7);
		this.add.button(10, 515, 'button-previous', this.backToHome, this, 1, 0 , 2);
		this.add.button(70, 515, 'button-next', this.goToNextLevel, this, 1, 0 , 2);

		this.add.sprite(TuxGame.GAME_WIDTH-130, TuxGame.GAME_HEIGHT-95, 'tux');

		this.add.text(150, TuxGame.GAME_HEIGHT-(82.5), 
			'A cuantos gramos equivalen \n20 kilogramos de cocos? \n', 
			{ fill: '#fff', font:"20px Verdana", stroke: "#000", strokeThickness: 3});

		this.add.text(TuxGame.GAME_WIDTH-125, 50, 'Nivel: 1', { fill: 'white' });
		this.add.text(TuxGame.GAME_WIDTH-150, 15, 'Aciertos: ' + status, 
			{ fill: '#fff', font: '25px Verdana', stroke: "#000", strokeThickness: 3  });

	},

	backToHome : function(){
		this.state.start('MenuB3G3');
	},

	validateResponse : function(){
		var element = document.getElementById("input");
		alert(element.value);
		/*
		if (element.value > 0) {
			console.log(element.value);
		}else{
			alert("No has escrito nada :v");
		}
		*/
	},

	/*
	* Function to back to home
	*/
	backToHome: function(){
		this.state.start("MenuB3G3");
	},

	/*
	* Redirect to next level
	*/
	goToNextLevel: function(){
		this.state.start("Block3Game2_Q2");
	}
}