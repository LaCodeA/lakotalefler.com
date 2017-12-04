$(document).ready(function() {
	var photos = [
		{
		  name : 'miller_2.png'
		},
		{
		  name : 'hernandez_1.png'
		},
		{
		  name : 'schaefer_1.png'
		},
		{
		  name : 'rill_1.png'
		},
		{
		  name : 'york_1.png'
		},
		{
		  name : 'robins_1.png'
		},
		{
		  name : 'hara_1.png'
		},
		{
		  name : 'lola_1.png'
		},
		{
		  name : 'robins_2.png'
		},
		{
		  name : 'hernandez_2.png'
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
