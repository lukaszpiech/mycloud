(function () {
    'use strict';
    angular.module('com.example.mycloud').run(function (rxApplicationConfigurator, BX) {
        rxApplicationConfigurator.runApplicationConfig({
            bundleId: BX.bundleId
        });
    });
})();

