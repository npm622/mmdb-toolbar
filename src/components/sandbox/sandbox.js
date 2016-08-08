( function() {
    angular.module( 'mmdb.toolbar' )

    .component( 'sandbox', {
        templateUrl : 'components/sandbox/sandbox.html',
        bindings : {},
        controller : [ SandboxCtrl ]
    } );

    function SandboxCtrl() {
        var vm = this;
        console.log( "welcome to the sandbox controller" );
    }
} )();
