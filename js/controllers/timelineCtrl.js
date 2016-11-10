angular.module('hccApp').controller('TimelineCtrl', function ($scope) {



    $scope.timelineItems = [];


    getTimelineItems = function(){
        $scope.timelineItems = [
            {
                "image": "images/cd-icon-location.svg",
                "alt" : "Location",
                "date": "March 1985",
                "text": ["Henry’s Papa (HP) starts work as the Scottish Sales manager at Matthew Algie in Glasgow.  " +
                "Matthew Algie is the largest independent coffee roaster in the UK. There are 5 members of the sales team in 1985. " +
                "Hugh Tollan, Tom Cardwell, Charlie Gemmell, Bill Thompson and Hamish Ross."]

            },
            {
                "image": "images/cd-icon-location.svg",
                "alt" : "Location",
                "date": "July 1985",
                "text": ["Whitbread acquires Costa"]
            },
            {
                "image": "images/cd-icon-location.svg",
                "alt" : "Location",
                "date": "October 1996",
                "text":["HP visits Seattle and Portland on a Matthew Algie coffee education tour.  HP is utterly astonished to find how popular coffee is with Seattleites. They carry coffee to go cups everywhere. " +
                "They even get into lifts towing luggage and carrying a cup of coffee!"]
            },
            {
                "image": "images/cd-icon-location.svg",
                "alt" : "Location",
                "date": "May 1998",
                "text":[ "Starbucks opens in the UK"]
            },
            {
                "image": "images/cd-icon-location.svg",
                "alt" : "Location",
                "date": "September 1998",
                "text":["Tinderbox Espresso Emporium opens in Byres Road Glasgow. Tinderbox is a collaboration between David Williamson and Carlo Ventisei. " +
                "Tinderbox really sets the bar for cutting edge coffee shops and attracts attention from the retailing community all over the UK."]
            },
            {
                "image": "images/cd-icon-location.svg",
                "alt" : "Location",
                "date": "April 2004",
                "text":["HP visits Honduras and picks a coffee cherry from a coffee bush on a coffee planatation!"]
            },
            {
                "image": "images/cd-icon-location.svg",
                "alt" : "Location",
                "date": "November  2005",
                "text":["HP joins Brodie Melrose Drysdale (Brodies) as Sales Director. Brodies are coffee roasters based in Edinburgh. The business has just been sold to Segafredo Zanetti, one of the worlds largest coffee companies." +
                " There are 4 members of the sales team in 2005. Steve Hills,  Sam Mathieson,  Ian Hannah and Neil Archer."]
            },
            {
                "image": "images/cd-icon-location.svg",
                "alt" : "Location",
                "date": "October 2014",
                "text":["Henry is born in Glasgow Royal Infirmary.  Henry weighs in at 9lbs 3 oz.  " +
                "His mum is called Laura, his dad is called Brian, his aunty is called Jill and his granny is called Margaret. " +
                "Henry’s Papa is also called Brian "]
            },
            {
                "image": "images/cd-icon-location.svg",
                "alt" : "Location",
                "date": "July 2015",
                "text":["Henry’s Coffee Company (HCC) is born in a residential garage in Falkirk.  " +
                "HCC sets out on a mission. To have fun, to be loved, to be outstanding and to be profitable. "]
            }

        ];
    };


    $scope.timelineBlockOut = function($el) {
        $el.addClass('is-hidden');


    };

    $scope.timelineBlockIn = function($el) {
        $el.removeClass('is-hidden');

    };

    $scope.timelineImgOut = function($el) {
        $el.addClass('is-hidden');
        $el.removeClass('bounce-in');
    };

    $scope.timelineImgIn = function($el) {

        $el.removeClass('is-hidden');
        $el.addClass('bounce-in');
    };

    $scope.timelineContentOut = function($el) {

        $el.addClass('is-hidden');
        $el.removeClass('bounce-in');
    };

    $scope.timelineContentIn = function($el) {
        $el.removeClass('is-hidden');
        $el.addClass('bounce-in');
    };


    //Init
    getTimelineItems();

});