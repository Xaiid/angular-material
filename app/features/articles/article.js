app.directive('amArticle', function () {

	return {
		restrict: 'E',
		scope: {
			amDetails: '='
		},
		templateUrl: 'article.html'
	}

})