// Display the native navigation bar with the title "InstaTim"
steroids.view.navigationBar.show("InstaTim");

// Set the WebView background color (effective on iOS only)
steroids.view.setBackgroundColor("#444");

$(function() {

	$('#thumbnails img').on('click',function(){

		message = {
			recipient: 	'singleView',
			src: 		$(this).attr('src'),
			title: 		$(this).attr('alt')
		}
		window.postMessage(message);

		steroids.layers.push(singleView);
	});

});