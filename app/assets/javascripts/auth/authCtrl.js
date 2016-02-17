angular.module('anotherWall')
.controller('authCtrl', [
    'Auth',
    '$scope',
    '$state',
    function(Auth, $scope, $state){
        $scope.login = function(){
            Auth.login($scope.user).then(function(){
                $state.go('home');
            });
        };
        
        $scope.register = function(){
            Auth.register($scope.user).then(function(){
               $state.go('home');
            });
        };
    }
]);