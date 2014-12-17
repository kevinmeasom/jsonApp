var gaPlugin;
		
function gaInit() {
	document.addEventListener("deviceready", onDeviceReady, true);
}

function onDeviceReady() {
	gaPlugin = window.plugins.gaPlugin;
	gaPlugin.init(nativePluginResultHandler, nativePluginErrorHandler, "UA-47351417-3", 10);
}

function nativePluginResultHandler (result) {
	//alert('nativePluginResultHandler - '+result);
	console.log('nativePluginResultHandler: '+result);
}

function nativePluginErrorHandler (error) {
	//alert('nativePluginErrorHandler - '+error);
	console.log('nativePluginErrorHandler: '+error);
}

function TrackButtonClicked() {
	gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "Button", "Click", "event only", 1);
}

function VariableButtonClicked() {
	// Set a dimension based on index and value. Make sure you have added a dimension in the GA dashboard to the
	// default property for the passed in index, and your desired scope. GA allows up to 20 dimensions for a free account
	gaPlugin.setVariable( nativePluginResultHandler, nativePluginErrorHandler, 1, "Purple");
	// dimensions are are passed to the next event sent to GA. go ahead and fire off an event with the label (key) of your choice
	// In this example, the label for custom dimension 1 will show up in the dashboard as "favoriteColor". This is much more efficent
	// than the old custom variable method introduced in V1, (plus you get 20 free dimensions vs 5 free custom variables)
	gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "event with variable", "set variable", "favoriteColor", 1);
}

function PageButtonClicked() {
	gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "some.url.com");
}

function goingAway() {
	gaPlugin.exit(nativePluginResultHandler, nativePluginErrorHandler);
}