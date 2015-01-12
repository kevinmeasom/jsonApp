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
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "index.html");
    alert('Button Tracked');
  }    
}
function queryTracker() {
  var thisID = jQuery(this).attr('id');
  if(/***localStorage.trackpermission==="trackon" && ***/typeof gaPlugin !== "undefined"){
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "index.html#search-page");
    alert('Button Tracked');
  }    
}
function aboutTracker() {
  if(/***localStorage.trackpermission==="trackon" && ***/typeof gaPlugin !== "undefined"){
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "index.html#about-page");
    alert('Button Tracked');
  }    
}
function resourcesTracker() {
  if(/***localStorage.trackpermission==="trackon" && ***/typeof gaPlugin !== "undefined"){
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "index.html#resources-page");
    alert('Button Tracked');
  }    
}
function strategyTracker() {
  if(/***localStorage.trackpermission==="trackon" && ***/typeof gaPlugin !== "undefined"){
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "index.html#strategy-page");
    alert('Button Tracked');
  }    
}
function philosophyTracker() {
  if(/***localStorage.trackpermission==="trackon" && ***/typeof gaPlugin !== "undefined"){
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "index.html#philosophy-page");
    alert('Button Tracked');
  }    
}
function featuresTracker() {
  if(/***localStorage.trackpermission==="trackon" && ***/typeof gaPlugin !== "undefined"){
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "index.html#features-page");
    alert('Button Tracked');
  }    
}
function newsTracker() {
  if(/***localStorage.trackpermission==="trackon" && ***/typeof gaPlugin !== "undefined"){
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "index.html#news-page");
    alert('Button Tracked');
  }    
}
function seoTracker() {
  if(/***localStorage.trackpermission==="trackon" && ***/typeof gaPlugin !== "undefined"){
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "index.html#seo-page");
    alert('Button Tracked');
  }    
}
function subscribeTracker() {
  if(/***localStorage.trackpermission==="trackon" && ***/typeof gaPlugin !== "undefined"){
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "index.html#subscribe-page");
    alert('Button Tracked');
  }    
}
function contactTracker() {
  if(/***localStorage.trackpermission==="trackon" && ***/typeof gaPlugin !== "undefined"){
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "index.html#contact-page");
    alert('Button Tracked');
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