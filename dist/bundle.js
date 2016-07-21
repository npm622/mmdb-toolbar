(function(){angular.module("mmdb.toolbar.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("components/home/home.html","<div class=\"container cover-wrapper\">\n    <div class=\"cover\">\n        <h1>welcome.</h1>\n        <p class=\"lead\">\n            this is the homepage. eventually, it will house a command center for everything you can do here. until then, <br /> just enjoy its simplicity.\n        </p>\n    </div>\n</div>");
$templateCache.put("components/mmdb-toolbar/mmdb-toolbar.html","<nav class=\"nav navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header mmdb-brand center-image\">\n            <a class=\"nav navbar-brand\" ng-href=\"{{$ctrl.homePage.url}}\"> <img alt=\"{{$ctrl.logoPlaceholder()}}\" ng-src=\"{{$ctrl.logo}}\"></a>\n        </div>\n        <ul class=\"nav nav-tabs navbar-left\">\n            <li ng-repeat=\"page in $ctrl.leftPages\"><a ng-href=\"{{page.url}}\">{{page.display}}</a></li>\n        </ul>\n        <ul class=\"nav nav-pills navbar-right\">\n            <li ng-hide=\"$ctrl.titoPage.exclude\"><a ng-href=\"{{$ctrl.titoPage.url}}\">{{$ctrl.titoPage.display}}</a></li>\n            <li ng-hide=\"$ctrl.yogiPage.exclude\"><a ng-href=\"{{$ctrl.yogiPage.url}}\">{{$ctrl.yogiPage.display}}</a></li>\n            <li ng-hide=\"$ctrl.sandboxPage.exclude\"><a ng-href=\"{{$ctrl.sandboxPage.url}}\">{{$ctrl.sandboxPage.display}}</a></li>\n            <li ng-hide=\"$ctrl.styleGuidePage.exclude\"><a ng-href=\"{{$ctrl.styleGuidePage.url}}\">{{$ctrl.styleGuidePage.display}}</a></li>\n        </ul>\n    </div>\n</nav>");
$templateCache.put("components/sandbox/sandbox.html","feel free to play around here");
$templateCache.put("components/style-guide/style-guide.html","TODO: style guide");
$templateCache.put("components/tito/tito.html","<div>\n    <h1 class=\"banner-title\">Meet Tito!</h1>\n    <img alt=\"Tito, sunmool! ... Tito! ... TITO BAP!!!\" ng-src=\"{{$ctrl.tito}}\" class=\"center-block img-circle tito\"/>\n</div>\n");
$templateCache.put("components/yogi/yogi.html","<div>\n	<h1 class=\"banner-title\">Yogi says...</h1>\n	<blockquote class=\"quote-box\">\n		<p class=\"quote-text\">{{$ctrl.quote.line}}</p>\n	</blockquote>\n</div>\n");}]);})();
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

