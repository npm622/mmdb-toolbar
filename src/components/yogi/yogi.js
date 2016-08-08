( function() {
    angular.module( 'mmdb.toolbar' )

    .component( 'yogi', {
        templateUrl : 'components/yogi/yogi.html',
        bindings : {},
        controller : [ 'YogiQuoteService', YogiCtrl ]
    } );

    function YogiCtrl( YogiQuoteService ) {
        var vm = this;

        vm.quote = YogiQuoteService.random();
    }
} )();
