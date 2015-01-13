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
    //alert('nativePluginErrorHandler - '+error);
    console.log('nativePluginErrorHandler: '+error);
}

function homeTracker() {
  if(typeof gaPlugin !== "undefined"){
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "index.html");
    //alert('Button Tracked');
  }    
}
function queryTracker() {
  var thisID = jQuery(this).attr('id');
  if(typeof gaPlugin !== "undefined"){
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "#search-page");
    //alert('Button Tracked');
  }    
}
function aboutTracker() {
  if(typeof gaPlugin !== "undefined"){
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "#about-page");
    //alert('Button Tracked');
  }    
}
function resourcesTracker() {
  if(typeof gaPlugin !== "undefined"){
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "#resources-page");
    //alert('Button Tracked');
  }    
}
function strategyTracker() {
  if(typeof gaPlugin !== "undefined"){
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "#strategy-page");
    //alert('Button Tracked');
  }    
}
function philosophyTracker() {
  if(typeof gaPlugin !== "undefined"){
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "#philosophy-page");
    //alert('Button Tracked');
  }    
}
function featuresTracker() {
  if(typeof gaPlugin !== "undefined"){
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "#features-page");
    //alert('Button Tracked');
  }    
}
function newsTracker() {
  if(typeof gaPlugin !== "undefined"){
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "#news-page");
    //alert('Button Tracked');
  }    
}
function seoTracker() {
  if(typeof gaPlugin !== "undefined"){
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "#seo-page");
    //alert('Button Tracked');
  }    
}
function subscribeTracker() {
  if(typeof gaPlugin !== "undefined"){
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "#subscribe-page");
    //alert('Button Tracked');
  }    
}
function contactTracker() {
  if(typeof gaPlugin !== "undefined"){
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, "#contact-page");
    //alert('Button Tracked');
  }    
}

function singleTracker(postNum) {
  if(typeof gaPlugin !== "undefined"){
    gaPlugin.trackPage( nativePluginResultHandler, nativePluginErrorHandler, postNum);
    //alert('Single tracked');
  }    
}

function loadMore(page){
  if(typeof gaPlugin !== "undefined") {
    gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "Button", "Click", page, 1);
  }
}

function shareClick(){
  if(typeof gaPlugin !== "undefined") {
    gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "Button", "Click", "Share", 1);
  }
}

function rgClick(){
  if(typeof gaPlugin !== "undefined") {
    gaPlugin.trackEvent( nativePluginResultHandler, nativePluginErrorHandler, "Button", "Click", "Resource Guides", 1);
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