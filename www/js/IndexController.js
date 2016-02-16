'user strict';
angular.module('app')
    .controller('IndexController', function ($scope, $rootScope, ModalService, $ionicLoading, ErrorFactory) {

        $scope.window = $rootScope.windows;

        $scope.turn = function (id) {
            console.log(id);
            var systemTime = new Date().toDateString().split(" ");
            var myTime =  $scope.window[id].time.split(" ");


            /*
            //FIXME odremovat podminku a smazat kod
            $("#"+id).flip(true);
            $scope.window[id].status = false;
            localStorage.setItem('window', JSON.stringify($scope.window));
            setTimeout(function(){ ModalService.showMessage(id);}, 1500);
             */

            if(systemTime[1] === myTime[0] && systemTime[2] === myTime[1] && systemTime[3] === myTime[2]){
                $("#"+id).flip(true);
                $scope.window[id].status = false;
                localStorage.setItem('window', JSON.stringify($scope.window));
                setTimeout(function(){ ModalService.showMessage(id);}, 1500);
            }else{
                var x = Math.floor((Math.random() * 3) + 1);
                $ionicLoading.show({
                    template: ErrorFactory.get(x),
                    duration: 3500
                });
            }
        }


    });
