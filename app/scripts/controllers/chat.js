'use strict';
/**
 * @ngdoc function
 * @name talkreserveApp.controller:ChatCtrl
 * @description
 * # ChatCtrl
 * A demo of using AngularFire to manage a synchronized list.
 */
angular.module('talkreserveApp')
  .controller('ChatCtrl', function ($scope, fbutil) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    // synchronize a read-only, synchronized array of messages, limit to most recent 10
    $scope.messages = fbutil.syncArray('messages', {limit: 20});


    // provide a method for adding a message
    $scope.addMessage = function(newMessage) {
        
        //push a message to the end of the array
        $scope.messages.$add({
          text: newMessage.text, 
          title: newMessage.title,
          date: new Date()
        })

    };

  });
