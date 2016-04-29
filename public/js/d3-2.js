var margin = {top: 20, right: 20, bottom: 50, left: 40},
    width = 960 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10, "%");
    
var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>" + d.position + "</strong> <span style='color:red'>" + d.percent * 100 + "%" + "</span>";
  })

var svg = d3.select(".graph2").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    //set graph backgoround color   
svg.append("rect")
    .attr("width", "94%")
    .attr("height", "88.5%")
    .attr("fill", "white");
    
svg.call(tip);

d3.csv("../data/change.csv", function(error, data) {
  if (error) throw error;

  x.domain(data.map(function(d) { return d.position; }));
  y.domain([0, d3.max(data, function(d) { return d.percent; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Percent Change since the year 2000");

  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.position); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.percent); })
      .attr("height", function(d) { return height - y(d.percent); })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide);

    
});

