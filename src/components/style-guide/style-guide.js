( function() {
    angular.module( 'mmdb.toolbar' )

    .component( 'styleGuide', {
        templateUrl : 'components/style-guide/style-guide.html',
        bindings : {},
        controller : [ StyleGuideCtrl ]
    } );

    function StyleGuideCtrl() {
        var vm = this;
        console.log( "welcome to the style guide controller" );
    }
} )();
