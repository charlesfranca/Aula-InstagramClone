angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('UsuariosCtrl', function($scope, Usuarios) {
    $scope.saveUser = function(firstname, lastname, username, password) {
        var usuario = {
            "nome": firstname,
            "sobrenome": lastname,
            "username": username,
            "senha": password
        }
        Usuarios.addUsuario(usuario);
    }
})

.controller('ChatsCtrl', function($scope, Usuarios) {
    Usuarios.getUsuarios(function(dados) {
        $scope.usuarios = dados;
        console.log($scope.usuarios);
    });
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})


.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});