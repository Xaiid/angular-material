var app = angular.module('materializeDemo', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

	$locationProvider.html5Mode(true);

	$urlRouterProvider.otherwise('/');
	$stateProvider

			.state('Home', {
				url: '/',
				templateUrl: 'app/home.html',
				controller: function($scope) {
					$scope.title = 'Home';
				}
			})

			.state('Quickstart', {
				url: '/quickstart',
				templateUrl: 'app/features/articles/quickstart/quickstart.html',
				controller: function($scope) {
					$scope.title = 'Quickstart';
				}
			})

			.state('About', {
				url: '/about',
				templateUrl: 'app/features/articles/about/about.html',
				controller: function($scope) {
					$scope.title = 'About';
				}
			});

});


app.controller('mainCtrl',
		function ($scope) {

			$scope.articles = [ 'About', 'Quickstart'];

		});