$(document).ready(function() {
	var photos = [
		{
		  name : 'ashli_hara.jpg'
		},
		{
		  name : 'robins_bath.jpg'
		},
		{
		  name : 'j_edwards.jpg'
		},
		{
		  name : 'anderson_gonzalez.jpg'
		},
		{
		  name : 'lola_littenberg_3.jpg',
		  title : 'Lola Littenberg'
		},
		{
		  name : 'robins_photography_equillibrium.jpg'
		},
		{
		  name : 'nicole_york_1.jpg',
		  title : 'Nicole York'
		},
		{
		  name : 'robins_2.jpg'
		},
		{
		  name : 'carlos_carreon.jpg',
		  title : 'Kevin Alexander'
		},
		{
		  name : 'nicole_york_3.jpg',
		  title : 'Nicole York'
		},
		{
		  name : 'lola_littenberg_2.jpg',
		  title : 'Lola Littenberg'
		},
		{
		  name : 'r4photography.jpg'
		},
		{
		  name : 'nicole_york_2.jpg',
		  title : 'Nicole York'
		},
		{
		  name : 'nicole_york_4.jpg',
		  title : 'Nicole York'
		},
		{
		  name : 'jgallahue_bike.jpg',
		  title : 'Erin Root'
		},
		{
		  name : 'lola_littenberg_1.jpg',
		  title : 'Lola Littenberg'
		},
		{
		  name : 'robins_1.jpg'
		},
		{
		  name : 'talya_vylyt.jpg'
		},
		{
		  name : 'blanc_wedding.jpg'
		},
		{
		  name : 'trevor_gass.jpg'
		},
		{
		  name : 'robins_3.jpg'
		},
		{
		  name : 'royal_outerwear_runway.jpg'
		},
		{
		  name : 'robins_4.jpg'
		}
	];

	var mainElement = $('#main');
	for(var i = 0; i < photos.length ; ++i) {
		var photo = photos[i];
		var htmlElement = 
		mainElement.append(
			"<article class='thumb'>" +
				"<a href='images/fulls/" + photo.name + "' class='image swipebox'>" +
				// "<a href='images/fulls/" + photo.name + "' class='image swipebox' title='" + photo.title + "'>" +
					"<img src='images/thumbs/" + photo.name + "'/>" +
				"</a>" +
			"</article>");
	}

});
