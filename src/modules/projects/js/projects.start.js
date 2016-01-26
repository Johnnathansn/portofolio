(function() {
    'use strict';

    angular.module('projects', [

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
            .state('projects', {
                url: '/projects',
                templateUrl: 'modules/projects/view/projects.html'
            });
    }

})();
