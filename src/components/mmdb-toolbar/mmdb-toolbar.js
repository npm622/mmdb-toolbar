( function() {
    angular.module( 'mmdb.toolbar' )

    .component( 'mmdbToolbar', {
        templateUrl : 'components/mmdb-toolbar/mmdb-toolbar.html',
        bindings : {
            logoText : '@'
        },
        controller : [ '$location', 'mmdbToolbar', MmdbToolbarCtrl ]
    } );

    function MmdbToolbarCtrl( $location, provider ) {
        var vm = this;

        vm.homePage = provider.pages.home;
        vm.logo = provider.brandPath;

        vm.leftPills = provider.leftPages;

        vm.titoPage = provider.pages.tito;
        vm.yogiPage = provider.pages.yogi;
        vm.sandboxPage = provider.pages.sandbox;
        vm.styleGuidePage = provider.pages.styleGuide;

        vm.logoPlaceholder = function() {
            if ( vm.logoText ) {
                return vm.logoText;
            } else {
                return 'mmdb';
            }
        }
    }
} )();
