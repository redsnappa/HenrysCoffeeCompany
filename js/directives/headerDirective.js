/**
 * Created by dan on 24/11/15.
 */

angular.module('hccApp').directive('henryHeader', function() {
        return {
            restrict: 'E',
            templateUrl: "js/templates/henryHeader.html",
            controller: "HeaderController"
        };
});


