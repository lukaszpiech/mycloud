(function () {
    'use strict';

    angular.module('com.example.mycloud', [
        'ngSanitize',
        'ui.router',
		'com.bmc.arsys.rx.standardlib.application',
        'com.bmc.arsys.rx.standardlib.error-handling',
        'com.bmc.arsys.rx.standardlib.login',
        'com.bmc.arsys.rx.standardlib.view.runtime',
        'com.bmc.arsys.rx.standardlib.search',
        // all modules that provide non-abstract navigation routes
        'com.example.mycloud.home',
        'com.example.mycloud.alt-home',
        'com.example.mycloud.objects',
        'com.example.mycloud-ext'
    ]);
})();
