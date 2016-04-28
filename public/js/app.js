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
        
        else if (selectYear.options[selectYear.selectedIndex].value === "data-2013" ) {
            
        
        //loads 2014 data
        $http.get('../data/table_2013.json')
        .success(function(data) {
            _this.data = data;
            console.log(data);
            //return data
        })
        .error(function(msg) {
            console.log("Error");
        })
        }
        
        else if (selectYear.options[selectYear.selectedIndex].value === "data-2012" ) {
            
        
        //loads 2014 data
        $http.get('../data/table_2012.json')
        .success(function(data) {
            _this.data = data;
            console.log(data);
            //return data
        })
        .error(function(msg) {
            console.log("Error");
        })
        }
        
        else if (selectYear.options[selectYear.selectedIndex].value === "data-2011" ) {
            
        
        //loads 2014 data
        $http.get('../data/table_2011.json')
        .success(function(data) {
            _this.data = data;
            console.log(data);
            //return data
        })
        .error(function(msg) {
            console.log("Error");
        })
        }
        
        else if (selectYear.options[selectYear.selectedIndex].value === "data-2010" ) {
            
        
        //loads 2014 data
        $http.get('../data/table_2010.json')
        .success(function(data) {
            _this.data = data;
            console.log(data);
            //return data
        })
        .error(function(msg) {
            console.log("Error");
        })
        }
        
        else if (selectYear.options[selectYear.selectedIndex].value === "data-2009" ) {
            
        
        //loads 2014 data
        $http.get('../data/table_2009.json')
        .success(function(data) {
            _this.data = data;
            console.log(data);
            //return data
        })
        .error(function(msg) {
            console.log("Error");
        })
        }
        
        else if (selectYear.options[selectYear.selectedIndex].value === "data-2008" ) {
            
        
        //loads 2014 data
        $http.get('../data/table_2008.json')
        .success(function(data) {
            _this.data = data;
            console.log(data);
            //return data
        })
        .error(function(msg) {
            console.log("Error");
        })
        }
        
        else if (selectYear.options[selectYear.selectedIndex].value === "data-2007" ) {
            
        
        //loads 2014 data
        $http.get('../data/table_2007.json')
        .success(function(data) {
            _this.data = data;
            console.log(data);
            //return data
        })
        .error(function(msg) {
            console.log("Error");
        })
        }
        else if (selectYear.options[selectYear.selectedIndex].value === "data-2006" ) {
            
        
        //loads 2014 data
        $http.get('../data/table_2006.json')
        .success(function(data) {
            _this.data = data;
            console.log(data);
            //return data
        })
        .error(function(msg) {
            console.log("Error");
        })
        }
        else if (selectYear.options[selectYear.selectedIndex].value === "data-2005" ) {
            
        
        //loads 2014 data
        $http.get('../data/table_2005.json')
        .success(function(data) {
            _this.data = data;
            console.log(data);
            //return data
        })
        .error(function(msg) {
            console.log("Error");
        })
        }
        else if (selectYear.options[selectYear.selectedIndex].value === "data-2004" ) {
            
        
        //loads 2014 data
        $http.get('../data/table_2004.json')
        .success(function(data) {
            _this.data = data;
            console.log(data);
            //return data
        })
        .error(function(msg) {
            console.log("Error");
        })
        }
        else if (selectYear.options[selectYear.selectedIndex].value === "data-2003" ) {
            
        
        //loads 2014 data
        $http.get('../data/table_2003.json')
        .success(function(data) {
            _this.data = data;
            console.log(data);
            //return data
        })
        .error(function(msg) {
            console.log("Error");
        })
        }
        else if (selectYear.options[selectYear.selectedIndex].value === "data-2002" ) {
            
        
        //loads 2014 data
        $http.get('../data/table_2002.json')
        .success(function(data) {
            _this.data = data;
            console.log(data);
            //return data
        })
        .error(function(msg) {
            console.log("Error");
        })
        }
        else if (selectYear.options[selectYear.selectedIndex].value === "data-2001" ) {
            
        
        //loads 2014 data
        $http.get('../data/table_2001.json')
        .success(function(data) {
            _this.data = data;
            console.log(data);
            //return data
        })
        .error(function(msg) {
            console.log("Error");
        })
        }
        else {
            
        
        //loads 2014 data
        $http.get('../data/table_2000.json')
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
    
    