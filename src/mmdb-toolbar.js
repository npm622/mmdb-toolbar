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
			templateUrl : 'mmdb-toolbar.tmpl.html',
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
	
	@@templateCache
}());
