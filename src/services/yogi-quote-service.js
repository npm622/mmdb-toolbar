( function() {
    'use strict';

    angular.module( 'mmdb.toolbar' )

    .service( 'YogiQuoteService', [ 'mmdbToolbar', YogiQuoteService ] );

    function YogiQuoteService() {
        var vm = this;

        vm.random = function() {
            return vm.quotes[Math.floor( Math.random() * vm.quotes.length )];
        };

        vm.quotes = [ {
            line : "Always go to other people's funerals, otherwise they won't come to yours."
        }, {
            line : "When you come to a fork in the road, take it.",
        }, {
            line : "You can observe a lot by just watching.",
        }, {
            line : "It ain't over till it's over",
        }, {
            line : "It's like déjà vu all over again.",
        }, {
            line : "No one goes there nowadays, it’s too crowded.",
        }, {
            line : "A nickel ain't worth a dime anymore.",
        }, {
            line : "The future ain't what it used to be.",
        }, {
            line : "Baseball is ninety percent mental and the other half is physical.",
        }, {
            line : "We made too many wrong mistakes.",
        }, {
            line : "Congratulations. I knew the record would stand until it was broken.",
        }, {
            line : "You better cut the pizza in four pieces because I’m not hungry enough to eat six.",
        }, {
            line : "You wouldn’t have won if we’d beaten you.",
        }, {
            line : "I usually take a two-hour nap from one to four.",
        }, {
            line : "Never answer an anonymous letter.",
        }, {
            line : "Slump? I ain’t in no slump… I just ain’t hitting.",
        }, {
            line : "It gets late early out here.",
        }, {
            line : "If the people don’t want to come out to the ballpark, nobody’s going to stop them.",
        }, {
            line : "You’ve got to be very careful if you don’t know where you are going, because you might not get there.",
        }, {
            line : "It was impossible to get a conversation going, everybody was talking too much.",
        }, {
            line : "In baseball, you don’t know nothing.",
        }, {
            line : "I never said most of the things I said.",
        }, {
            line : "Take it with a grin of salt.",
        }, {
            line : "The towels were so thick there I could hardly close my suitcase.",
        }, {
            line : "Little League baseball is a very good thing because it keeps the parents off the streets.",
        }, {
            line : "If the world were perfect, it wouldn’t be.",
        } ];
    }
} )();
