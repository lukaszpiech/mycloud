(function () {
	'use strict';
    angular.module('com.example.mycloud.objects').controller('ObjectsController', function ($scope, $state, BX_OBJECT, RX_RUNTIME_VIEW) {
            $scope.title = 'My Objects';
            $scope.subtitle = 'Objects by a certain due date.';
            
            $scope.runtimeViewConfig = {
            viewDefinitionName: BX_OBJECT.views.objectListGrid
            };
            
        $scope.newObject = function () {
                $state.go('bx.view', {
                viewDefinitionName: BX_OBJECT.views.createObject
                });
            };
            
            $scope.$on(RX_RUNTIME_VIEW.events.componentAction, function (event, data) {
            if (event.currentScope.runtimeViewConfig.viewDefinitionName === BX_OBJECT.views.objectListGrid && data.columnId == BX_OBJECT.fields.displayId) {
                    $state.go('bx.view', {
                    viewDefinitionName: BX_OBJECT.views.objectDetail,
                        param: data.gridRow.entity[BX_OBJECT.fields.id.toString()]
                    });
            }
            });
        });
})();