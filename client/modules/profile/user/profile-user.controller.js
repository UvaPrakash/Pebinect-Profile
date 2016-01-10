/* 
* Description:
* Created on: Dec 27, 2015 
* Modified on:
* Modified by:  
* Version: 
* Changes made since last version:
*/

(function () {

    angular.module('app').controller('profileController', ['$scope', '$location','profileService', '$state', profileController]);
    
    function profileController($scope,$location,profileService, $state){
        $scope.user = "Testing";
        
        //profile submit is handled here
        $scope.profileSubmit = function () {
            var data = {
                "user_name":$scope.profile_data.user_name,
                "designation":$scope.profile_data.designation,
                "about":$scope.profile_data.about
            };
            profileService.updateProfile(data).then(function(response) {
                console.log(response);
            });
        }
    }
}());


