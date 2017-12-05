$(document).ready(function() {
	var photos = [
		{
		  name : 'miller_2.jpg'
		},
		{
		  name : 'hernandez_1.jpg'
		},
		{
		  name : 'schaefer_1.jpg'
		},
		{
		  name : 'rill_1.jpg'
		},
		{
		  name : 'york_1.jpg'
		},
		{
		  name : 'robins_1.jpg'
		},
		{
		  name : 'hara_1.jpg'
		},
		{
		  name : 'lola_1.jpg'
		},
		{
		  name : 'robins_2.jpg'
		},
		{
		  name : 'hernandez_2.jpg'
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
