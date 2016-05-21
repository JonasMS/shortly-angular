angular.module('navigation', [])

.controller('NavigationController', function ($scope) {
  $scope.view = 'links';

  $scope.changeView = function(view) {
    console.log('view: ', view);
    console.log(this);
  };

});
