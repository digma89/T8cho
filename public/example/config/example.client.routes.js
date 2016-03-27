

angular.module('example').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: '/example/views/partials/home.client.view.html',
                activetab: '1'     
            }).
            when('/projects', {
                templateUrl: '/example/views/partials/projects.client.view.html',         
                activetab: '2'       
            }).
            when('/projects/:projectId', {
                templateUrl: '/example/views/partials/slider.client.view.html',         
                activetab: '2', 
                controller: 'sliderCtrl'      
            }).
            otherwise({
                redirecTo: '/'
            });
    }
]);

slider.client.view.html