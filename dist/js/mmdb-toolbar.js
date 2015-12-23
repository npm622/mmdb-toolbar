(function() {
	'use strict';

	angular.module( 'mmdb.toolbar', ['ui.router'] )

	.config( function config($stateProvider) {
		$stateProvider.state( 'tito', {
			url : '/tito',
			templateUrl : 'tito.tmpl.html',
			controller : 'TitoCtrl',
			controllerAs : 'tito',
			data : {
				pageTitle : 'tito'
			}
		} );
	} )

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

	.controller( 'TitoCtrl', [ '$scope', TitoCtrl ] );

	function MmdbToolbarCtrl(mmdbToolbar) {
		var vm = this;

		vm.brand = mmdbToolbar.brand;
		vm.views = mmdbToolbar.views;
	}

	function TitoCtrl($scope) {
		console.log( 'hello tito!' );
	};
	
	angular.module("mmdb.toolbar").run(["$templateCache", function($templateCache) {$templateCache.put("mmdb-toolbar.tmpl.html","<nav class=\"navbar navbar-fixed-top\">\n	<a class=\"navbar-brand\" ng-href=\"{{mmdbToolbar.homeHref}}\">{{mmdbToolbar.brand}}</a>\n	<ul class=\"nav navbar-nav navbar-right\">\n		<li ng-repeat=\"view in mmdbToolbar.views\"><a ng-href=\"#\">{{view}}</a></li>\n	</ul>\n</nav>");
$templateCache.put("tito.tmpl.html","<div>\n    <h3>meet tito!</h3>\n    <img ng-src=\"assets/images/copy-of-tito.jpg\" class=\"img-rounded\"/>\n</div>\n");}]);
}());