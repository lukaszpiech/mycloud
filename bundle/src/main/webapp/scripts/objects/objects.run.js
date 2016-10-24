(function () {
    'use strict';

    angular.module('com.example.mycloud.objects').run(function ($rootScope, RX_RUNTIME_VIEW, $state, BX_OBJECT) {
        var eventHandlers = {};

        eventHandlers[RX_RUNTIME_VIEW.actions.close] = function () {
            $state.go('bx.objects');
        };

        eventHandlers[RX_RUNTIME_VIEW.actions.save] = function (data) {
            if (data.viewDefinitionName == BX_OBJECT.views.createObject) {
                $state.go('bx.objects');
            }
        };

        $rootScope.$on(RX_RUNTIME_VIEW.events.viewAction, function (event, options) {
            if (eventHandlers[options.actionName]) {
                eventHandlers[options.actionName](options.data);
            }
        });
    });
})();