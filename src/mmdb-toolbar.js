(function() {
	'use strict';

	angular
			.module('mmdbToolbar')

			.provider('mmdbToolbarConfig', function() {

				this.setBrand = function(brand) {
					this.brand = brand;
				};

				this.setViews = function(views) {
					this.views = views;
				};

				this.$get = function() {
					return this;
				};
			})

			.directive(
					'mmdbToolbar',
					function() {
						return {
							restrict : 'E',
							template : '<nav class="navbar"><a class="navbar-brand" href="#">{{mmdbToolbar.brand}}</a><ul class="nav navbar-nav navbar-right"><li ng-repeat="view in mmdbToolbar.views"><a ng-click="#">{{view}}</a></li></ul></nav>',
							controller : 'MmdbToolbarCtrl',
							controllerAs : 'mmdbToolbar',
							bindToController : true
						}
					})

			.controller('MmdbToolbarCtrl',
					[ 'mmdbToolbarConfig', MmdbToolbarCtrl ]);

	function MmdbToolbarCtrl(mmdbToolbarConfig) {
		var vm = this;
		
		vm.brand = mmdbToolbarConfig.brand;
		vm.views = mmdbToolbarConfig.views;
	}

}());