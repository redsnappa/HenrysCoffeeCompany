angular.module('hccApp').controller('HeaderController', ['$scope', function($scope) {


    $scope.menuItems = [];


    getMenuItems = function(){
      $scope.menuItems = [
          {
              "text": "Products",
              "id": "10",
              "children": [],
              "link":"products"
          },
          {
              "text": "How Henry's Helps",
              "id": "20",
              "children": [],
              "link":"how"
          },
          {
              "text": "Who Henry's Helps",
              "id": "30",
              "children": [],
              "link":"friends"
          },
          {
              "text": "Our Story",
              "id": "41",
              "children": [],
              "link":"our_story"
          },
          {
              "text": "Contact",
              "id": "40",
              "children": [],
              "link":"contact"
          }
      ];
    };

    //Init
    getMenuItems();

}]);