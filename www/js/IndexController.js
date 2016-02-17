'user strict';
angular.module('app')
    .controller('IndexController', function ($scope, $rootScope, $ionicLoading, ErrorFactory, $ionicPopup, MessageFactory) {

        $scope.window = $rootScope.windows;
       // $scope.flipped = false;

        $scope.hide = function(){
            $ionicLoading.hide();
        };

        $scope.flip = function (id) {
            var systemTime = new Date().toDateString().split(" ");
            var myTime = $scope.window[id].time.split(" ");

            angular.forEach($scope.window, function (value, key) {
                if (value.id == id) {
                    if($scope.window[id].status == false){
                        $scope.window[id].status = true;
                        localStorage.setItem('window', JSON.stringify($scope.window));
                        setTimeout(function () {
                            $ionicLoading.show({
                                template: '<div id="a" ng-click="hide()" class="myload">'+MessageFactory.get(id).afterSide+'</div>',
                                scope: $scope
                            });
                        }, 1500);
                        $scope.flipped = !$scope.flipped;
                    }else{
                        $ionicLoading.show({
                            template: '<div ng-click="hide()" class="myload">'+MessageFactory.get(id).afterSide+'</div>',
                            scope: $scope
                        });
                    }
                }
            });

/*
            if(systemTime[1] === myTime[0] && systemTime[2] === myTime[1] && systemTime[3] === myTime[2]){
                angular.forEach($scope.window, function (value, key) {
                    if (value.id == id) {
                        if($scope.window[id].status == false){
                            $scope.window[id].status = true;
                            localStorage.setItem('window', JSON.stringify($scope.window));
                            setTimeout(function () {
                                $ionicLoading.show({
                                    template: '<div id="a" ng-click="hide()" class="myload">'+MessageFactory.get(id).afterSide+'</div>',
                                    scope: $scope
                                });
                            }, 1500);
                            $scope.flipped = !$scope.flipped;
                        }else{
                            $ionicLoading.show({
                                template: '<div ng-click="hide()" class="myload">'+MessageFactory.get(id).afterSide+'</div>',
                                scope: $scope
                            });
                        }
                    }
                });
            }else{
                var x = Math.floor((Math.random() * 3) + 1);
                $ionicLoading.show({
                    template: '<div class="myload">'+ErrorFactory.get(x)+'</div>',
                    duration: 3500
                });
            }
*/
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
