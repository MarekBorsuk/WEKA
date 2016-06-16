'use strict';

var myCtrls = angular.module( 'myCtrls' , [ 'ngRoute' ] );


myCtrls.controller( 'navigation' , [ '$scope' , '$location' , function( $scope , $location ){

	console.log($location.path());
	$scope.isActive = function ( path ) {
		return $location.path() === path;
	};

}]);