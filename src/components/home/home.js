( function() {
    'use strict';

    angular.module( 'mmdb.toolbar' )

    .component( 'home', {
        templateUrl : 'components/home/home.html',
        bindings : {},
        controller : [ HomeCtrl ]
    } );

    function HomeCtrl() {
        var vm = this;
    }
} )();
