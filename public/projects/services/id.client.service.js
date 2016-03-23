angular.module('projects').factory('Id', [
    function(){
        this.project = window.project;
        return{
            project: this.project
        };
    }
]);