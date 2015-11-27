var status = 0;
var fails = 0;

var happyFace = null;
var sadFace = null;

TuxGame.Block3Game2_Q1 = function(game){
	// define needed variables for Candy.Game
	this._background = null;
	this._boat1 = null;
	this._boat2 = null;
	this._boat3 = null;
	this._home = null;
	this._question = null;
	this._questionOption = null;
	this._tuxAvatar = null;
	this._audio = null;

	//Array of every boat of this question
	this._boats = [
		['b-t-3/4', 'b-t-3/9', 'b-t-1/3'],
		['b-c-3/6', 'b-c-2/3', 'b-c-5/6'],
		['b-s-3/8', 'b-s-1/4', 'b-s-2/8']
	];

	//Array with the function of win or fail
	this._correctBoat = [
		[this.youWin, this.youFail, this.youFail],
		[this.youWin, this.youFail, this.youFail],
		[this.youFail, this.youWin, this.youFail]
	];

	this._audios = ['q1o1', 'q1o2', 'q1o3'];
	this._audio = null;

	this._questions = ['3/4', '3/6', '1/4'];
};

TuxGame.Block3Game2_Q1.prototype = {
	create: function(){
		//Background
		this._background = this.add.sprite(0, 0, 'bg-b3g2');

		//Button Home
		this.add.button(0, 0, 'button-home', this.backToHome, this, 1, 0, 2);
		this.add.text(2, 75, 'menú', { fill: '#fff', font: "30px Arial", stroke: "#000", strokeThickness: 5 });

		//panels
		this._infoPanel = this.add.sprite(0, 460, 'infoPanel');
		this._progressPanel = this.add.sprite(640, 0, 'progressPanel');
		

		this.getRandomOption();
		
		console.log(150, 240, this._boats[this._questionOption-1][0]);
		console.log(150, 240, this._boats[this._questionOption-1][1]);
		console.log(150, 240, this._boats[this._questionOption-1][2]);

		this._boat1 = this.add.button(100, 240, this._boats[this._questionOption-1][0],
			this._correctBoat[this._questionOption-1][0], this, 1, 0, 2);
		this._boat2 = this.add.button(300, 240, this._boats[this._questionOption-1][1],
			this._correctBoat[this._questionOption-1][1], this, 1, 0, 2);
		this._boat3 = this.add.button(500, 240, this._boats[this._questionOption-1][2],
			this._correctBoat[this._questionOption-1][2], this, 1, 0, 2);
		
		/*
		* Buton to previous and next level
		*/
		this.add.button(TuxGame.GAME_WIDTH-110, TuxGame.GAME_HEIGHT-105, 'button-next-b3g2', this.goToNextLevel, this, 1, 0 , 2);

		this._boat1.inputEnabled = true;
		this._boat2.inputEnabled = true;
		this._boat3.inputEnabled = true;
		
		this._question = this.add.text(150, TuxGame.GAME_HEIGHT-(95), 
			'Elige el barco cuya bandera representa \n' + this._questions[this._questionOption-1], 
			{ fill: '#000', font:"25px Verdana", stroke: "#fff", strokeThickness: 3  });

		/*
		* The status panel
		*/
		this.add.text(TuxGame.GAME_WIDTH-125, 15, 'Nivel: 1', { fill: '#0101DF' });
		this.add.sprite(TuxGame.GAME_WIDTH-110, 50, "correct-b3g2").scale.setTo(0.5,0.5);
		this.add.text(TuxGame.GAME_WIDTH-65, 50, status, 
			{ fill: '#0101DF', font: '25px Verdana', stroke: "#fff", strokeThickness: 2  });
		//Heart
		this.add.sprite(TuxGame.GAME_WIDTH-110, 90, "heart");
		this.add.text(TuxGame.GAME_WIDTH-65, 90, 3-fails, 
			{ fill: '#0101DF', font: '25px Verdana', stroke: "#fff", strokeThickness: 2  });

		this._tuxAvatar = this.add.sprite(30, 480, 'tux').scale.setTo(1.1,1.1);
		
		this._audio = this.add.audio(this._audios[this._questionOption-1]);
		this._audio.play();
		

		/*
		this._boat1.events.onInputDown.add(this._correctBoat[this._questionOption-1][0], this);
		this._boat2.events.onInputDown.add(this._correctBoat[this._questionOption-1][1], this);
		this._boat3.events.onInputDown.add(this._correctBoat[this._questionOption-1][2], this);
		*/
		
	},

	/*
	* Function to calculate a random number, this number will be the option to show
	*/
	getRandomOption: function(){
		this._questionOption = Math.floor((Math.random() * 3) + 1);
		console.log(this._questionOption);
	},

	/*
	* Function that show a sad face if you choose the boat incorrect
	*/
	youFail: function(){
		//sadFace = this.add.sprite((TuxGame.GAME_WIDTH/2)-170, (TuxGame.GAME_HEIGHT/2)-210, 'sadFace');
		sadFace = this.add.sprite(40, TuxGame.GAME_HEIGHT-220, 'sad-penguin');
		fails++;
		console.log("Total fails: " + fails);
		var that = this;
		this._audio.stop();
		setTimeout(function(){ 
			sadFace.destroy();
			if (fails > 2) {
				status = 0;
				fails = 0;
				console.log("RESTART!! Status: " + status + ", Fails: " + fails);
				that.state.start("Block3Game2_Q1");
			}else{
				that.state.start("Block3Game2_Q1");
			}
		}, 2000);
	},

	/*
	* Function that show a happy face if you choose the boat correct
	*/
	youWin: function(){
		//happyFace = this.add.sprite((TuxGame.GAME_WIDTH/2)-170, (TuxGame.GAME_HEIGHT/2)-210, 'happyFace');
		happyFace = this.add.sprite(40, TuxGame.GAME_HEIGHT-220, 'happy-penguin');
		status++;
		console.log("Status: " + status + "/8");
		var that = this;
		this._audio.stop();
		setTimeout(function(){ 
			happyFace.destroy();
			that.state.start("Block3Game2_Q2");
		}, 2000);
	},

	/*
	* Function to back to home
	*/
	backToHome: function(){
		this.state.start("MenuB3G2");
		fails = 0;
		this._audio.stop();
	},

	/*
	* Redirect to next level
	*/
	goToNextLevel: function(){
		this.state.start("Block3Game2_Q2");
		this._audio.stop();
	}
}
