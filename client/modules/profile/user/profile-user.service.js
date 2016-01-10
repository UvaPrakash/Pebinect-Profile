/* 
* Description:
* Created on: Dec 27, 2015 
* Modified on:
* Modified by:  
* Version: 
* Changes made since last version:
*/

(function () {

    app.factory('profileService', ['$q', '$http', profileService]);

    function profileService($q, $http) {
        return {
            updateProfile: updateProfile,
        }

        function updateProfile(data) {
            return $http({
                method: 'POST',
                data: data,
                url: HOST + USER_PROFILE
            }).then(function (response) {
                return response.data;
            }).catch(function(error){
               return error.data; 
            });
        }

    }
}());