(function() {
    'use strict';

    angular.module('core', [
        //routing modules
        'ui.router'
    ])

    //configuration block
    .config(configStates);


    configStates.$inject = [ '$stateProvider', '$urlRouterProvider', '$locationProvider' ];

    function configStates($stateProvider, $urlRouterProvider, $locationProvider) {

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });

        $urlRouterProvider.otherwise('home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'core/view/home.html'
            })

            .state('contact', {
                url: '/contact',
                templateUrl: 'core/view/contact.html'
            })

            .state('about', {
                url: '/about',
                templateUrl: 'core/view/about.html'
            });
    }

})();
