function Car_base() {
		this.wheels = {
			'front_left' :	new CAAT.ShapeActor().
				setShape(CAAT.ShapeActor.prototype.SHAPE_RECTANGLE).
				setFillStyle('#fhfff0').
				setBounds(395, 105, 10, 20).
				setRotation(0.6),
					
			'front_right' : new CAAT.ShapeActor().
				setShape(CAAT.ShapeActor.prototype.SHAPE_RECTANGLE).
				setFillStyle('#fhfff0').
				setBounds(465, 105, 10, 20).
				setRotation(0.6),
				
			'rear_left' : new CAAT.ShapeActor().
				setShape(CAAT.ShapeActor.prototype.SHAPE_RECTANGLE).
				setFillStyle('#fhfff0').
				setBounds(395, 195, 10, 20),
				
			'rear_right' : new CAAT.ShapeActor().
				setShape(CAAT.ShapeActor.prototype.SHAPE_RECTANGLE).
				setFillStyle('#fhfff0').
				setBounds(465, 195, 10, 20)	
		};
		
		this.base = new CAAT.ShapeActor().
			setShape(CAAT.ShapeActor.prototype.SHAPE_RECTANGLE).
			setFillStyle('#ff0000').
			setBounds(400, 100, 70, 120);
			
		
	}
	
	CAAT.Foundation.Scene.prototype.addCar = function(car) {
		this.addChild(car.wheels.front_left);
		this.addChild(car.wheels.front_right);
		this.addChild(car.wheels.rear_left);
		this.addChild(car.wheels.rear_right);
		this.addChild(car.base);
	}

	window.addEvent('domready', function() {
		var director= new CAAT.Foundation.Director().initialize( 800,500,'game-portal' );
		var scene= director.createScene();
		
		var car = new Car_base();
			
		scene.addCar(car);
		
		CAAT.loop(60);
	});