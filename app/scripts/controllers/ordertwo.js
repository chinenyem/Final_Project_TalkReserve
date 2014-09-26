'use strict';

/**
 * @ngdoc function
 * @name talkreserveApp.controller:OrdertwoCtrl
 * @description
 * # OrdertwoCtrl
 * Controller of the talkreserveApp
 */

  // .controller('OrdertwoCtrl', function ($scope) {
  //   $scope.awesomeThings = [
  //     'HTML5 Boilerplate',
  //     'AngularJS',
  //     'Karma'
  //   ];
  // });
angular.module('talkreserveApp')
.controller('OrdertwoCtrl', ['$scope', 'ordertwoSVC', function ($scope, ordertwoSVC) {

	$scope.selectedTopic = 0;
	$scope.selectedGenre = null;
	$scope.sermon = [
		{
			id: 0,
			name: 'Spritual Empowerment',
			lesson: [
				'The Joy & Responsibility of Stewardship  1/3/2010 10AMa',
				'The Joy & Responsibility of Stewardship  1/3/2010 10AMb',
				'The Joy & Responsibility of Stewardship  1/3/2010 10AMc',
				'The Joy & Responsibility of Stewardship  1/3/2010 10AMd'
			],

			live: true
		},
		{
			id: 1,
			name: 'Family Empowerment',
			lesson: [
				'The Potential of Your Family 10/5/2010 7PMa',
				'The Potential of Your Family 10/5/2010 7PMb',
				'The Potential of Your Family 10/5/2010 7PMc',
				'The Potential of Your Family 10/5/2010 7PMd'
			],
			live: true
		},
		{
			id: 2,
			name: 'Finances',
			lesson: [
				'Having Faith In God\'s Covenant Blessing 12/16/2008 7:30PMa',
				'Having Faith In God\'s Covenant Blessing 12/16/2008 7:30PMb',
				'Having Faith In God\'s Covenant Blessing 12/16/2008 7:30PMc',
				'Having Faith In God\'s Covenant Blessing 12/16/2008 7:30PMd'
			],
			live: false
		},
		{
			id: 3,
			name: 'Marriage',
			lesson: [
				'Marriage Conference 2009 Lady Leisa Easley 11/14/2009a',
				'Marriage Conference 2009 Lady Leisa Easley 11/14/2009b',
				'Marriage Conference 2009 Lady Leisa Easley 11/14/2009c'
			],
			live: true
		}
	];


	$scope.newPerson = null;
	$scope.addNew = function(){
		if ($scope.newPerson != null && $scope.newPerson != ""){
			$scope.sermon.push({
				id: $scope.sermon.length,
				name: $scope.newPerson,
				live: true,
				lesson: [
				'Marriage Conference 2009 Lady Leisa Easley 11/14/2009',
				'Having Faith In God\'s Covenant Blessing 12/16/2008 7:30PM',
				'he Potential of Your Family 10/5/2010 7PM'
				]
			});
		}
	}

    $scope.newItem = { name: '', email: '', payment: '', paid:'', sermon:'', price:'', date: new Date()  };
    $scope.currentItem = null;

    $scope.items = ordertwoSVC.getItems();

    $scope.addItem = function () {
        ordertwoSVC.addItem(angular.copy($scope.newItem));
        $scope.newItem = { name: '', email: '', payment:'', paid:'', sermon:'', price:'', date: new Date()};
    };

    $scope.updateItem = function (item) {
        ordertwoSVC.updateItem(item);
    };

    $scope.removeItem = function(item) {
        ordertwoSVC.removeItem(item);
    };
}]);







