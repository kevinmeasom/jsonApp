/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

$.support.cors = true;
$.mobile.allowCrossDomainPages = true;

$(document).on('click', 'a[href^=http], a[href^=https]', function(e){

    e.preventDefault();
    var $this = $(this); 
    var target = $this.data('inAppBrowser') || '_blank';

    window.open($this.attr('href'), target);

});

document.addEventListener("deviceready", function(e) {
    window.plugin.statusbarOverlay.hide();
    window.setTimeout(function() {
        navigator.splashscreen.hide();
    },5000);
            
}, "false");

var gaPlugin;

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


    blog: function(e){
        function getBlogs() {
            var dfd = $.Deferred();
            $.ajax({
                url: 'http://linkarati.com/api/get_recent_posts/?page='+e+'&date_format=m/d/Y&callback=?',
                type: 'GET',
                dataType: 'json',
                success: function(data){
                    var source   = $("#blog-template").html();
                    var template = Handlebars.compile(source);
                    var blogData = template(data);
                    $('#loading').remove();
                    $('#blog-data').html(blogData);
                    $('#blog-data').trigger('create');
                    dfd.resolve(data);
                },
                error: function(data){
                    console.log(data);
                }
            });
            return dfd.promise();
        };

        getBlogs().then(function(data){
            $('#blog-posts').on('click','.post', function(e){             
                localStorage.setItem('postData', JSON.stringify(data.posts[$(this).index()]));
            });     
        });
        
    },
    search: function(e,d){
        var cStr = d.replace(/\+/g, ' ');
        function getSearch() {
            var dfd = $.Deferred();
            $.ajax({
                url: 'http://linkarati.com/api/get_recent_posts/?s='+d+'&page='+e+'&date_format=m/d/Y&callback=?',
                type: 'GET',
                dataType: 'json',
                success: function(data){
                    var source   = $("#search-template").html();
                    var template = Handlebars.compile(source);
                    var searchData = template(data);
                    $('#loading').remove();
                    $('#search-data').html(searchData);
                    $('#search-data').trigger('create');
                    $('#term-notice').html('Search Results For: '+cStr);
                    $('#term-notice').attr('class',e)
                    console.log(cStr);
                    dfd.resolve(data);

                },
                error: function(data){
                    console.log(data);
                }
            });
            return dfd.promise();
        };

        getSearch().then(function(data){
            $('#search-posts').on('click','.post', function(e){                
                localStorage.setItem('postData', JSON.stringify(data.posts[$(this).index()]));
            });
        });

        
    },
    strategy: function(e){
        function getStrategy() {
            var dfd = $.Deferred();
            $.ajax({
                url: 'http://linkarati.com/api/get_category_posts/?count=10&page='+e+'&category_slug=strategy&date_format=m/d/Y&callback=?',
                type: 'GET',
                dataType: 'json',
                success: function(data){
                    var source   = $("#strategy-template").html();
                    var template = Handlebars.compile(source);
                    var strategyData = template(data);
                    $('#loading').remove();
                    $('#strategy-data').html(strategyData);
                    $('#strategy-data').trigger('create');
                    dfd.resolve(data);

                },
                error: function(data){
                    console.log(data);
                }
            });
            return dfd.promise();
        };

        getStrategy().then(function(data){
            $('#strategy-posts').on('click','.post', function(e){                
                localStorage.setItem('postData', JSON.stringify(data.posts[$(this).index()]));
            });
        });

        
    },
    philosophy: function(e){
        function getPhilosophy() {
            var dfd = $.Deferred();
            $.ajax({
                url: 'http://linkarati.com/api/get_category_posts/?count=10&page='+e+'&category_slug=philosophy&date_format=m/d/Y&callback=?',
                type: 'GET',
                dataType: 'json',
                success: function(data){
                    var source   = $("#philosophy-template").html();
                    var template = Handlebars.compile(source);
                    var philosophyData = template(data);
                    $('#loading').remove();
                    $('#philosophy-data').html(philosophyData);
                    $('#philosophy-data').trigger('create');
                    dfd.resolve(data);

                },
                error: function(data){
                    console.log(data);
                }
            });
            return dfd.promise();
        };

        getPhilosophy().then(function(data){
            $('#philosophy-posts').on('click','.post', function(e){                
                localStorage.setItem('postData', JSON.stringify(data.posts[$(this).index()]));
            });
        });

        
    },
    features: function(e){
        function getFeatures() {
            var dfd = $.Deferred();
            $.ajax({
                url: 'http://linkarati.com/api/get_category_posts/?count=10&page='+e+'&category_slug=features&date_format=m/d/Y&callback=?',
                type: 'GET',
                dataType: 'json',
                success: function(data){
                    var source   = $("#features-template").html();
                    var template = Handlebars.compile(source);
                    var featuresData = template(data);
                    $('#loading').remove();
                    $('#features-data').html(featuresData);
                    $('#features-data').trigger('create');
                    dfd.resolve(data);

                },
                error: function(data){
                    console.log(data);
                }
            });
            return dfd.promise();
        };

        getFeatures().then(function(data){
            $('#features-posts').on('click','.post', function(e){                
                localStorage.setItem('postData', JSON.stringify(data.posts[$(this).index()]));
            });
        });

        
    },
    news: function(e){
        function getNews() {
            var dfd = $.Deferred();
            $.ajax({
                url: 'http://linkarati.com/api/get_category_posts/?count=10&page='+e+'&category_slug=news&date_format=m/d/Y&callback=?',
                type: 'GET',
                dataType: 'json',
                success: function(data){
                    var source   = $("#news-template").html();
                    var template = Handlebars.compile(source);
                    var newsData = template(data);
                    $('#loading').remove();
                    $('#news-data').html(newsData);
                    $('#news-data').trigger('create');
                    dfd.resolve(data);

                },
                error: function(data){
                    console.log(data);
                }
            });
            return dfd.promise();
        };

        getNews().then(function(data){
            $('#news-posts').on('click','.post', function(e){                
                localStorage.setItem('postData', JSON.stringify(data.posts[$(this).index()]));
            });
        });

        
    },
    seo: function(e){
        function getSeo() {
            var dfd = $.Deferred();
            $.ajax({
                url: 'http://linkarati.com/api/get_category_posts/?count=10&page='+e+'&category_slug=seo&date_format=m/d/Y&callback=?',
                type: 'GET',
                dataType: 'json',
                success: function(data){
                    var source   = $("#seo-template").html();
                    var template = Handlebars.compile(source);
                    var seoData = template(data);
                    $('#loading').remove();
                    $('#seo-data').html(seoData);
                    $('#seo-data').trigger('create');
                    dfd.resolve(data);

                },
                error: function(data){
                    console.log(data);
                }
            });
            return dfd.promise();
        };

        getSeo().then(function(data){
            $('#seo-posts').on('click','.post', function(e){                
                localStorage.setItem('postData', JSON.stringify(data.posts[$(this).index()]));
            });
        });

        
    },
    single: function() {

            var postDataStorage = localStorage.getItem('postData');
            var source   = $("#single-template").html();
            var template = Handlebars.compile(source);
            var postData = template(JSON.parse(postDataStorage));    
            $('#single-data').html(postData);
            //$('#single-data a').contents().unwrap();

    },
    about: function(){

        $.ajax({
            url: 'http://linkarati.com/api/get_page/?page_slug=about&callback=?',
            dataType: 'json',
            type: 'get',
            cache: false,
            success: function(data) {
              $(data.page).each(function(i,v){
                $('#about-data').html('<div id="'+v.id+'" class="post fullcontent"><div id="text" class="text"><h2>'+v.title+'</h2><p>'+v.content+'</p></div></div>');
              });
            }
        });
        
    },
    contact: function(){

        $.ajax({
            url: 'http://linkarati.com/api/get_page/?page_slug=contact-us&callback=?',
            dataType: 'json',
            type: 'get',
            cache: false,
            success: function(data) {
              $(data.page).each(function(i,v){
                $('#contact-data').html('<div id="'+v.id+'" class="post fullcontent"><div id="text" class="text"><h2>'+v.title+'</h2><p>'+v.content+'</p></div></div>');
              });
            }
        });
        
    },
    /***
    single: function(e) {
        var dfd = $.Deferred();
        $.ajax({
            url: 'http://linkarati.com/api/get_post/?post_id='+e+'&date_format=m/d/Y&callback=?',
            type: 'GET',
            dataType: 'json',
            success: function(data){
                var source   = $("#single-template").html();
                var template = Handlebars.compile(source);
                var postData = template(data);
                $('#single-data').append(postData);
                $('#single-data').trigger('create');
                dfd.resolve(data);

            },
            error: function(data){
                console.log(data);
            }
        });
    },
    ***/
};