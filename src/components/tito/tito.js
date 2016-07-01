( function() {
    angular.module( 'mmdb.toolbar' )

    .component( 'mmdbToolbar', {
        templateUrl : 'components/tito/tito.html',
        bindings : {},
        controller : [ 'mmdbToolbar', TitoCtrl ]
    } );

    function TitoCtrl( provider ) {
        var vm = this;

        vm.titoImg = provider.titoImg;
    }
} )();
