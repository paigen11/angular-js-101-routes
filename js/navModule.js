// Assign a variable to our angular module. We need to include ngRoute in our dependencies so the module will run 
// If angular can't find the module (included in the routes script), it will crash
var navRoutes = angular.module('navRoutes', ['ngRoute', 'ngAnimate']);

// Assign a controller to our name module. This will never go away
navRoutes.controller('navController', function($scope, $http){
	$scope.message = "This is the nav controller message";
});

// .run(['$rootScope', function($rootScope){
// 	$rootScope.messages = [
// 	{ id: 1, title: "Message #1"},
// 	{ id: 2, title: "Message #2"},
// 	{ id: 3, title: "Message #3"},
// 	{ id: 4, title: "Message #4"},
// 	{ id: 5, title: "Message #5"},
// 	];
// }])

// .controller('navController', ['$rootScope', '$routeParams',
// 	function navController($rootScope, $routeParams){
// var index = parseInt($routeParams.id, 5);
// var record = $rootScope.records[index - 1];

// this.title = messages.title;
// this.id = messages.id;
// 	}]);
// Attach another controller to our app. This is not used unless the router loads it
// The router would load it when the ".when" is true
// They're now on separate pages

// Attach a config to our module, specifically bring in the $routeProvider service.
// This service is available because of the ngRoute above.
// It has a 'when' method. It watches the URL and 'when' there is a match, it fires the call back.
// It will set the templateUrl, which will go into the ng-view in the view. 
// It will set the controller to that view.
// As a last resort, we have an 'otherwise' which will act as a catch all (or 'else')
navRoutes.config(function($routeProvider){
	$routeProvider.when('/locations', {
		templateUrl: 'templates/locations.html',
		controller: 'locationsController'
	});
	$routeProvider.when('/assassins', {
		templateUrl: 'templates/assassins.html',
		controller: 'assassinsController'
	});
	$routeProvider.when('/brainEaters', {
		templateUrl: 'templates/brainEaters.html',
		controller: 'brainEatersController'
	});
	$routeProvider.otherwise('#');
});