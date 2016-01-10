/* 
* Description: Controller for user registration
* Created on: Dec 27, 2015 
* Modified on: Jan 01, 2016
* Modified by: Uva
* Version: 1.0
* Changes made since last version:
*/

(function () {

    app.controller('userController', ['$scope', '$location', 'userService', '$state' , '$mdToast', userController]);

    function userController($scope, $location, userService, $state,$mdToast) {
        
        //registration submit is handled here
        $scope.registrationSubmit = function () {
            var data = {
                "first_name":$scope.registration_data.first_name,
                "last_name":$scope.registration_data.last_name,
                "email":$scope.registration_data.email_id,
                "password":$scope.registration_data.password
            };
            userService.userRegistration(data).then(function(response) {
                console.log(response);
            });
        }
        
        //:todo check menu value from localstorage is null and if so call fetch menu service
        $scope.getMenuContent = function()
        {
            $scope.menuitems = [];
            
            // get menu from local storage
            $scope.menuitems = JSON.parse(window.localStorage.getItem("menuDetails"));
            
            // check if menu value is not equal to null;
            
        }
        
        $scope.registrationSubmit = function()
        {  
             var data = {"email":$scope.registration_data.email}
             userService.forgotPassword(data).then(function (response){
                   console.log(response);
             });
            
            
        }
       
    }

}());

