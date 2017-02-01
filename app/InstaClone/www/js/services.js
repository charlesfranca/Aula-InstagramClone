angular.module('starter.services', [])

.factory('Usuarios', ['$http', function($http) {

    var svc = {};
    svc.getUsuarios = function(succescallback, errorCalback) {
        // Simple GET request example:
        $http({
            method: 'GET',
            url: 'http://localhost:3000/usuarios'
        }).then(function successCallback(response) {
            succescallback(response.data);
        }, function errorCallback(response) {
            errorCalback(response);
        });
    }

    return svc;

}]);