angular.module('humpday-app', [])

.controller('MainCtrl', function($scope) {

  $scope.today = new Date();

  if ($scope.today.getDay() === 3) {
    $scope.show = 'humpday';
  } else {
    if ($scope.today.getDay() === 2) {
      $scope.show = 'tuesday';
    } else {
      $scope.show = 'other';
    }
  }
  
});
