(function (angular) {
    angular.module('app.services', [
        'app.controllers'
    ])
    
    .service('ModalService', ['$uibModal', '$timeout', function ($uibModal, $timeout) {
        return {
            openRegisterAccountModal: function () {
                let modalInstance = $uibModal.open({
                    animation: true,
                    ariaLabelledBy: 'register-account-title',
                    ariaDescribedBy: 'register-account-body',
                    templateUrl: 'register-account-modal.html', // found nested in main-nav.html template
                    // controller: 'RegisterAccountCtrl',
                    backdrop: true,
                    size: 'md'
                });

                // catch the promise propgated by the modal to avoid any errors (required)
                modalInstance.result
                .then(result => {

                })
                .catch(err => {
                    
                });
            },

            openLoginModal: function () {
                var modalInstance = $uibModal.open({
                    animation: true,
                    ariaLabelledBy: 'login-title',
                    ariaDescribedBy: 'login-body',
                    templateUrl: 'login-modal.html', // found nested in main-nav.html template
                    // controller: 'LoginCtrl',
                    backdrop: true,
                    size: 'md'
                });

                // catch the promise propgated by the modal to avoid any errors (required)
                modalInstance.result
                .then(result => {
                    
                })
                .catch(err => {
                    
                });
            }
        };
    }]);

})(angular);