$(document).ready(function() {
	var photos = [
		{
		  name : 'anderson_gonzalez.jpg'
		},
		{
		  name : 'nicole_york_4.jpg',
		  title : 'Nicole York'
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
		  name : 'blanc_wedding.jpg'
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

	var thumbNails = $('#thumbnails');
	for(var i = 0; i < photos.length ; ++i) {
		var photo = photos[i];
		// photo.title = photo.title ? photo.title : '&nbsp;';
		// photo.text = photo.text ? photo.text : '&nbsp;';
		photo.title = '';
		photo.text = '';
		var elementHTML = 
			"<article>" + 
				"<a class=\"thumbnail\" href=\"images/fulls/" + photo.name + "\" data-position=\"left center\">" + 
					"<img src=\"images/thumbs/" + photo.name + "\" alt=\"\"/>" + 
				"</a>" + 
				"<h2>" + photo.title + "</h2>" +
				"<p>" + photo.text + "</p>" +
				"</article>";
		thumbNails.append(elementHTML);
	}
});
						