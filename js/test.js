jQuery(document).ready(function($){
  $this = $(this);

// NAV DROP DOWN
  $(function(){
    $(document).bind('click', function(e) {
      if(!$(e.target).is('#logo')) {
        $('.nav-wrap').removeClass('show');
      } else {
        $('.nav-wrap').toggleClass('show');
      }
      e.preventDefault();
    });
  });

// SEARCH
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



  var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    // JSON/AJAX FUNCTIONS -- THIS IS THE CORE OF THE APP
        sQ: function(a,b,c) {
          $.ajax({
            url: 'http://linkarati.com/api/get_recent_posts/?s='+b+'&page='+a+'&date_format=m/d/Y&callback=?',
            dataType: 'json',
            type: 'post',
            cache: false,
            success: function(data) {
              $(data.posts).each(function(i,v){
                $('#search-body #wrapper .container #posts').append('<div id="'+v.id+'" class="home post"><div class="text"><h2>'+v.title+'</h2><span class="post-meta">'+v.date+' | '+v.author.name+'</span><img src="'+v.thumbnail+'"/><p>'+v.excerpt+'</p></div></div>');
              });

              /*** ATTEMPT AT PAGINATION
              $(data.pages).each(function(i,v){
                var myNum = v;

                $('#posts').append('<ul id="pagination" />');
                for ($l = 1; $l < myNum; $l++){
                  $('#pagination').append('<li id="page-'+$l+'" class="'+c+'">'+$l+'</li>');
                }

              });
              var pageCount = $(data.object);
              ***/
              var newTerm = b.replace(/\+/g, ' ');
              $('#search-body #wrapper .container #poster').empty();
              $('#search-body #wrapper .container #poster').append('<span>Results for: '+newTerm+'</span>')
              $('#search-body #header #search').val(newTerm);
              $('#search-body #wrapper .container #posts #more').remove();
              $('#search-body #wrapper .container #posts').append('<a id="more" class="search button" href="">Load More</a>');
            }
          });
          return false;
        },

        more: function(a){
          $.ajax({
            url: 'http://linkarati.com/api/get_recent_posts/?count=10&page='+a+'&date_format=m/d/Y&callback=?',
            dataType: 'json',
            type: 'get',
            cache: false,
            success: function(data) {
              $('#posts').append('<ul id="item-list" data-role="listview" data-filter="true" />')
              $(data.posts).each(function(i,v){
                $('#posts #item-list').append('<li id="'+v.id+'" class="home post"><div class="text"><h2>'+v.title+'</h2><span class="post-meta">'+v.date+' | '+v.author.name+'</span><img src="'+v.thumbnail+'"/><p>'+v.excerpt+'</p></div></li>');
              });
              $('#poster').empty();
              $('#more').remove();
              $('#posts').append('<a id="more" class="more button" href="">Load More</a>');
            }
          });
        },

        focus: function(b){
          $.ajax({
            url: 'http://linkarati.com/api/get_post/?post_id='+b+'&date_format=m/d/Y&callback=?',
            dataType: 'json',
            type: 'get',
            cache: false,
            success: function(data) {
              $(data.post).each(function(i,v){
                $('#posts').append('<div id="'+v.id+'" class="post fullcontent"><div id="text" class="text"><h2>'+v.title+'</h2><span class="post-meta">'+v.date+' | '+v.author.name+'</span><p>'+v.content+'</p></div></div>');
                $('.post-meta').append('<div id="shareme" data-url="'+v.url+'" data-text="'+v.title+'"></div>');
              });
              $('#poster').empty();
              $('#more').remove();
              $('#posts').append('<a id="more" class="more button" href="">Load More</a>');

              // SOCIAL
              $(function(){
                $('#shareme').sharrre({
                  share: {
                    googlePlus: true,
                    facebook: true,
                    twitter: true
                  },
                  buttons: {
                    googlePlus: {size: 'medium', annotation:'bubble'},
                    facebook: {layout: 'button_count'},
                    twitter: {count: 'horizontal'}
                  },
                  enableHover: false,
                  enableCounter: false,
                  enableTracking: true
                });
              });
            }
          });
        },

        page: function(c){
          $.ajax({
            url: 'http://linkarati.com/api/get_page/?page_slug='+c+'&callback=?',
            dataType: 'json',
            type: 'get',
            cache: false,
            success: function(data) {
              $(data.page).each(function(i,v){
                $('#posts').append('<div id="'+v.id+'" class="post fullcontent"><div id="text" class="text"><h2>'+v.title+'</h2><p>'+v.content+'</p></div></div>');
              });
              $('#poster').empty();
            }
          });
        },

        cat: function(d,e){

          var yStr = d.replace(/\ /g, '+');

          $.ajax({
            url: 'http://linkarati.com/api/get_category_posts/?count=10&page='+e+'&category_slug='+yStr+'&date_format=m/d/Y&callback=?',
            dataType: 'json',
            type: 'get',
            cache: false,
            success: function(data) {
              $(data.posts).each(function(i,v){
                $('#category #wrapper .container #posts').append('<div id="'+v.id+'" class="home post"><div class="text"><h2>'+v.title+'</h2><span class="post-meta">'+v.date+' | '+v.author.name+'</span><img src="'+v.thumbnail+'"/><p>'+v.excerpt+'</p></div></div>');
              });
              $('#category #wrapper .container #poster').empty();
              $('#category #wrapper .container #poster').append('<span>Posts In '+d+'</span>');
              $('#category #wrapper .container #posts #more-cat').remove();
              $('#category #wrapper .container #posts').append('<a id="more-cat" class="'+d+'" href="">Load More</a>');
            }
          });
        }
 }

        /***
        var i = 2;
        var n = 2;
        var m = 2;
        $this.ready(app.more(1));
        //$this.ready(focus(3071));

        
        $('#search-form').submit(function(e){
          var str = $('#search').val();
          var cStr = str.replace(/\ /g, '_');
          var qStr = str.replace(/\ /g, '+');
          $('#search-body #wrapper .container #posts').empty();
          $('#search-body #wrapper .container #posts').append(sQ(1,qStr,cStr));
          e.preventDefault();
        });

        $('#search-submit').bind('click', function(e){
          $('#search-form').submit();
          var str = $('#search').val();
          var cStr = str.replace(/\ /g, '_');
          var qStr = str.replace(/\ /g, '+');
          $('#search-body #wrapper .container #posts').empty();
          $('#search-body #wrapper .container #posts').append(sQ(1,qStr,cStr));
          //e.preventDefault();
        });

        $('#search-body #wrapper .container #posts #more.search').live('click',function(e){
          e.preventDefault();
          var str = $('#search').val();
          var cStr = str.replace(/\ /g, '_');
          var qStr = str.replace(/\ /g, '+');
          $this.ready(sQ(m++,qStr,cStr));
        });


      /*** Attempt to Paginate Search
        $('#pagination li').live('click', function(){
          var count = $(this).attr('id').substr( 5 );
          var query = $(this).attr('class');
          console.log(count);
          $('#search-form').live('submit', function(){
            $('#posts').empty();
            $('#posts').append(sQ(count,query));
            //e.preventDefault();
          });
        });
      ***

        $('#more.more').live('click',function(e){
          e.preventDefault();
          $this.ready(more(i++));
        });

        $('#more-cat').live('click',function(e){
          var catMore = $(this).attr('class');
          e.preventDefault();
          $this.ready(cat(catMore,n++));
        });

        $('.home.post').live('click', function(){
          $('#posts').empty();
          $('#more').hide();
          var x = $(this).attr('id');
          $('#posts').append(focus(x));
        });

        $('.nav-wrap li.page').live('click', function(){
          $('#posts').empty();
          $('#more').hide();
          var y = $(this).attr('id');
          $('#posts').append(page(y));
        });

        $('.nav-wrap li.cat').live('click', function(){
          $('#category #wrapper .container #posts').empty();
          //$('#more').hide();
          var y = $(this).attr('id');
          $('#category #wrapper .container #posts').append(cat(y,1));
        });
        ***/
});