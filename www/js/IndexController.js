'user strict';
angular.module('app')
    .controller('IndexController', function ($scope, $rootScope, ModalService, $ionicLoading, ErrorFactory) {

        $scope.window = $rootScope.windows;
       // $scope.flipped = false;

        $scope.flip = function (id) {
            var systemTime = new Date().toDateString().split(" ");
            var myTime = $scope.window[id].time.split(" ");

            /*
            angular.forEach($scope.window, function (value, key) {
                if (value.id == id) {
                    $scope.window[id].status = true;
                    localStorage.setItem('window', JSON.stringify($scope.window));
                    setTimeout(function () {
                        ModalService.showMessage(id);
                    }, 1500);
                }
            });
            $scope.flipped = !$scope.flipped;
            */

            if(systemTime[1] === myTime[0] && systemTime[2] === myTime[1] && systemTime[3] === myTime[2]){
                angular.forEach($scope.window, function (value, key) {
                    if (value.id == id) {
                        $scope.window[id].status = true;
                        localStorage.setItem('window', JSON.stringify($scope.window));
                        setTimeout(function () {
                            ModalService.showMessage(id);
                        }, 1500);
                    }
                });
                $scope.flipped = !$scope.flipped;
            }else{
                var x = Math.floor((Math.random() * 3) + 1);
                $ionicLoading.show({
                    template: ErrorFactory.get(x),
                    duration: 3500
                });
            }

        };


    }).directive("flipper", function () {
        return {
            restrict: "E",
            templateUrl: "flip.html",
            transclude: true,
            scope: {
                flipped: "=",
            }
        };
    }).directive("front", function () {
        return {
            restrict: "E",
            template: "<div class='front' ng-transclude></div>",
            transclude: true
        };
    }).directive("back", function () {
        return {
            restrict: "E",
            template: "<div class='back' ng-transclude></div>",
            transclude: true
        }
    });
