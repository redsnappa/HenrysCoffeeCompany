angular.module('hccApp').controller('ContactUsController', ['$scope','$http',function($scope,$http) {


    $scope.name = "";
    $scope.message = "";
    $scope.email = "";
    $scope.submitted = false;
    $scope.sending = false;
    $scope.result = "";

    $scope.submitForm = function(){

        var hostname="http://ec2-54-154-172-41.eu-west-1.compute.amazonaws.com:8080/hello-henry";
        $scope.submitted = true;
        $scope.sending = true;
        $http({
            method : "POST",
            url : hostname,
            data: { name: $scope.name, message: $scope.message,  email: $scope.email}
        }).then(function mySuccess(response) {
            $scope.sending = false;
            $scope.name = "";
            $scope.message = "";
            $scope.email = "";
            $scope.result = "Message was sent!";
        }, function myError(response) {
            $scope.result = "Message couldn't be send at this time, try again later";
            $scope.sending = false;
        });
    }



}]);