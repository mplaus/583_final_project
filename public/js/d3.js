//ajax call for json data
d3.json("../data/salary_data.json", function(error, data) {
  if (error) throw error;
 
      		

//reads data as a number    
    data.forEach(function(d) {
        for(var i in d) {
            d[i] = Number(d[i].replace(/[^0-9\.]+/g,""));
            if (i === "year") {
                var tmp = new Date();
                d[i] = tmp.setYear(d[i]);
            }
        }
    });
    
     //this is how user changes scale of y axis, menuSelector is the ID of graph selector in html
     var menuThing = document.getElementById("menuSelector");
    
	//on document loading runs the menu select function which chooses y scale then generates the graph
     $( "#menuSelector" ).ready(function() {
      menuSelect(this.value);
      generateGraph();
    });
     
	 //on selector change of menuSelector clears graph, selects y scale, and generates new graph
    $( "#menuSelector" ).change(function() {
      d3.select("svg").remove();
      menuSelect(this.value);
      generateGraph();
    });
    
    //function to choose y scale
    function menuSelect(value) {
        
  
    //menuThing.selectedIndex will return the current selected index of the options
    
    console.log( menuThing.options[menuThing.selectedIndex].value);
    console.log(menuSelector);
    

  
   }
   
   //function to generate graph
 function generateGraph() {
  var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var parseDate = d3.time.format("%d-%b-%y").parse,
    bisectDate = d3.bisector(function(d) { return d.year; }).left,
    formatValue = d3.format(",.2f"),
    formatCurrency = function(d) { return "$" + formatValue(d); };

var x = d3.time.scale()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var line = d3.svg.line()
    .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.average_faculty); }); // Line tracking Average Faculty Salary

var line2 = d3.svg.line()
    .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.median_faculty); }); // Line tracking Median Faculty Salary
    
var line4 = d3.svg.line()
    .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.in_state_tuition); }); // Line tracking In state Tuition
    
var line5 = d3.svg.line()
    .x(function(d) { return x(d.year); })
    .y(function(d) { return y(d.out_state_tuition); }); // Line tracking Out of state tuition
    
 //Menu selection
    
//setting margins
var svg = d3.select(".graph1").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//set graph backgoround color   
svg.append("rect")
    .attr("width", "93%")
    .attr("height", "90%")
    .attr("fill", "white");
    
//sets x and y axis
  x.domain(d3.extent(data, function(d) { return +d.year; }));
  y.domain(d3.extent([0, d3.max(data, function(d) { return d[menuThing.options[menuThing.selectedIndex].value];  } )]));
  
//label for x axis
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
      
      
//label for y axis
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Price ($)");
      
//path for first line graph
  svg.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("d", line)
  
  svg.append("path")      // Add the line2 path.
        .attr("class", "line")
        .style("stroke", "black")
        .attr("d", line2(data));
 
  svg.append("path")      // Add the line4 path.
        .attr("class", "line")
        .style("stroke", "blue")
        .attr("d", line4(data));
        
        
  svg.append("path")      // Add the line5 path.
        .attr("class", "line")
        .style("stroke", "green")
        .attr("d", line5(data))
        
        // mouseover
        var focus = svg.append("g")
            .attr("class", "focus")
            .style("display", "none");
      
        focus.append("circle")
            .attr("r", 4.5);
      
        focus.append("text")
            .attr("x", 9)
            .attr("dy", ".35em")
            .style("fill", "gray");
  
}
    
});



