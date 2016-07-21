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
                exclude : false
            },
            tito : {
                display : 'tito',
                state : 'tito',
                url : '#/tito',
                template : '<tito></tito>',
                exclude : false
            },
            yogi : {
                display : 'yogi',
                state : 'yogi',
                url : '#/yogi',
                template : '<yogi></yogi>',
                exclude : false
            },
            sandbox : {
                display : 'sandbox',
                state : 'sandbox',
                url : '#/sandbox',
                template : '<sandbox></sandbox>',
                exclude : false
            },
            styleGuide : {
                display : 'style guide',
                state : 'styleGuide',
                url : '#/style-guide',
                template : '<style-guide></style-guide>',
                exclude : false
            }
        };

        vm.setBrandPath = function( path ) {
            vm.brandPath = path;
        };

        vm.leftPages = [];
        vm.setLeftPages = function( pages ) {
            vm.leftPages = pages;
        }

        vm.setTitoPath = function( path ) {
            vm.titoPath = path;
        }

        vm.configureKnownRoutes = function( stateProvider ) {
            createRoute( stateProvider, vm.pages.home );

            for ( var i = 0; i < vm.leftPages.length; i++ ) {
                createRoute( stateProvider, vm.leftPages[i] );
            }

            createRoute( stateProvider, vm.pages.tito );
            createRoute( stateProvider, vm.pages.yogi );
            createRoute( stateProvider, vm.pages.sandbox );
            createRoute( stateProvider, vm.pages.styleGuide );
        }

        vm.$get = function() {
            return vm;
        };
    } );

    function createRoute( stateProvider, page ) {
        if ( !page.exclude && page.state && page.url && page.template ) {
            stateProvider.state( page.state, {
                url : createUiRouterUrl( page.url ),
                template : page.template,
                data : {
                    pageTitle : page.display
                }
            } );
        } else {
            console.log( 'WARN: cannot configure page without state, url, and template; ' + angular.toJson( page ) );
        }
    }

    function createUiRouterUrl( url ) {
        if ( url.startsWith( '#' ) ) {
            return url.substring( 1 );
        }

        if ( !url.startsWith( '/' ) ) {
            return '/' + url;
        }

        return url;
    }
}() );
