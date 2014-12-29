jQuery(document).ready(function($){
  $this = $(this);

  window.plugin.statusbarOverlay.hide();

  $(document).ready(function(){
    $("*").dblclick(function(e){
      e.preventDefault();
    });
  });

// NAV DROP DOWN
  $(function(){
    $(document).bind('click',function(e) {
      if(!$(e.target).is('#mobile-nav')) {
        $('.nav-wrap').removeClass('show');
      } else {
        $('.nav-wrap').toggleClass('show');
      }
      e.preventDefault();
    });
  });

  $('.button').bind('click',function(e) {
    $('#spacer').after('<div id="loading"><img class="loading" src="js/css/images/ajax-loader.gif" /></div>')
  });

  $('#home').on('click','a',function(){
    app.blog(1);
  });
        
/*** SEARCH
  $(function(){
    $(document).bind('click', function(e) {
      if ($(e.target).is('#search-icon')) {
        $('.form-group').toggleClass('show');
      } else if ($(e.target).is('#search')) {
        $('.form-group').show();
      } else {
        $('.form-group').removeClass('show');
      }
    });
  });
***/
});