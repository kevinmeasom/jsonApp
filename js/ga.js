document.addEventListener("deviceready", init, false);
var myAnalyticsAccount = "UA-57802234-1";
var gaPlugin;

function errorHandler(e) {
  //Lame - do nothing	
	alert(e.toString());

	console.log(e.toString());
}
 
function init() {
	console.log("init fired");
 
	gaPlugin = window.plugins.gaPlugin;
	gaPlugin.init(gaInit, errorHandler, myAnalyticsAccount, 10);	
	
	//Records back button event
	document.querySelector("a.back").addEventListener("touchend", function(e) {
 
		e.preventDefault();
		
		//Track an open event
		gaPlugin.trackEvent(function() {
			console.log("Button event ok");
			
		}, errorHandler, "Button", "Click", "Back");	
 
	});
 
	//Records a fake page load
	document.querySelector("#blog-posts .post .text a").addEventListener("touchend", function(e) {
 
 		var postID = $querySelector('#blog-posts .post .text a');

		e.preventDefault();
		
		//Track an open event
		gaPlugin.trackEvent(function() {
			console.log("Post event ok");
			
		}, errorHandler, "Post", "Click", postID);
		
		
	});
	
}
 
function gaInit() {
	console.log("GA init");
	
	//Track an open event
	gaPlugin.trackEvent(function() {
		console.log("Track event ok");
		
	}, errorHandler, "App", "Open", "LinkaratiApp");	
}