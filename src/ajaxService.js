angular.module('myApp')
    .factory('ajaxService', function ($http) {
        return $http.get('http://util.mw.metropolia.fi/ImageRekt/api/v2/users')
            .success(function (data) {
                return data;
            })
            .error(function (err) {
                return err;
            });
    });