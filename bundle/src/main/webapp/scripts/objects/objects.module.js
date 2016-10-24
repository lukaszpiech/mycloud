(function () {
    'use strict';
    angular.module('com.example.mycloud.objects', [
        'ui.bootstrap',
        'ui.router',
        'angular-growl',
        'com.bmc.arsys.rx.standardlib.resources',
        'com.bmc.arsys.rx.standardlib.record.instance',
        'com.bmc.arsys.rx.standardlib.record.definition',
        'com.bmc.arsys.rx.standardlib.record.association',
        'com.bmc.arsys.rx.standardlib.security',
        'com.bmc.arsys.rx.standardlib.utils',
        'com.bmc.arsys.rx.standardlib.view-components.record-grid',
        'com.bmc.arsys.rx.standardlib.view.runtime',
        'com.example.mycloud.viewport'
    ]);
})();
