angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicPopover) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);

  };
})


.controller('ListCtrl', function($scope, $ionicPopover) {
  
  $scope.wrestlers = [
    {
      "name": "AJ Style",
      "Height": "178",
      "footHeight": "5",
      "inHeight": "10",
      "weight": "216",
      "image": "http://www.cagematch.net/site/main/img/workers/00000801_2016_AJ%20Styles_WWE.jpg"
    },
    {  
      "name": "Brian Cage",
      "Height": "183",
      "footHeight": "6",
      "inHeight": "0",
      "weight": "289",
      "image": "http://www.cagematch.net/site/main/img/workers/00004823_2016_Brian%20Cage_Independent.jpg"
    }, 
    {
      "name": "Io Shirai",
      "Height": "156",
      "footHeight": "5",
      "inHeight": "1",
      "weight": "117",
      "image": "http://www.cagematch.net/site/main/img/workers/00009555_2015_Io%20Shirai_Stardom.jpg"
    },
    {
      "name": "Kazuchika Okada",
      "Height": "191",
      "footHeight": "6",
      "inHeight": "3",
      "weight": "235",
      "image": "http://www.cagematch.net/site/main/img/workers/00004324_2016_Kazuchika%20Okada_ROH.jpg"
    }, 
    {
      "name": "Pentagon Jr",
      "Height": "180",
      "footHeight": "5",
      "inHeight": "11",
      "weight": "207",
      "image": "http://www.cagematch.net/site/main/img/workers/00010334_2016_Pentagon%20Jr._AAA.jpg"
    }
  ];


    //creates a popup window for sorting list
   $ionicPopover.fromTemplateUrl('sort.html', {
      scope: $scope
    }).then(function(popover) {
      $scope.popover = popover;
    }); 

  //show popup window
  $scope.show = function($event) {
    $scope.popover.show($event);
  };

  $scope.propertyName = 'name';
  $scope.reverse= false;

  $scope.sortBy = function(propertyName){
    $scope.reverse = ($scope.propertyName == propertyName)
    ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
  };
});
