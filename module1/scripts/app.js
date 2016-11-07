(function() {
	'use strict';
	angular.module('LunchCheck', [])
	.controller('LunchCheckController', function($scope) {
		$scope.items = "";
		$scope.message = "";

		$scope.displayMessage = function() {

			// if not any data is entered
			if($scope.items.length < 1 ) {
				$scope.message = 'Please enter data first.';
			} 

			// if at least 1 character is entered
			else {
				var splitItems = $scope.items.split(',');
				var totalItems = 0;

				// Checking for empty items
				for(var i = 0; i < splitItems.length; i++) {
					if(splitItems[i].trim().length > 0) { // empty items are not considered
						totalItems++;
					}
				}
				console.log(totalItems);
				// if between 1 and 3 items
				if(totalItems >= 1 && totalItems <=3) {
					$scope.message = 'Enjoy!';
				} 

				// if more than 3 items
				if(totalItems > 3) {
					$scope.message = "Too much!";
				}
				
			}
		}
	});
	
})();