app.controller('sidebarCtrl',
		function ($scope) {
			$scope.click = function (article) {
				for (var i = 0, len = $scope.articles.length; i < len; i++) {
					if ($scope.articles[i] === article) {
						$scope.current.article = $scope.articles[i];
					}
				}
			}

		});