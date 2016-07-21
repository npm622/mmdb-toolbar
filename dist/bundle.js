( function() {
    'use strict';

    angular.module( 'mmdb.toolbar', [ 'mmdb.toolbar.templates', 'ui.router' ] )

    .provider( 'mmdbToolbar', function() {
        var vm = this;

        vm.pages = {
            home : {
                display : 'mmdb',
                state : 'home',
                url : '/',
                template : '<home></home>',
                include : true
            },
            tito : {
                display : 'tito',
                state : 'tito',
                url : '/tito',
                template : '<tito></tito>',
                include : true
            },
            yogi : {
                display : 'yogi',
                state : 'yogi',
                url : '/yogi',
                template : '<yogi></yogi>',
                include : true
            },
            sandbox : {
                display : 'sandbox',
                state : 'sandbox',
                url : '/sandbox',
                template : '<sandbox></sandbox>',
                include : true
            },
            styleGuide : {
                display : 'style guide',
                state : 'styleGuide',
                url : '/style-guide',
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

( function() {
    'use strict';

    angular.module( 'mmdb.toolbar' )

    .config( function config( $stateProvider, mmdbToolbarProvider ) {
        if ( mmdbToolbarProvider.pages.home.include ) {
            $stateProvider.state( mmdbToolbarProvider.pages.home.state, {
                url : mmdbToolbarProvider.pages.home.url,
                template : mmdbToolbarProvider.pages.home.template,
                data : {
                    pageTitle : mmdbToolbarProvider.pages.home.display
                }
            } );
        }

        if ( mmdbToolbarProvider.pages.tito.include ) {
            $stateProvider.state( mmdbToolbarProvider.pages.tito.state, {
                url : mmdbToolbarProvider.pages.tito.url,
                template : mmdbToolbarProvider.pages.tito.template,
                data : {
                    pageTitle : mmdbToolbarProvider.pages.tito.display
                }
            } );
        }

        if ( mmdbToolbarProvider.pages.yogi.include ) {
            $stateProvider.state( mmdbToolbarProvider.pages.yogi.state, {
                url : mmdbToolbarProvider.pages.yogi.url,
                template : mmdbToolbarProvider.pages.yogi.template,
                data : {
                    pageTitle : mmdbToolbarProvider.pages.yogi.display
                }
            } );
        }

        if ( mmdbToolbarProvider.pages.sandbox.include ) {
            $stateProvider.state( mmdbToolbarProvider.pages.sandbox.state, {
                url : mmdbToolbarProvider.pages.sandbox.url,
                template : mmdbToolbarProvider.pages.sandbox.template,
                data : {
                    pageTitle : mmdbToolbarProvider.pages.sandbox.display
                }
            } );
        }

        if ( mmdbToolbarProvider.pages.styleGuide.include ) {
            $stateProvider.state( mmdbToolbarProvider.pages.styleGuide.state, {
                url : mmdbToolbarProvider.pages.styleGuide.url,
                template : mmdbToolbarProvider.pages.styleGuide.template,
                data : {
                    pageTitle : mmdbToolbarProvider.pages.styleGuide.display
                }
            } );
        }
    } );
}() );

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

        vm.leftPills = provider.leftPages;

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

( function() {
    'use strict';

    angular.module( 'mmdb.toolbar' )

    .service( 'YogiQuoteService', [ 'mmdbToolbar', YogiQuoteService ] );

    function YogiQuotes() {
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

(function(){angular.module("mmdb.toolbar.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("components/home/home.html","<div class=\"container cover-wrapper\">\n    <div class=\"cover\">\n        <h1>welcome.</h1>\n        <p class=\"lead\">\n            this is the homepage. eventually, it will house a command center for everything you can do here. until then, <br /> just enjoy its simplicity.\n        </p>\n    </div>\n</div>");
$templateCache.put("components/mmdb-toolbar/mmdb-toolbar.html","<nav class=\"nav navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header mmdb-brand center-image\">\n            <a class=\"nav navbar-brand\" ng-href=\"{{$ctrl.homePage.url}}\"> <img alt=\"{{$ctrl.logoPlaceholder()}}\" ng-src=\"{{$ctrl.logo}}\"></a>\n        </div>\n        <ul class=\"nav nav-tabs navbar-left\">\n            <li ng-repeat=\"page in $ctrl.leftPages\"><a ng-href=\"{{page.url}}\">{{page.display}}</a></li>\n        </ul>\n        <ul class=\"nav nav-pills navbar-right\">\n            <li ng-show=\"$ctrl.titoPage.include\"><a ng-href=\"{{$ctrl.titoPage.url}}\">{{$ctrl.titoPage.display}}</a></li>\n            <li ng-show=\"$ctrl.yogiPage.include\"><a ng-href=\"{{$ctrl.yogiPage.url}}\">{{$ctrl.yogiPage.display}}</a></li>\n            <li ng-show=\"$ctrl.sandboxPage.include\"><a ng-href=\"{{$ctrl.sandboxPage.url}}\">{{$ctrl.sandboxPage.display}}</a></li>\n            <li ng-show=\"$ctrl.styleGuidePage.include\"><a ng-href=\"{{$ctrl.styleGuidePage.url}}\">{{$ctrl.styleGuidePage.display}}</a></li>\n        </ul>\n    </div>\n</nav>");
$templateCache.put("components/sandbox/sandbox.html","feel free to play around here");
$templateCache.put("components/style-guide/style-guide.html","TODO: style guide");
$templateCache.put("components/tito/tito.html","<div>\n    <h1 class=\"banner-title\">Meet Tito!</h1>\n    <img alt=\"Tito, sunmool! ... Tito! ... TITO BAP!!!\" ng-src=\"{{$ctrl.tito}}\" class=\"center-block img-circle tito\"/>\n</div>\n");
$templateCache.put("components/yogi/yogi.html","<div>\n	<h1 class=\"banner-title\">Yogi says...</h1>\n	<blockquote class=\"quote-box\">\n		<p class=\"quote-text\">{{$ctrl.quote.line}}</p>\n	</blockquote>\n</div>\n");}]);})();