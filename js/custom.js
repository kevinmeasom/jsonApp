jQuery(document).ready(function($){
  $this = $(this);

  $(document).ready(function(){
    $("*").dblclick(function(e){
      e.preventDefault();
    });
  });

// NAV DROP DOWN
  $(function(){
    $(document).bind('click',function(e) {
      if(!$(e.target).is('#logo')) {
        $('.nav-wrap').removeClass('show');
      } else {
        $('.nav-wrap').toggleClass('show');
      }
      e.preventDefault();
    });
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