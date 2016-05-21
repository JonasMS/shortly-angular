angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.url = {};
  $scope.addLink = Links.addOne;
  $scope.urlInput = '';

});