( function() {
    'use strict';

    angular.module( 'mmdb.toolbar' )

    .service( 'YogiQuoteService', [ 'mmdbToolbar', YogiQuoteService ] );

    function YogiQuoteService() {
        var vm = this;

        vm.random = function() {
            return vm.quotes[Math.floor( Math.random() * vm.quotes.length )];
        };

        vm.quotes = [ {
            line : "Always go to other people's funerals, otherwise they won't come to yours."
        }, {
            line : "When you come to a fork in the road, take it.",
        }, {
            line : "You can observe a lot by just watching.",
        }, {
            line : "It ain't over till it's over",
        }, {
            line : "It's like déjà vu all over again.",
        }, {
            line : "No one goes there nowadays, it’s too crowded.",
        }, {
            line : "A nickel ain't worth a dime anymore.",
        }, {
            line : "The future ain't what it used to be.",
        }, {
            line : "Baseball is ninety percent mental and the other half is physical.",
        }, {
            line : "We made too many wrong mistakes.",
        }, {
            line : "Congratulations. I knew the record would stand until it was broken.",
        }, {
            line : "You better cut the pizza in four pieces because I’m not hungry enough to eat six.",
        }, {
            line : "You wouldn’t have won if we’d beaten you.",
        }, {
            line : "I usually take a two-hour nap from one to four.",
        }, {
            line : "Never answer an anonymous letter.",
        }, {
            line : "Slump? I ain’t in no slump… I just ain’t hitting.",
        }, {
            line : "It gets late early out here.",
        }, {
            line : "If the people don’t want to come out to the ballpark, nobody’s going to stop them.",
        }, {
            line : "You’ve got to be very careful if you don’t know where you are going, because you might not get there.",
        }, {
            line : "It was impossible to get a conversation going, everybody was talking too much.",
        }, {
            line : "In baseball, you don’t know nothing.",
        }, {
            line : "I never said most of the things I said.",
        }, {
            line : "Take it with a grin of salt.",
        }, {
            line : "The towels were so thick there I could hardly close my suitcase.",
        }, {
            line : "Little League baseball is a very good thing because it keeps the parents off the streets.",
        }, {
            line : "If the world were perfect, it wouldn’t be.",
        } ];
    }
} )();

( function() {
    'use strict';

    angular.module( 'mmdb.toolbar' )

    .component( 'home', {
        templateUrl : 'components/home/home.html',
        bindings : {},
        controller : [ HomeCtrl ]
    } );

    function HomeCtrl() {
        var vm = this;
    }
} )();

( function() {
    angular.module( 'mmdb.toolbar' )

    .component( 'mmdbToolbar', {
        templateUrl : 'components/mmdb-toolbar/mmdb-toolbar.html',
        bindings : {
            logoText : '@'
        },
        controller : [ '$location', 'mmdbToolbar', MmdbToolbarCtrl ]
    } );

    function MmdbToolbarCtrl( $location, provider ) {
        var vm = this;

        vm.homePage = provider.pages.home;
        vm.logo = provider.brandPath;

        vm.leftPages = provider.leftPages;

        vm.titoPage = provider.pages.tito;
        vm.yogiPage = provider.pages.yogi;
        vm.sandboxPage = provider.pages.sandbox;
        vm.styleGuidePage = provider.pages.styleGuide;

        vm.logoPlaceholder = function() {
            if ( vm.logoText ) {
                return vm.logoText;
            } else {
                return 'mmdb';
            }
        }
    }
} )();

( function() {
    angular.module( 'mmdb.toolbar' )

    .component( 'sandbox', {
        templateUrl : 'components/sandbox/sandbox.html',
        bindings : {},
        controller : [ SandboxCtrl ]
    } );

    function SandboxCtrl() {
        var vm = this;
        console.log( "welcome to the sandbox controller" );
    }
} )();

( function() {
    angular.module( 'mmdb.toolbar' )

    .component( 'styleGuide', {
        templateUrl : 'components/style-guide/style-guide.html',
        bindings : {},
        controller : [ StyleGuideCtrl ]
    } );

    function StyleGuideCtrl() {
        var vm = this;
        console.log( "welcome to the style guide controller" );
    }
} )();

( function() {
    angular.module( 'mmdb.toolbar' )

    .component( 'tito', {
        templateUrl : 'components/tito/tito.html',
        bindings : {},
        controller : [ 'mmdbToolbar', TitoCtrl ]
    } );

    function TitoCtrl( provider ) {
        var vm = this;

        vm.tito = provider.titoPath;
    }
} )();

( function() {
    angular.module( 'mmdb.toolbar' )

    .component( 'yogi', {
        templateUrl : 'components/yogi/yogi.html',
        bindings : {},
        controller : [ 'YogiQuoteService', YogiCtrl ]
    } );

    function YogiCtrl( YogiQuoteService ) {
        var vm = this;

        vm.quote = YogiQuoteService.random();
    }
} )();
