var gaPlugin;
        
function initialize() {
    document.addEventListener("deviceready", onDeviceReady, true);
}

function onDeviceReady() {
    gaPlugin = window.plugins.gaPlugin;
    gaPlugin.init(nativePluginResultHandler, nativePluginErrorHandler, "UA-57802234-1", 10);
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "index.html", 1);
}

function nativePluginResultHandler (result) {
    //alert('nativePluginResultHandler - '+result);
    console.log('nativePluginResultHandler: '+result);
}

function nativePluginErrorHandler (error) {
    //alert('nativePluginErrorHandler - '+error);
    console.log('nativePluginErrorHandler: '+error);
}

function pageTracker(page) {
  if(typeof gaPlugin !== "undefined"){
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, page);
    //alert('Button Tracked');
  }    
}

function buttonClick(page){
  if(typeof gaPlugin !== "undefined") {
    gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "Button", "Click", page, 1);
  }
}

function searchClick(query) {
  if(typeof gaPlugin !== "undefined") {
    gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "Form", "Search", query, 1);
  }
}

function goingAway() {
    gaPlugin.exit(nativePluginResultHandler, nativePluginErrorHandler);
}