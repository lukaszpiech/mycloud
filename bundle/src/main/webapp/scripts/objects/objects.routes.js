(function () {
    'use strict';
    angular.module('com.example.mycloud.objects').config(function ($stateProvider, BX_OBJECT) {
        $stateProvider.state('bx.objects', {
            url: '/objects',
            views: {
                content: {
                    templateUrl: 'scripts/objects/objects.view.html',
                    controller: 'ObjectsController'
                }
            }
        });
    });
})();
