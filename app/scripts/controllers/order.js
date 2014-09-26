'use strict';

/**
 * @ngdoc function
 * @name talkreserveApp.controller:OrderrouteCtrl
 * @description
 * # OrderrouteCtrl
 * Controller of the talkreserveApp
 */
angular.module('talkreserveApp')
  .controller('OrderrouteCtrl', function ($scope, $timeout, fbutil) {
  $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


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



	$scope.reserves =fbutil.syncArray("reserves") 
	
	$scope.addReserve = function(newReserve){
// 		console.log(newReserve)
if (newReserve) {

	$scope.reserves.$add({'message': 'post.message', 'date': 'TIMESTAMP' })
	}
};


// $scope.reserves = $rese(new Firebase('https://talkreserve.firebaseIO.com'));
//   reserves.push({ 'message': 'post.message', 'date': 'new Date ()' });
// Same effect as the previous example, but we've combined the push() and the set().

	//$scope.addReserve = function(){
     // $scope.reserves.push({title:$scope.post.title},{message:$scope.post.message}, {date: new Date()})
     // $scope.post.title="";
     // $scope.post.message="";
      //$scope.post.date="";

	//}


  });