var app = angular.module('materializeDemo', []);

app.controller('mainCtrl',
		function ($scope) {

			$scope.articles = [ 'About', 'Quickstart'];
			$scope.current = {};
			$scope.current.article = $scope.articles[0];

		});