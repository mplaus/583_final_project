var app = angular.module('myApp', [ ]);

    app.controller('BaseController', ['$http', function ($http) {
        
        this.salary_data_2015 = [ ];
        var _this = this;
    
    
     
     $( "#selectYear" ).ready(function() {
      pickYear();
    });
     
    
    
    //function allows user to pick year of data to load
    function pickYear() {
        
        if (selectYear.options[selectYear.selectedIndex].value === "data-2015" ) {
            
        
        
        $http.get('../data/2015_Salary_Data.json')
        .success(function(data) {
            _this.salary_data_2015 = data;
            console.log(data);
            return data
        })
        .error(function(msg) {
            console.log("Error");
        })
        }
    };
    
    //toggle function
this.column = "Name";
 
this.toggle = false;

this.toggleIt = function(column) {
   
   
   if (this.column == column) {
     this.toggle = !this.toggle;
   };
   this.column = column;
}

this.column = "Salary";
 
this.toggle = false;

this.toggleIt = function(column) {
   
   
   if (this.column == column) {
     this.toggle = !this.toggle;
   };
   this.column = column;
}


}]);
    
    