( function() {
    'use strict';

    angular.module( 'mmdb.toolbar', [ 'mmdb.toolbar.templates', 'ui.router' ] )

    .provider( 'mmdbToolbar', function() {
        var vm = this;

        vm.pages = {
            home : {
                display : 'mmdb',
                state : 'home',
                url : '#/',
                template : '<home></home>',
                include : true
            },
            tito : {
                display : 'tito',
                state : 'tito',
                url : '#/tito',
                template : '<tito></tito>',
                include : true
            },
            yogi : {
                display : 'yogi',
                state : 'yogi',
                url : '#/yogi',
                template : '<yogi></yogi>',
                include : true
            },
            sandbox : {
                display : 'sandbox',
                state : 'sandbox',
                url : '#/sandbox',
                template : '<sandbox></sandbox>',
                include : true
            },
            styleGuide : {
                display : 'style guide',
                state : 'styleGuide',
                url : '#/style-guide',
                template : '<style-guide></style-guide>',
                include : true
            }
        };

        vm.setBrandPath = function( path ) {
            vm.brandPath = path;
        };

        vm.setLeftPages = function( pages ) {
            vm.leftPages = pages;
        }

        vm.setTitoPath = function( path ) {
            vm.titoPath = path;
        }

        vm.$get = function() {
            return vm;
        };
    } );
}() );
