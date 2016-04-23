var app = angular.module('myApp', [ ]);

    app.controller('BaseController', ['$http', function ($http) {
        
    this.salary_data_2015 = [ ];
    var _this = this;
    this.currentState = 0;
    
    $http.get('../data/2015_Salary_Data.json')
        .success(function(data) {
            _this.salary_data_2015 = data;
            console.log(data);
        })
        .error(function(msg) {
            console.log("Error");
        })




}]);