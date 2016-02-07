'user strict';
angular.module('app')
    .controller('MessageController', function ($scope, ModalService, MessageFactory) {
        /**
         * Propisu si ModalService abych nemusel metody implementovat v kontroleru MenuController.js
         */
        $scope.modalService = ModalService;
        $scope.messageFactory = MessageFactory;

    });
