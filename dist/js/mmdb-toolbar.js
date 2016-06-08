(function() {
	'use strict';

	angular.module( 'mmdb.toolbar', [ 'ui.router' ] )

	.provider( 'mmdbToolbar', function() {

		this.setBrandImg = function(brandImg) {
			this.brandImg = brandImg;
		};

		this.setTitoImg = function(titoImg) {
			this.titoImg = titoImg;
		}

		this.$get = function() {
			return this;
		};
	} )

	.directive( 'mmdbToolbar', function() {
		return {
			restrict : 'E',
			templateUrl : 'mmdb-toolbar.tmpl.html',
			scope : {
				brandText: '@'
			},
			controller : 'MmdbToolbarCtrl',
			controllerAs : 'mmdbToolbar',
			bindToController : true,
			transclude: true
		}
	} )

	.config( function config($stateProvider) {
		$stateProvider.state( 'tito', {
			url : '/tito',
			templateUrl : 'tito.tmpl.html',
			controller : 'TitoCtrl',
			controllerAs : 'tito',
			data : {
				pageTitle : 'tito'
			}
		} ).state( 'yogi', {
			url : '/yogi',
			templateUrl : 'yogi.tmpl.html',
			controller : 'YogiCtrl',
			controllerAs : 'yogi',
			data : {
				pageTitle : 'yogi'
			}
		} ).state( 'sandbox', {
			url : '/sandbox',
			templateUrl : 'sandbox.tmpl.html',
			controller : 'SandboxCtrl',
			controllerAs : 'sandbox',
			data : {
				pageTitle : 'sandbox'
			}
		} );
	} )

	.controller( 'MmdbToolbarCtrl', [ 'mmdbToolbar', '$location', MmdbToolbarCtrl ] )

	.controller( 'TitoCtrl', [ 'mmdbToolbar', '$scope', TitoCtrl ] )

	.factory( 'Yogi', [ Yogi ] )

	.controller( 'YogiCtrl', [ '$scope', 'Yogi', YogiCtrl ] )
	
	.controller( 'SandboxCtrl', [ '$scope', SandboxCtrl ] );

	function MmdbToolbarCtrl(mmdbToolbar, $location) {
		var vm = this;

		vm.brandImg = mmdbToolbar.brandImg;
		
		vm.onTitoClick = function() {
			$location.path('/tito');
		}
		
		vm.onYogiClick = function() {
			$location.path('/yogi');
		}
		
		vm.onSandboxClick = function() {
			$location.path('/sandbox');
		}
	}

	function TitoCtrl(mmdbToolbar, $scope) {
		var vm = this;

		vm.titoImg = mmdbToolbar.titoImg;		
	}

	function Yogi() {
		var quotes = [ {
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

		return {
			pick : function() {
				return quotes[Math.floor( Math.random() * quotes.length )];
			}
		}
	}

	function YogiCtrl($scope, Yogi) {
		var vm = this;

		vm.quote = Yogi.pick();
	}

	function SandboxCtrl($scope) {
		var vm = this;
		console.log("welcome to the sandbox controller");
	}

	angular.module("mmdb.toolbar").run(["$templateCache", function($templateCache) {$templateCache.put("mmdb-toolbar.tmpl.html","<nav class=\"nav navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header mmdb-brand center-image\">\n            <a class=\"nav navbar-brand\" href=\"#/\"> <img alt=\"{{mmdbToolbar.brandText}}\" src=\"{{mmdbToolbar.brandImg}}\"></a>\n        </div>\n        <ul class=\"nav nav-tabs navbar-left\" ng-transclude>\n        </ul>\n        <ul class=\"nav nav-pills navbar-right\">\n            <li><a ng-click=\"mmdbToolbar.onTitoClick()\">tito</a></li>\n            <li><a ng-click=\"mmdbToolbar.onYogiClick()\">yogi</a></li>\n            <li><a ng-click=\"mmdbToolbar.onSandboxClick()\">sandbox</a></li>\n        </ul>\n    </div>\n</nav>");
$templateCache.put("sandbox.tmpl.html","feel free to play around here");
$templateCache.put("tito.tmpl.html","<div>\n    <h1 class=\"banner-title\">Meet Tito!</h1>\n    <img alt=\"Tito, sunmool! ... Tito! ... TITO BAP!!!\" ng-src=\"{{tito.titoImg}}\" class=\"center-block img-circle tito\"/>\n</div>\n");
$templateCache.put("yogi.tmpl.html","<div>\n	<h1 class=\"banner-title\">Yogi says...</h1>\n	<blockquote class=\"quote-box\">\n		<p class=\"quote-text\">{{yogi.quote.line}}</p>\n	</blockquote>\n</div>\n");}]);
}());
