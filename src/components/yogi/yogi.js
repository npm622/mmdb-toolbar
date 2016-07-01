( function() {
    angular.module( 'mmdb.toolbar' )

    .component( 'yogi', {
        templateUrl : 'components/yogi/yogi.html',
        bindings : {},
        controller : [ 'yogiQuotes', YogiCtrl ]
    } );

    function YogiCtrl( yogiQuotes ) {
        var vm = this;

        vm.quote = yogiQuotes.random();
    }
} )();
