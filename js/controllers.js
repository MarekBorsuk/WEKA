'use strict';

var myCtrls = angular.module( 'myCtrls' , [ 'ngRoute' ] );


myCtrls.controller( 'navigation' , [ '$scope' , '$location' , function( $scope , $location ){

	//if($location.path() == "")
	//console.log();

	$scope.isActive = function ( path ) {
		return $location.path() === path;
	};

}]);