(function(){angular.module("mmdb.toolbar.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("components/mmdb-toolbar/mmdb-toolbar.html","<nav class=\"nav navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header mmdb-brand center-image\">\n            <a class=\"nav navbar-brand\" href=\"#/\"> <img alt=\"{{$ctrl.brandText}}\" src=\"{{$ctrl.brandImg}}\"></a>\n        </div>\n        <ul class=\"nav nav-tabs navbar-left\">\n        </ul>\n        <ul class=\"nav nav-pills navbar-right\">\n            <li><a ng-click=\"$ctrl.onTitoClick()\">tito</a></li>\n            <li><a ng-click=\"$ctrl.onYogiClick()\">yogi</a></li>\n            <li><a ng-click=\"$ctrl.onSandboxClick()\">sandbox</a></li>\n        </ul>\n    </div>\n</nav>");
$templateCache.put("components/sandbox/sandbox.html","feel free to play around here");
$templateCache.put("components/tito/tito.html","<div>\n    <h1 class=\"banner-title\">Meet Tito!</h1>\n    <img alt=\"Tito, sunmool! ... Tito! ... TITO BAP!!!\" ng-src=\"{{$ctrl.titoImg}}\" class=\"center-block img-circle tito\"/>\n</div>\n");
$templateCache.put("components/yogi/yogi.html","<div>\n	<h1 class=\"banner-title\">Yogi says...</h1>\n	<blockquote class=\"quote-box\">\n		<p class=\"quote-text\">{{$ctrl.quote.line}}</p>\n	</blockquote>\n</div>\n");}]);})();