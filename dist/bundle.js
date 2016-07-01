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

( function() {
    angular.module( 'mmdb.toolbar' )

    .component( 'mmdbToolbar', {
        templateUrl : 'components/mmdb-toolbar/mmdb-toolbar.html',
        bindings : {
            brandText : '@'
        },
        controller : [ '$location', 'mmdbToolbar', MmdbToolbarCtrl ]
    } );

    function MmdbToolbarCtrl( $location, provider ) {
        var vm = this;

        vm.brandImg = provider.brandImg;

        vm.onTitoClick = function() {
            $location.path( '/tito' );
        }

        vm.onYogiClick = function() {
            $location.path( '/yogi' );
        }

        vm.onSandboxClick = function() {
            $location.path( '/sandbox' );
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

    .component( 'tito', {
        templateUrl : 'components/tito/tito.html',
        bindings : {},
        controller : [ 'mmdbToolbar', TitoCtrl ]
    } );

    function TitoCtrl( provider ) {
        var vm = this;

        vm.titoImg = provider.titoImg;
    }
} )();

( function() {
    angular.module( 'mmdb.toolbar' )

    .component( 'yogi', {
        templateUrl : 'components/yogi/yogi.html',
        bindings : {},
        controller : [ 'yogiQuotes', YogiCtrl ]
    } );

    function YogiCtrl( yogiQuotes ) {
        var vm = this;

        vm.quote = yogiQuotes.random();
    }
} )();

( function() {
    'use strict';

    angular.module( 'mmdb.toolbar' )

    .service( 'yogiQuotes', [ 'mmdbToolbar', yogiQuotes ] );

    function yogiQuotes() {
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

(function(){angular.module("mmdb.toolbar.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("components/mmdb-toolbar/mmdb-toolbar.html","<nav class=\"nav navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header mmdb-brand center-image\">\n            <a class=\"nav navbar-brand\" href=\"#/\"> <img alt=\"{{$ctrl.brandText}}\" src=\"{{$ctrl.brandImg}}\"></a>\n        </div>\n        <ul class=\"nav nav-tabs navbar-left\" ng-transclude>\n        </ul>\n        <ul class=\"nav nav-pills navbar-right\">\n            <li><a ng-click=\"$ctrl.onTitoClick()\">tito</a></li>\n            <li><a ng-click=\"$ctrl.onYogiClick()\">yogi</a></li>\n            <li><a ng-click=\"$ctrl.onSandboxClick()\">sandbox</a></li>\n        </ul>\n    </div>\n</nav>");
$templateCache.put("components/sandbox/sandbox.html","feel free to play around here");
$templateCache.put("components/yogi/yogi.html","<div>\n	<h1 class=\"banner-title\">Yogi says...</h1>\n	<blockquote class=\"quote-box\">\n		<p class=\"quote-text\">{{$ctrl.quote.line}}</p>\n	</blockquote>\n</div>\n");
$templateCache.put("components/tito/tito.html","<div>\n    <h1 class=\"banner-title\">Meet Tito!</h1>\n    <img alt=\"Tito, sunmool! ... Tito! ... TITO BAP!!!\" ng-src=\"{{$ctrl.titoImg}}\" class=\"center-block img-circle tito\"/>\n</div>\n");}]);})();