( function() {
    'use strict';

    angular.module( 'mmdb.toolbar' )

    .config( function config( $stateProvider, mmdbToolbarProvider ) {
        if ( mmdbToolbarProvider.pages.home.include ) {
            $stateProvider.state( mmdbToolbarProvider.pages.home.state, {
                url : createUriRouterUrl( mmdbToolbarProvider.pages.home.url ),
                template : mmdbToolbarProvider.pages.home.template,
                data : {
                    pageTitle : mmdbToolbarProvider.pages.home.display
                }
            } );
        }

        if ( mmdbToolbarProvider.pages.tito.include ) {
            $stateProvider.state( mmdbToolbarProvider.pages.tito.state, {
                url : createUriRouterUrl( mmdbToolbarProvider.pages.tito.url ),
                template : mmdbToolbarProvider.pages.tito.template,
                data : {
                    pageTitle : mmdbToolbarProvider.pages.tito.display
                }
            } );
        }

        if ( mmdbToolbarProvider.pages.yogi.include ) {
            $stateProvider.state( mmdbToolbarProvider.pages.yogi.state, {
                url : createUriRouterUrl( mmdbToolbarProvider.pages.yogi.url ),
                template : mmdbToolbarProvider.pages.yogi.template,
                data : {
                    pageTitle : mmdbToolbarProvider.pages.yogi.display
                }
            } );
        }

        if ( mmdbToolbarProvider.pages.sandbox.include ) {
            $stateProvider.state( mmdbToolbarProvider.pages.sandbox.state, {
                url : createUriRouterUrl( mmdbToolbarProvider.pages.sandbox.url ),
                template : mmdbToolbarProvider.pages.sandbox.template,
                data : {
                    pageTitle : mmdbToolbarProvider.pages.sandbox.display
                }
            } );
        }

        if ( mmdbToolbarProvider.pages.styleGuide.include ) {
            $stateProvider.state( mmdbToolbarProvider.pages.styleGuide.state, {
                url : createUriRouterUrl( mmdbToolbarProvider.pages.styleGuide.url ),
                template : mmdbToolbarProvider.pages.styleGuide.template,
                data : {
                    pageTitle : mmdbToolbarProvider.pages.styleGuide.display
                }
            } );
        }
    } );

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
