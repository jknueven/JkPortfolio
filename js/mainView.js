(function() {
'use strict';

	angular
	.module('portfolio', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {

	  	$urlRouterProvider.otherwise("/");

	  	$stateProvider
	  	.state('home', {
	  			url: '/',
	  			views: {
      				'main': {
		        	templateUrl: '../views/home.html',
		        	controller: 'homeController',
		        	controllerAs: 'home',
		      		},
		      		'nav': {
		       		templateUrl: '../views/partials/nav.html',
		      		},
		  		},
	    	})
	  	.state('about', {
	  		url: "/about", 
	  		views: {
      				'main': {
		        	templateUrl: '../views/about.html',
		        	controller: 'abController',
		        	controllerAs: 'category',
		      		},
		      		'nav': {
		       		templateUrl: '../views/partials/nav.html',
		      		},
		  		},
	  		})
	  	.state('contact', {
	  		url: "/contact", 
	  		views: {
      				'main': {
		        	templateUrl: '../views/contact.html',
		        	controller: 'contactController',
		        	controllerAs: 'contact'
		      		},
		      		'nav': {
		       		templateUrl: '../views/partials/nav.html',
		     		},
		  		},
	  		})
	  	.state('work', {
	  		url: "/work", 
	  		views: {
      				'main': {
		        	templateUrl: '../views/work.html',
		        	controller: 'workController',
		        	controllerAs: 'work'
		      		},
		      		'nav': {
		       		templateUrl: '../views/partials/nav.html',
		      		},
		  		},
	  		});
	});
})();