var World = new Class({
	gravity: 9.81,
	world: null,
	scene: null,
	
	dx: 0,
	dy: -512,
	
	initialize : function(director) {
		
	
		this.scene = director.createScene();
		this.create_world(director);
		
	},
	
	create_world : function(director) {
		var gravity = new Box2D.Common.Math.b2Vec2(0, this.gravity);
		var do_sleep = true;
		
		var BOUNDS_DENSITY = 1.2;
		var BOUNDS_FRICTION = .9;
		var BOUNDS_RESTITUTION = 0.66;
	}
	
});