(function () {
    'use strict';
    angular.module('com.example.mycloud.alt-home').config(function ($stateProvider) {
        $stateProvider.state('bx.alt-home', {
            url: '/alt-home',
            views: {
                content: {
                    templateUrl: 'scripts/alt-home/alt-home.view.html',
                    controller: 'AltHomeController'
                }
            }
        });
    });
})();
