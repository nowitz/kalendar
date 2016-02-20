'user strict';
angular.module('app')
    .controller('IndexController', function ($scope, $rootScope, $ionicLoading, ErrorFactory, $ionicPopup, MessageFactory) {

        $scope.window = $rootScope.windows;
        var count = $rootScope.count;
        var finish = $rootScope.finish;
       // $scope.flipped = false;

        $scope.hide = function(){
            $ionicLoading.hide();
        };

        $scope.flip = function (id) {
            var systemTime = new Date().toDateString().split(" ");
            var myTime = $scope.window[id].time.split(" ");
/*********************************************************************/
            angular.forEach($scope.window, function (value, key) {
                if (value.id == id) {
                    if($scope.window[id].status == false && finish === true){
                        //console.log("dneska prvne");
                        $scope.window[id].status = true;
                        localStorage.setItem('window', JSON.stringify($scope.window));
                        localStorage.setItem('count', JSON.stringify(count++));
                        $ionicLoading.show({
                            template: '<div ng-click="hide()" class="myload">'+MessageFactory.get(id).afterSide+'</div>',
                            scope: $scope
                        });
                        $scope.flipped = !$scope.flipped;

                        //fixme doresit 24 - pokud ajaj tak nesmi jit otevrit
                        if(parseInt(value.beforeSide) === 23 && parseInt(value.beforeSide) !== count){
                            finish = false;
                            localStorage.setItem('finish', JSON.stringify(finish));
                        }
                    }else if(finish === false){ //pokud jsem u 24. okynka a nebyly pred tim otevreny vsechny
                        $ionicLoading.show({
                            template: '<div ng-click="hide()" class="myload">'+"A máme tu problém! :-( Ty jsi určitě zapomněla otevřít každý den jedno okýnko viď? Z toho Honzík nebude mít radost. Pokud se chceš dozvědět, co se pod ním skrývá, tak se ho budeš muset sama zeptat. :-)"+'</div>',
                            scope: $scope
                        });
                    }
                    else{ // pokud ten den kliknu na okno vickrat
                        //console.log("dneska vickrat");
                        $ionicLoading.show({
                            template: '<div ng-click="hide()" class="myload">'+MessageFactory.get(id).afterSide+'</div>',
                            scope: $scope
                        });
                    }
                }
            });
/******************************************************************************/
/*
            //pokud kliknu na okno s aktualnim(dnesnim) datumem
            if(systemTime[1] === myTime[0] && systemTime[2] === myTime[1] && systemTime[3] === myTime[2]){
                angular.forEach($scope.window, function (value, key) {
                    if (value.id == id) {
                        if($scope.window[id].status == false && finish === true){
                            //console.log("dneska prvne");
                            $scope.window[id].status = true;
                            localStorage.setItem('window', JSON.stringify($scope.window));
                            localStorage.setItem('count', JSON.stringify(count++));
                            $ionicLoading.show({
                                template: '<div ng-click="hide()" class="myload">'+MessageFactory.get(id).afterSide+'</div>',
                                scope: $scope
                            });
                            $scope.flipped = !$scope.flipped;

                            //fixme doresit 24 - pokud ajaj tak nesmi jit otevrit - DORESINO SNAD
                            if(parseInt(value.beforeSide) === 23 && parseInt(value.beforeSide) !== count){
                                finish = false;
                                localStorage.setItem('finish', JSON.stringify(finish));
                            }
                        }else if(finish === false){ //pokud jsem u 24. okynka a nebyly pred tim otevreny vsechny
                            $ionicLoading.show({
                                template: '<div ng-click="hide()" class="myload">'+"A máme tu problém! :-( Ty jsi určitě zapomněla otevřít každý den jedno okýnko viď? Z toho Honzík nebude veselej. Pokud se chceš dozvědět, co pod ním skrývá, tak se ho budeš muset zeptat sama. :-)"+'</div>',
                                scope: $scope
                            });
                        }
                        else{ // pokud ten den kliknu na okno vickrat
                            //console.log("dneska vickrat");
                            $ionicLoading.show({
                                template: '<div ng-click="hide()" class="myload">'+MessageFactory.get(id).afterSide+'</div>',
                                scope: $scope
                            });
                        }
                    }
                });
            }
            else{ //pokud kliknu na ktery je urceno pro jiny den nez je aktualni(dnesni)
                angular.forEach($scope.window, function (value, key) {
                    if (value.id == id) {
                        //pokud je okno jiz odkryty
                        if($scope.window[id].status == true){
                            //console.log("jiz bylo odkryty");
                            $ionicLoading.show({
                                template: '<div ng-click="hide()" class="myload">'+MessageFactory.get(id).afterSide+'</div>',
                                scope: $scope
                            });
                        }
                        else{ // pokud chci predihat
                            //console.log("predbiham");
                            var x = Math.floor((Math.random() * 3) + 1);
                            $ionicLoading.show({
                                template: '<div ng-click="hide()" class="myload">'+ErrorFactory.get(x)+'</div>',
                                scope: $scope
                            });
                        }
                    }
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
