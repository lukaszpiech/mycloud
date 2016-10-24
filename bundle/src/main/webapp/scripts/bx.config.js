(function () {
    'use strict';
    angular.module('com.example.mycloud').config(function (rxApplicationConfiguratorProvider) {
        rxApplicationConfiguratorProvider.configure({
            applicationInfo: {
                name : 'Deployment App',
                 version : '1.0-SNAPSHOT'
            },    
            runtimeViewStateName: 'bx.view',
            searchResultsStateName: 'bx.search',
            translateLoaderParts: ['com.example.mycloud']
        });
    });
})();