(function () {
    'use strict';
    angular.module('com.example.mycloud.objects').constant('BX_OBJECT', {
        definitionName: ':Object',

        fields: {
            displayId: 1,
            submitter: 2,
            submitDate: 3,
            assignee: 4,
            lastModifiedBy: 5,
            modifiedDate: 6,
            status: 7,
            description: 8,
            id: 379,
            assigneeGroup: 536870913,
            notes: 536870914,
            objectName: 536870915,
            objectType:  536870916,
            priority: 536870917,
            dueDate: 536870918
        },

        status: {
            'new': 0,
            assigned: 1,
            fixed: 2,
            rejected: 3,
            closed: 4
        },

        priority: {
            critical: 0,
            high: 1,
            medium: 2,
            low: 3
        },

        taskType: {
            manual: 0,
            automatic: 1
        },

        associationDefinitions: {
            note: ':OBJECT_ACTIVITY'
        },

        views: {
            objectListGrid: ':Object List Grid',
            createObject: ':Create Object',
            objectDetail: ':Object Detail'
        }
    });
})();