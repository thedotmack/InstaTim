// Display the native navigation bar with the title "Hello World!"
steroids.view.navigationBar.show("InstaTim");

// Set the WebView background color to white (effective on iOS only)
steroids.view.setBackgroundColor("#FFFFFF");

var singleView = new steroids.views.WebView({
    location:   "/views/photo_gallery/single.html",
    id:         "singleView"
});
singleView.preload();
