( function() {
    'use strict';

    angular.module( 'mmdb.toolbar', [ 'mmdb.toolbar.templates', 'ui.router' ] )

    .provider( 'mmdbToolbar', function() {
        var vm = this;

        vm.pillConsts = {
            TITO : 'tito',
            YOGI : 'yogi',
            SANDBOX : 'sandbox',
            STYLE_GUIDE : 'style guide'
        };

        vm.rightPills = [ vm.pillConsts.TITO, vm.pillConsts.YOGI, vm.pillConsts.SANDBOX, vm.pillConsts.STYLE_GUIDE ];

        vm.$get = function() {
            return vm;
        };

        vm.setBrandImg = function( brandImg ) {
            vm.brandImg = brandImg;
        };

        vm.setTitoImg = function( titoImg ) {
            vm.titoImg = titoImg;
        }

        vm.setRightPills = function( pills ) {
            vm.rightPills = pills;
        }

        vm.setLeftPills = function( pills ) {
            vm.leftPills = pills;
        }
    } )

    .config( function config( $stateProvider, mmdbToolbarProvider ) {
        var titoUrl = ( mmdbToolbarProvider.titoUrl ) ? mmdbToolbarProvider.titoUrl : '/tito';
        var yogiUrl = ( mmdbToolbarProvider.yogiUrl ) ? mmdbToolbarProvider.yogiUrl : '/yogi';
        var sandboxUrl = ( mmdbToolbarProvider.sandboxUrl ) ? mmdbToolbarProvider.sandboxUrl : '/sandbox';
        var styleGuideUrl = ( mmdbToolbarProvider.styleGuideUrl ) ? mmdbToolbarProvider.styleGuideUrl : '/sandbox';

        $stateProvider.state( 'tito', {
            url : titoUrl,
            template : '<tito></tito>',
            data : {
                pageTitle : 'tito'
            }
        } ).state( 'yogi', {
            url : yogiUrl,
            template : '<yogi></yogi>',
            data : {
                pageTitle : 'yogi'
            }
        } ).state( 'sandbox', {
            url : sandboxUrl,
            template : '<sandbox></sandbox>',
            data : {
                pageTitle : 'sandbox'
            }
        } ).state( 'styleGuide', {
            url : styleGuideUrl,
            template : '<style-guide></style-guide>',
            date : {
                pageTitle : 'style guide'
            }
        } );
    } );
}() );
