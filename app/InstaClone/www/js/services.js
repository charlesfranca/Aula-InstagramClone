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

    svc.addUsuario = function(usuario, succescallback, errorCalback) {
        $http({
            method: 'POST',
            url: 'http://localhost:3000/usuarios',
            data: usuario
        }).then(function successCallback(response) {
            succescallback(response.data);
        }, function errorCallback(response) {
            errorCalback(response);
        });
    }

    return svc;

}])

.factory('Produtos', ['$http', function($http) {

    var svc = {};
    var produtos = [{
            titulo: "Camera 1",
            preco: "500,00",
            descricao: "Melhor camera do mundo.",
            imagem: ""
        },
        {
            titulo: "Camera 1",
            preco: "500,00",
            descricao: "Melhor camera do mundo.",
            imagem: ""
        },
        {
            titulo: "Camera 1",
            preco: "500,00",
            descricao: "Melhor camera do mundo.",
            imagem: ""
        },
        {
            titulo: "Camera 1",
            preco: "500,00",
            descricao: "Melhor camera do mundo.",
            imagem: ""
        }
    ];
    svc.getProdutos = function() {
        return produtos;
    }
    return svc;

}]);