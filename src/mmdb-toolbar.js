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
			template : '<nav class="navbar navbar-fixed-top"><a class="navbar-brand" href="#">{{mmdbToolbar.brand}}</a><ul class="nav navbar-nav navbar-right"><li ng-repeat="view in mmdbToolbar.views"><a ng-href="#">{{view}}</a></li></ul></nav>',
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

}());
