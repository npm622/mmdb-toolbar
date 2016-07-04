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
            $location.path( provider.titoUrl );
        }

        vm.onYogiClick = function() {
            $location.path( provider.yogiUrl );
        }

        vm.onSandboxClick = function() {
            $location.path( provider.sandboxUrl );
        }

        vm.onStyleGuideClick = function() {
            $location.path( provider.styleGuideUrl );
        }

        vm.leftPills = provider.leftPills;
    }
} )();
