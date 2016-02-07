'user strict';
angular.module('app')
    .service('ModalService', function ($ionicModal) {

        var id = "";

        this.showMessage = function (id) {
            this.setId(id);
            var service = this;
            if (service.messageModal) {
                service.messageModal.show();
            } else {
                $ionicModal.fromTemplateUrl('message.html', {
                    scope: null,
                    animation: 'slide-in-up'
                }).then(function (modal) {
                    service.messageModal = modal;
                    service.messageModal.show();
                });
            }
        };
        this.hideMessage = function () {
            this.messageModal && this.messageModal.hide();
        };

        this.getId = function(){
            return id;
        }

        this.setId = function(tmp){
             id = tmp;
        }

    });