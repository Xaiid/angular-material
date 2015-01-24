var app = angular.module('materializeDemo', []);

app.controller('mainController',
		function ($scope) {

			$scope.mode = 'About';
			$scope.modes = [ 'About', 'Getting Started', 'Components', 'CSS' ];


			// TODO: pull this into directive
			$scope.changeMode = function($event) {
				var mode = $event.target.outerText;
				$scope.mode = mode;
			}

		});