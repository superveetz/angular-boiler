(function (angular) {
    // declare app and load dependencies
    angular.module('app', [
        'ui.router',
        'ui.bootstrap',
        'ngAnimate',
        'ngResource',
        'app.controllers',
        'app.directives',
        'app.services'
    ])

    .run(['$rootScope', '$state', function ($rootScope, $state) {

        // attach $state to public $rootScope so that it can be used freely in templates
        $rootScope.$state = $state;
        
    }])

    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
        // enable html5 mode (otherwise angularjs hashes urls with `#/#!/{config}`)
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });

        // forced client routing sends to 404 for any unrecognized url
        $urlRouterProvider.otherwise('404');
        
        // declare all app states
        $stateProvider
        .state('app', {
            abstract: true,
            url: '',
            templateUrl: '/views/index.html'
        })
        
        .state('app.home', {
            url: '/',
            templateUrl: '/views/home/index.html'
        })
        
        .state('app.about', {
            url: '/about',
            templateUrl: '/views/about/index.html'
        })

        .state('app.services', {
            url: '/services',
            templateUrl: '/views/services/index.html'
        })
        
        .state('app.contact', {
            url: '/contact',
            templateUrl: '/views/contact/index.html',
            controller: 'ContactCtrl'
        })
        .state('404', {
            url: '/404',
            templateUrl: '/views/404/index.html'
        });
    }]);
})(angular);