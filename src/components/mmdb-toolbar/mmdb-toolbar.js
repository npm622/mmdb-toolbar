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
