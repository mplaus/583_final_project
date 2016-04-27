var app = angular.module('myApp', [ ]);

    app.controller('BaseController', ['$http', function ($http) {
        
         var _this = this;
         
         function makeTable() {
            this.data = [ ];
         }
         
        function  changeTable() {
            this.data = [];
            
        }
    
    
    
     //On document ready 2015 data is chosen from the default status of the selector then injected into table
        $( "#selectYear" ).ready(function() {
         makeTable();
         pickYear();
       });
     
     //When user changes the year selector, deletes old table and loads new data set and injects data into new table
      $( "#selectYear" ).change(function() {
        //$('.ng-binding').remove();
        changeTable();
        pickYear();
      });

    
    
    //function allows user to pick year of data to load
    function pickYear() {
        
        if (selectYear.options[selectYear.selectedIndex].value === "data-2015" ) {
            
        
        //loads 2015 data
        $http.get('../data/table_2015.json')
        .success(function(data) {
            _this.data = data;
            console.log(data);
            //return data
        })
        .error(function(msg) {
            console.log("Error");
        })
        }

        else if (selectYear.options[selectYear.selectedIndex].value === "data-2014" ) {
            
        
        //loads 2014 data
        $http.get('../data/table_2014.json')
        .success(function(data) {
            _this.data = data;
            console.log(data);
            //return data
        })
        .error(function(msg) {
            console.log("Error");
        })
        }
    };
    
    //toggle function
this.column = "FULL_NAME";
 
this.toggle = false;

this.toggleIt = function(column) {
   
   
   if (this.column == column) {
     this.toggle = !this.toggle;
   };
   this.column = column;
}


}]);
    
    