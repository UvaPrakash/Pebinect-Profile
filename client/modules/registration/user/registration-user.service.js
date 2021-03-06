/* 
* Description: Service for User Registration
* Created on: Dec 27, 2015 
* Modified on: Jan 01, 2016
* Modified by: Uva
* Version: 1.0
* Changes made since last version:
*/

(function () {

    app.factory('userService', ['$q', '$http', userService]);

    function userService($q, $http) {
        return {
            userRegistration: userRegistration,
        }
        
        function userRegistration(data) {
            return $http({
                method: 'POST',
                data: data,
                url: HOST + USER_REGISTRATION
            }).then(function (response) {
                return response.data;
            }).catch(function(error){
               return error.data; 
            });
        }
    }
}());