//declare the module hccApp
var hccApp = angular.module('hccApp',['ui.bootstrap','ui.router','ngAnimate','angular-scroll-animate','ngRetina'])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home',{
                url:'/home',
                templateUrl:'./js/templates/home.html'
            })
            .state('products',{
                url:'/products',
                redirectTo: 'coffee',
                templateUrl:'./js/templates/products.html'
            })
            .state('coffee',{
                url:'',
                parent: 'products',
                templateUrl:'./js/templates/products_coffee.html'
            })
            .state('tea',{
                url:'/tea',
                parent: 'products',
                templateUrl:'./js/templates/products_tea.html'
            })
            .state('baking',{
                url:'/baking',
                parent: 'products',
                templateUrl:'./js/templates/products_baking.html'
            })
            .state('swipii',{
                url:'/products/swipii',
                parent: 'products',
                templateUrl:'./js/templates/products_swipii.html'
            })
            .state('machines',{
                url:'/machines',
                parent: 'products',
                templateUrl:'./js/templates/products_machines.html'
            })
            .state('friends',{
                url:'/friends',
                templateUrl:'./js/templates/friends.html'
            })
            .state('how',{
                url:'/how_henrys_helps',
                templateUrl:'./js/templates/how_henrys_helps.html'
            })
            .state('our_story',{
                url:'/our_story',
                templateUrl:'./js/templates/timeline.html'
            })
            .state('contact',{
                url:'/contact',
                templateUrl:'./js/templates/contact.html'
            });


    });


hccApp.config(function(ngRetinaProvider) {
    ngRetinaProvider.setInfix('@2x');
});


// redirection engine (hack!)
hccApp.run(['$rootScope', '$state', function($rootScope, $state) {

    $rootScope.$on('$stateChangeStart', function(evt, to, params) {
        if (to.redirectTo) {
            evt.preventDefault();
            $state.go(to.redirectTo, params)
        }


        if (typeof(load_js) == "function") {
            load_js();
            console.log("Retina")
        }else{
            console.log("Nope");
        }



    });


}]);

var setHeightOfFeatures = function() {


    var featuresArray =  $(".feature");

    $.each(featuresArray, function(){
        $(this).height("auto");
    });

    var _array = featuresArray.map(function ()
    {
        return $(this).height();
    }).get();


    var maxHeight = Math.max.apply(Math,_array);
    $.each(featuresArray, function(){
        $(this).height(maxHeight);
    });
};


$( window ).resize(setHeightOfFeatures);

//timeline
jQuery(document).ready(function($){
    var timelineBlocks = $('.cd-timeline-block'),
        offset = 0.8;

    //hide timeline blocks which are outside the viewport
    hideBlocks(timelineBlocks, offset);

    //on scolling, show/animate timeline blocks when enter the viewport
    $(window).on('scroll', function(){
        (!window.requestAnimationFrame)
            ? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
            : window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
    });

    function hideBlocks(blocks, offset) {
        blocks.each(function(){
            ( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        });
    }

    function showBlocks(blocks, offset) {
        blocks.each(function(){
            ( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
        });
    }
});
