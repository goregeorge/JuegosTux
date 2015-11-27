var TuxGame = {};
TuxGame.Boot = function(game){};
TuxGame.Boot.prototype = {
	preload: function(){
		// preload the loading indicator first before anything else
		this.load.image('preloaderBar', 'img/loading-bar.png');
	},
	create: function(){
		this.input.maxPointers = 1;
		this.state.start('Preloader');
	}
};