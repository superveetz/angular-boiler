(function (angular) {
    angular.module('app.controllers', [
        'app.services'
    ])

    .controller('MainNavCtrl', ['$scope', 'ModalService', function ($scope, ModalService) {
        // init $scope
        $scope.showGettingStarted = false;
        $scope.showAccountOptions = false;
        
        // open register account modal
        $scope.openRegisterAccountModal = function (closeMobileNav) {
            ModalService.openRegisterAccountModal();
        };

        // open login modal
        $scope.openLoginModal = function (closeMobileNav) {
            ModalService.openLoginModal();
        };

        // toggle mobile getting started
        $scope.toggleGettingStarted = function () {
            $scope.showGettingStarted = !$scope.showGettingStarted;
            return true;
        };

        // toggle mobile account options
        $scope.toggleAccountOptions = function () {
            $scope.showAccountOptions = !$scope.showAccountOptions;
            return true;
        };

    }]);
})(angular);