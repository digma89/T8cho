angular.module('example').controller('ExampleController', ['$scope','Id', '$location',
    function($scope, Id, $location) {
        $scope.name = Id.project;
        $scope.isActive = function(route) {
        return route === $location.path();
    }
    }
]);