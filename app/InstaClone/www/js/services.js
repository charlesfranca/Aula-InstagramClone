angular.module('starter.services', [])

.factory('Usuarios', function($http) {

    var svc = {};
    svc.getUsuarios = function(succescallback, errorCalback) {
        // Simple GET request example:
        $http({
            method: 'GET',
            url: 'http://localhost:3000/usuarios'
        }).then(function successCallback(response) {
            callback(response.data);
        }, function errorCallback(response) {
            errorCalback(response);
        });
    }

});