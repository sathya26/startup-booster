//angular.module('myApp')
//    .controller('loginController',function($scope,$sanitize,$location,Authenticate){
//        $scope.login = function(){
//            Authenticate.save({
//                'email': $sanitize($scope.email),
//                'password': $sanitize($scope.password)
//            },function() {
//                $scope.flash = ''
//                $location.path('/home');
//                sessionStorage.authenticated = true;
//            },function(response){
//                $scope.flash = response.data.flash
//            })
//        }
//})
//    .controller('homeController',function($scope,$location,Authenticate){
//        if (!sessionStorage.authenticated){
//            $location.path('/')
//        }
//        $scope.logout = function (){
//            Authenticate.get({},function(){
//                delete sessionStorage.authenticated
//                $location.path('/');
//            })
//        }
//})