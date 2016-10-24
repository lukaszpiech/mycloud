(function () {
    'use strict';
    angular.module('com.example.mycloud.home').config(function ($stateProvider) {
        $stateProvider.state('bx.home', {
            url: '/home',
            views: {
                content: {
                    templateUrl: 'scripts/home/home.view.html',
                    controller: 'HomeController'
                }
            }
        });
    });
})();
