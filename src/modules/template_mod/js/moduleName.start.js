(function() {
    'use strict';

    angular.module('blog', [

        // main module
        'core'


    ])

    //configuration block
    .config(configStates);


    configStates.$inject = [ '$stateProvider', '$urlRouterProvider', '$locationProvider' ];

    function configStates($stateProvider, $urlRouterProvider, $locationProvider) {

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });

        $stateProvider
            .state('blog', {
                url: '/blog',
                templateUrl: 'modules/blog/view/blog.html'
            });
    }

})();
