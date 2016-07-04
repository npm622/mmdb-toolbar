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

        vm.rightPills = [ pillConsts.TITO, pillConsts.YOGI, pillConsts.SANDBOX, pillConsts.STYLE_GUIDE ];

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

    .config( function config( $stateProvider, mmdbToolbarProivder ) {
        var titoUrl = ( mmdbToolbarProivder.titoUrl ) ? mmdbToolbarProivder.titoUrl : '/tito';
        var yogiUrl = ( mmdbToolbarProivder.yogiUrl ) ? mmdbToolbarProivder.yogiUrl : '/yogi';
        var sandboxUrl = ( mmdbToolbarProivder.sandboxUrl ) ? mmdbToolbarProivder.sandboxUrl : '/sandbox';
        var styleGuideUrl = ( mmdbToolbarProivder.styleGuideUrl ) ? mmdbToolbarProivder.styleGuideUrl : '/sandbox';

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
