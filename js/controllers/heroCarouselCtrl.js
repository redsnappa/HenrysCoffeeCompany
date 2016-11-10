angular.module('hccApp').controller('HeroCarouselCtrl',['$scope','$window', function ($scope, $window) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.slides = [];


    $scope.addSlides = function() {

            $scope.slides.push({
                    image: 'images/catspyjamas.jpg',
                    title: "",
                    text: "",
                    active: true
                },

                {
                    image: 'images/strategy.jpg',
                    title: "",
                    text: ""
                },
                {
                    image: 'images/blowyoursocksoff.jpg',
                    title: "",
                    text: ""
                },
                {
                    image: 'images/ethics.jpg',
                    title: "",
                    text: ""
                });

    };

    $scope.addSlides();


}]);