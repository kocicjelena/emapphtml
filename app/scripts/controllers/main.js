'use strict';

angular.module('emisiayoappApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
		$scope.contact= {};
		//inheritance of properties and method of person
  $scope.update = function(person) {
    $scope.contact= angular.copy(person);
  }; 
  $scope.reset = function() {
    $scope.person = angular.copy($scope.contact);
  };

  $scope.reset();
  
  //inheritance of properties and method of contact
  $scope.updatecontact = function(contact) {
    $scope.user= angular.copy(contact);
  };
  //to be done
  $scope.cites = [{
			name: 'London',
			state: 'UK',
			active:active
		}];
		$scope.toggleActive = function(s){
			s.active = !s.active;
		};
		$scope.link = function(){

			var linktempjson = 'http://api.openweathermap.org/data/2.1/find/name?q=';

		// Use the angular forEach helper method to
		// loop through the services array:

			angular.forEach($scope.cites, function(s){
				if (s.active){
					linktempjson += s.name;
				}
			});

			return linktempjson;
		}; 
		$scope.linkuser = function(user){
		$scope.this= angular.copy(link);}
  });

