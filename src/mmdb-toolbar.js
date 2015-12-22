(function() {
	'use strict';

	angular.module( 'mmdb.toolbar', [] )

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
			template : 'mmdb-toolbar.tmpl.html',
			controller : 'MmdbToolbarCtrl',
			controllerAs : 'mmdbToolbar',
			bindToController : true
		}
	} )

	.controller( 'MmdbToolbarCtrl', [ 'mmdbToolbar', MmdbToolbarCtrl ] );

	function MmdbToolbarCtrl(mmdbToolbar) {
		var vm = this;

		vm.brand = mmdbToolbar.brand;
		vm.views = mmdbToolbar.views;
	}

	angular
			.module( "mmdb.toolbar" )
			.run(
					[
							"$templateCache",
							function($templateCache) {
								$templateCache
										.put(
												"mmdb-toolbar.tmpl.html",
												"<nav class=\"navbar navbar-fixed-top\">\n  <a class=\"navbar-brand\" href=\"#\">{{mmdbToolbar.brand}}</a>\n        <ul class=\"nav navbar-nav navbar-right\">\n            <li ng-repeat=\"view in mmdbToolbar.views\"><a ng-href=\"#\">{{view}}</a></li>\n        </ul>\n</nav>" );
							} ] );

}());
