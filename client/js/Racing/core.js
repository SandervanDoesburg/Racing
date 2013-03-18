var Racing = new Class({
	
	initialize : function() {
		this.screen_width = window.innerWidth;
		this.screen_height = window.innerHeight;
	},
	
	start : function() {
		this.director = new CAAT.Foundation.Director().initialize(this.screen_width, this.screen_height, 'game-portal');
		this.world = new World(this.director);
	}
});