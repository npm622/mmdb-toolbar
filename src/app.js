( function() {
    'use strict';

    angular.module( 'mmdb.toolbar', [ 'mmdb.toolbar.templates', 'ui.router' ] )

    .provider( 'mmdbToolbar', function() {
        var vm = this;

        vm.$get = function() {
            return vm;
        };

        vm.setBrandImg = function( brandImg ) {
            vm.brandImg = brandImg;
        };

        vm.setTitoImg = function( titoImg ) {
            vm.titoImg = titoImg;
        }
    } )

    .config( function config( $stateProvider ) {
        $stateProvider.state( 'tito', {
            url : '/tito',
            template : '<tito></tito>',
            data : {
                pageTitle : 'tito'
            }
        } ).state( 'yogi', {
            url : '/yogi',
            template : '<yogi></yogi>',
            data : {
                pageTitle : 'yogi'
            }
        } ).state( 'sandbox', {
            url : '/sandbox',
            template : '<sandbox></sandbox>',
            data : {
                pageTitle : 'sandbox'
            }
        } );
    } );
}() );
