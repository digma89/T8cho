angular.module('slider').config(['$routeProvider',
    function($routeProvider){
        $routeProvider.
        when('/proyectos/1001', {
            templateUrl: 'slider/views/slider.client.view.html'
            }).
            otherwise({
                redirecTo: '/'
            });
        }
    ]);