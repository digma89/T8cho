var mainApplicationModuleName = 'mean';

var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngRoute','projects', 'example','ui.bootstrap','ngAnimate']);

mainApplicationModule.config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);

angular.element(document).ready(function() {
    angular.bootstrap(document, [mainApplicationModuleName]);
});