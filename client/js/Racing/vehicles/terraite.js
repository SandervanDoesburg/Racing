var Terraite = new Class({

	Extends : Car_base,
	
	initialize : function() {
		this.base({
			'w': 80,
			'h': 120,
			'x_orig': 25,
			'y_orig': 60
		})
	
		this.wheels({
		
			'front_left' : {
				'image' : 'image',
				'x' : -10,
				'y' : -10,	
				'x_orig': 8,
				'y_orig': 20,
				'w' : 15,
				'h' : 30
			},
			
			'front_right' : {
				'image' : 'image',
				'x' : 10,
				'y' : -10,
				'x_orig': 8,
				'y_orig': 20,
				'w' : 15,
				'h' : 30
			},
			
			'rear_left' : {
				'image' : 'image',
				'x' : -10,
				'y' : 30,
				'x_orig': 8,
				'y_orig': 20,
				'w' : 15,
				'h' : 30
			},
			
			'rear_right' : {
				'image' : 'image',
				'x' : 10,
				'y' : 30,
				'x_orig': 8,
				'y_orig': 20,
				'w' : 15,
				'h' : 30
			}
		});
	}
});