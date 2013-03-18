var Car_base = new Class({

	initialize: function() {
		this.x = 0; // Pixels
		this.y = 0; // Pixels
		this.rotation = 0; // Radians
	},
	
	base: function(base) {
		this.base = base;
	},
	
	wheels: function(wheels) {
		this.wheels = wheels;
	}
});