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
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "#search-page");
    alert('Button Tracked');
  }    
}
function aboutTracker() {
  if(/***localStorage.trackpermission==="trackon" && ***/typeof gaPlugin !== "undefined"){
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "#about-page");
    alert('Button Tracked');
  }    
}
function resourcesTracker() {
  if(/***localStorage.trackpermission==="trackon" && ***/typeof gaPlugin !== "undefined"){
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "#resources-page");
    alert('Button Tracked');
  }    
}
function strategyTracker() {
  if(/***localStorage.trackpermission==="trackon" && ***/typeof gaPlugin !== "undefined"){
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "#strategy-page");
    alert('Button Tracked');
  }    
}
function philosophyTracker() {
  if(/***localStorage.trackpermission==="trackon" && ***/typeof gaPlugin !== "undefined"){
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "#philosophy-page");
    alert('Button Tracked');
  }    
}
function featuresTracker() {
  if(/***localStorage.trackpermission==="trackon" && ***/typeof gaPlugin !== "undefined"){
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "#features-page");
    alert('Button Tracked');
  }    
}
function newsTracker() {
  if(/***localStorage.trackpermission==="trackon" && ***/typeof gaPlugin !== "undefined"){
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "#news-page");
    alert('Button Tracked');
  }    
}
function seoTracker() {
  if(/***localStorage.trackpermission==="trackon" && ***/typeof gaPlugin !== "undefined"){
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "#seo-page");
    alert('Button Tracked');
  }    
}
function subscribeTracker() {
  if(/***localStorage.trackpermission==="trackon" && ***/typeof gaPlugin !== "undefined"){
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "#subscribe-page");
    alert('Button Tracked');
  }    
}
function contactTracker() {
  if(/***localStorage.trackpermission==="trackon" && ***/typeof gaPlugin !== "undefined"){
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "#contact-page");
    alert('Button Tracked');
  }    
}

function singleTracker(postNum) {
  if(/***localStorage.trackpermission==="trackon" && ***/typeof gaPlugin !== "undefined"){
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, postNum);
    alert('Single tracked');
  }    
}


function goingAway() {
    gaPlugin.exit(nativePluginResultHandler, nativePluginErrorHandler);
}