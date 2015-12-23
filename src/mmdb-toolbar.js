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
	
	@@templateCache
}());