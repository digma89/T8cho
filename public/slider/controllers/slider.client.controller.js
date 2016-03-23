angular.module('slider').controller('SliderController', ['$scope','Id',
    function($scope, Id) {
        $scope.name = Id.project;
    }
]);