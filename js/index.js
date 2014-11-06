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
                    $('#blog-data').append(blogData);
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
            $('#all-posts').on('click','.post', function(e){                
                localStorage.setItem('postData', JSON.stringify(data.posts[$(this).index()]));
            });
        });
        
    },
    search: function(e,d){
        function getBlogs() {
            var dfd = $.Deferred();
            $.ajax({
                url: 'http://linkarati.com/api/get_recent_posts/?s='+d+'&page='+e+'&date_format=m/d/Y&callback=?',
                type: 'GET',
                dataType: 'json',
                success: function(data){
                    var source   = $("#search-template").html();
                    var template = Handlebars.compile(source);
                    var searchData = template(data);
                    $('#search-data').append(searchData);
                    $('#search-data').trigger('create');
                    dfd.resolve(data);

                },
                error: function(data){
                    console.log(data);
                }
            });
            return dfd.promise();
        };

        getBlogs().then(function(data){
            $('#all-posts').on('click','li', function(e){                
                localStorage.setItem('postData', JSON.stringify(data.posts[$(this).index()]));
            });
        });

        
    },
    strategy: function(e){
        function getBlogs() {
            var dfd = $.Deferred();
            $.ajax({
                url: 'http://linkarati.com/api/get_category_posts/?count=10&page='+e+'&category_slug=strategy&date_format=m/d/Y&callback=?',
                type: 'GET',
                dataType: 'json',
                success: function(data){
                    var source   = $("#strategy-template").html();
                    var template = Handlebars.compile(source);
                    var strategyData = template(data);
                    $('#strategy-data').append(strategyData);
                    $('#strategy-data').trigger('create');
                    dfd.resolve(data);

                },
                error: function(data){
                    console.log(data);
                }
            });
            return dfd.promise();
        };

        getBlogs().then(function(data){
            $('#all-posts').on('click','li', function(e){                
                localStorage.setItem('postData', JSON.stringify(data.posts[$(this).index()]));
            });
        });

        
    },
    philosophy: function(e){
        function getBlogs() {
            var dfd = $.Deferred();
            $.ajax({
                url: 'http://linkarati.com/api/get_category_posts/?count=10&page='+e+'&category_slug=philosophy&date_format=m/d/Y&callback=?',
                type: 'GET',
                dataType: 'json',
                success: function(data){
                    var source   = $("#philosophy-template").html();
                    var template = Handlebars.compile(source);
                    var philosophyData = template(data);
                    $('#philosophy-data').append(philosophyData);
                    $('#philosophy-data').trigger('create');
                    dfd.resolve(data);

                },
                error: function(data){
                    console.log(data);
                }
            });
            return dfd.promise();
        };

        getBlogs().then(function(data){
            $('#all-posts').on('click','li', function(e){                
                localStorage.setItem('postData', JSON.stringify(data.posts[$(this).index()]));
            });
        });

        
    },
    features: function(e){
        function getBlogs() {
            var dfd = $.Deferred();
            $.ajax({
                url: 'http://linkarati.com/api/get_category_posts/?count=10&page='+e+'&category_slug=features&date_format=m/d/Y&callback=?',
                type: 'GET',
                dataType: 'json',
                success: function(data){
                    var source   = $("#features-template").html();
                    var template = Handlebars.compile(source);
                    var featuresData = template(data);
                    $('#features-data').append(featuresData);
                    $('#features-data').trigger('create');
                    dfd.resolve(data);

                },
                error: function(data){
                    console.log(data);
                }
            });
            return dfd.promise();
        };

        getBlogs().then(function(data){
            $('#all-posts').on('click','li', function(e){                
                localStorage.setItem('postData', JSON.stringify(data.posts[$(this).index()]));
            });
        });

        
    },
    news: function(e){
        function getBlogs() {
            var dfd = $.Deferred();
            $.ajax({
                url: 'http://linkarati.com/api/get_category_posts/?count=10&page='+e+'&category_slug=news&date_format=m/d/Y&callback=?',
                type: 'GET',
                dataType: 'json',
                success: function(data){
                    var source   = $("#news-template").html();
                    var template = Handlebars.compile(source);
                    var newsData = template(data);
                    $('#news-data').append(newsData);
                    $('#news-data').trigger('create');
                    dfd.resolve(data);

                },
                error: function(data){
                    console.log(data);
                }
            });
            return dfd.promise();
        };

        getBlogs().then(function(data){
            $('#all-posts').on('click','li', function(e){                
                localStorage.setItem('postData', JSON.stringify(data.posts[$(this).index()]));
            });
        });

        
    },
    seo: function(e){
        function getBlogs() {
            var dfd = $.Deferred();
            $.ajax({
                url: 'http://linkarati.com/api/get_category_posts/?count=10&page='+e+'&category_slug=seo&date_format=m/d/Y&callback=?',
                type: 'GET',
                dataType: 'json',
                success: function(data){
                    var source   = $("#seo-template").html();
                    var template = Handlebars.compile(source);
                    var seoData = template(data);
                    $('#seo-data').append(seoData);
                    $('#seo-data').trigger('create');
                    dfd.resolve(data);

                },
                error: function(data){
                    console.log(data);
                }
            });
            return dfd.promise();
        };

        getBlogs().then(function(data){
            $('#all-posts').on('click','li', function(e){                
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

    },

    /***
    single: function(postDataStorage){
        function getBlogs() {
            var dfd = $.Deferred();
            $.ajax({
                url: 'http://linkarati.com/api/get_post/?post_id='+postDataStorage+'&date_format=m/d/Y&callback=?',
                type: 'GET',
                dataType: 'json',
                success: function(data){
                    var source   = $("#single-template").html();
                    var template = Handlebars.compile(source);
                    var singleData = template(data);
                    $('#single-data').append(singleData);
                    $('#single-data').trigger('create');
                    dfd.resolve(data);

                },
                error: function(data){
                    console.log(data);
                }
            });
            return dfd.promise();
        };

        getBlogs().then(function(data){
            $('#all-posts').on('click','li', function(e){                
                localStorage.setItem('postData', JSON.stringify(data.posts[$(this).index()]));
            });
        });

        
    },
    ***/
};