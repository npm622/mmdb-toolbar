(function() {
	'use strict';

	angular.module( 'mmdb.toolbar', ['ui.router'] )

	.provider( 'mmdbToolbar', function() {

		this.setBrand = function(brand) {
			this.brand = brand;
		};

		this.setViews = function(views) {
			this.views = views;
		};

		this.$get = function() {
			return this;
		};
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
		} );
	} )

	.directive( 'mmdbToolbar', function() {
		return {
			restrict : 'E',
			templateUrl : 'mmdb-toolbar.tmpl.html',
			scope: {
				homeHref: "@"
			},
			controller : 'MmdbToolbarCtrl',
			controllerAs : 'mmdbToolbar',
			bindToController : true
		}
	} )

	.controller( 'MmdbToolbarCtrl', [ 'mmdbToolbar', MmdbToolbarCtrl ] )

	.controller( 'TitoCtrl', [ '$scope', TitoCtrl ] )

	.controller( 'YogiCtrl', [ '$scope', YogiCtrl ] );

	function MmdbToolbarCtrl(mmdbToolbar) {
		var vm = this;

		vm.brand = mmdbToolbar.brand;
	}

	function TitoCtrl($scope) {
		var vm = this;
	};

	function YogiCtrl($scope) {
		var vm = this;
	};
	
	angular.module("mmdb.toolbar").run(["$templateCache", function($templateCache) {$templateCache.put("mmdb-toolbar.tmpl.html","<nav class=\"navbar navbar-fixed-top\">\n	<a class=\"navbar-brand\" ng-href=\"#/\">{{mmdbToolbar.brand}}</a>\n	<ul class=\"nav navbar-nav navbar-right\">\n		<li><a ng-href=\"#/tito\">tito</a></li>\n		<li><a ng-href=\"#/yogi\">yogi</a></li>\n	</ul>\n</nav>");
$templateCache.put("tito.tmpl.html","<div>\n    <h3>meet tito!</h3>\n    <img ng-src=\"assets/images/copy-of-tito.jpg\" class=\"img-rounded\"/>\n</div>\n");
$templateCache.put("yogi.tmpl.html","<div>\n	<h3>yogi says...</h3>\n	<p>TODO: figure out how to poll for a random yogi berra quote here</p>\n</div>\n");}]);
}());