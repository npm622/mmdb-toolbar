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
	
	@@templateCache
}());