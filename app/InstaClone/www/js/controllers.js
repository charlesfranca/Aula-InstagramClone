angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('UsuariosCtrl', function($scope, Usuarios, $cordovaCamera) {
    $scope.canGetPicture = false;
    document.addEventListener("deviceready", function() {
        $scope.canGetPicture = true;
    }, false);

    $scope.getImage = function() {
        if ($scope.canGetPicture) {
            var options = {
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
                allowEdit: true,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 100,
                targetHeight: 100,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false,
                correctOrientation: true
            };

            $cordovaCamera.getPicture(options).then(function(imageData) {
                var image = document.getElementById('myImage');
                image.src = "data:image/jpeg;base64," + imageData;
            }, function(err) {
                // error
            });
        }
    }

    $scope.saveUser = function(firstname, lastname, username, password) {
        var usuario = {
            "nome": firstname,
            "sobrenome": lastname,
            "username": username,
            "senha": password
        }
        var successCalback = function(dados) {
            if (dados.status) {
                alert("dados cadastrados");
                $scope.erros = [];
            } else {
                $scope.erros = dados.erros;
            }
            console.log(dados);

        }
        Usuarios.addUsuario(usuario, successCalback);
    }
})

.controller('ChatsCtrl', function($scope, Usuarios) {
    Usuarios.getUsuarios(function(dados) {
        $scope.usuarios = dados;
        console.log($scope.usuarios);
    });
})

.controller('mensagemChatCtrl', function($scope, $firebaseArray) {
    // Conecta a variavel tabelaRef a uma tabela no firebase chamada "messages"
    var tabelaRef = firebase.database().ref().child("chat");
    // sincroniza a variavel de escopo com a taela
    $scope.messages = $firebaseArray(tabelaRef);
    // add new items to the array
    // the message is automatically added to our Firebase database!
    $scope.enviarMensagem = function(nome, mensagem) {
        var mensagem = {
            nome: nome,
            mensagem: mensagem,
            _date: "17/01/2010"
        }
        console.log(mensagem);
        $scope.messages.$add(mensagem);
    };
    // click on `index.html` above to see $remove() and $save() in action
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})


.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
})

.controller('CadProdCtrl', function($scope, $ionicNavBarDelegate, $state) {
    $ionicNavBarDelegate.showBackButton(false);

    $scope.cancelar = function() {
        $state.go("tab.cadastro-produto");
    }
})

// Lembresse sempre de declarar todas as suas 
// dependências de service ou outros frameworks na linha abaixo
.controller('ProdutosCtrl', function($scope, Produtos, $state) {
    // Consome o service para recuperar a lista de produtos
    $scope.produtos = Produtos.getProdutos();

    $scope.goToEdit = function() {
        $state.go("tab.cadastro-produto");
    }
});