

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
            }).when('/contact', {
                templateUrl: '/example/views/partials/contact.client.view.html',          
                activetab: '3', 
                controller: 'contactController'     
            }).
            otherwise({
                redirecTo: '/'
            });
    }
]);

slider.client.view.html