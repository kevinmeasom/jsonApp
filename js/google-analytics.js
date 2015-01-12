var gaPlugin;
        
function initialize() {
    document.addEventListener("deviceready", onDeviceReady, true);
}

function onDeviceReady() {
    gaPlugin = window.plugins.gaPlugin;
    gaPlugin.init(nativePluginResultHandler, nativePluginErrorHandler, "UA-57802234-1", 10);

    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "index.html");
}

function nativePluginResultHandler (result) {
    alert('nativePluginResultHandler - '+result);
    console.log('nativePluginResultHandler: '+result);
}

function nativePluginErrorHandler (error) {
    alert('nativePluginErrorHandler - '+error);
    console.log('nativePluginErrorHandler: '+error);
}

function homeTracker() {
  if(/***localStorage.trackpermission==="trackon" && ***/typeof gaPlugin !== "undefined"){
    gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "Menu", "Click", "Home Page", 1);
    alert('Button Tracked');
  }    
}
function queryTracker() {
  var thisID = jQuery(this).attr('id');
  if(/***localStorage.trackpermission==="trackon" && ***/typeof gaPlugin !== "undefined"){
    gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "Menu", "Click", thisID, 1);
    alert('Button Tracked');
  }    
}
function aboutTracker() {
  if(/***localStorage.trackpermission==="trackon" && ***/typeof gaPlugin !== "undefined"){
    gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "Menu", "Click", "About Page", 1);
    alert('Button Tracked');
  }    
}
function resourcesTracker() {
  if(/***localStorage.trackpermission==="trackon" && ***/typeof gaPlugin !== "undefined"){
    gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "Menu", "Click", "Resources Page", 1);
    alert('Button Tracked');
  }    
}
function strategyTracker() {
  if(/***localStorage.trackpermission==="trackon" && ***/typeof gaPlugin !== "undefined"){
    gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "Menu", "Click", "Strategy Paqe", 1);
    alert('Button Tracked');
  }    
}
function philosophyTracker() {
  if(/***localStorage.trackpermission==="trackon" && ***/typeof gaPlugin !== "undefined"){
    gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "Menu", "Click", "Philosophy Page", 1);
    alert('Button Tracked');
  }    
}
function featuresTracker() {
  if(/***localStorage.trackpermission==="trackon" && ***/typeof gaPlugin !== "undefined"){
    gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "Menu", "Click", "Features Page", 1);
    alert('Button Tracked');
  }    
}
function newsTracker() {
  if(/***localStorage.trackpermission==="trackon" && ***/typeof gaPlugin !== "undefined"){
    gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "Menu", "Click", "News Page", 1);
    alert('Button Tracked');
  }    
}
function seoTracker() {
  if(/***localStorage.trackpermission==="trackon" && ***/typeof gaPlugin !== "undefined"){
    gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "Menu", "Click", "SEO Page", 1);
    alert('Button Tracked');
  }    
}
function subscribeTracker() {
  if(/***localStorage.trackpermission==="trackon" && ***/typeof gaPlugin !== "undefined"){
    gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "Menu", "Click", "Subscribe Page", 1);
    alert('Button Tracked');
  }    
}
function contactTracker() {
  if(/***localStorage.trackpermission==="trackon" && ***/typeof gaPlugin !== "undefined"){
    gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "Menu", "Click", "Contact Page", 1);
    alert('Button Tracked');
  }    
}

function loadTracker() {
  if(/***localStorage.trackpermission==="trackon" && ***/typeof gaPlugin !== "undefined"){
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, filename);
    alert('Page tracked');
  }    
}

function singleTracker() {
  if(/***localStorage.trackpermission==="trackon" && ***/typeof gaPlugin !== "undefined"){
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "singel.html");
    alert('Single tracked');
  }    
}


function goingAway() {
    gaPlugin.exit(nativePluginResultHandler, nativePluginErrorHandler);
}