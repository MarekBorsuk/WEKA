'use strict';

var main = angular.module('main', ['ngRoute', 'myCtrls']);

main.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider){
	
	$routeProvider.when('/process', {
		//controller : 'process',
		templateUrl : 'view/process.html'
	});	
	$routeProvider.when('/classify', {
		//controller : 'classify',
		templateUrl : 'view/classify.html'
	});	
	$routeProvider.when('/cluster', {
		//controller : 'cluster',
		templateUrl : 'view/cluster.html'
	});	
	$routeProvider.when('/about', {
		//controller : 'about',
		templateUrl : 'view/about.html'
	});	
	$routeProvider.otherwise({
		redirectTo : '/home'
	});	

}]);


