var margin = {top: 20, right: 20, bottom: 30, left: 40};
var width = 1000 - margin.left - margin.right;
var height = 700 - margin.top - margin.bottom;

var svg = d3.select('.container').append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
    //transform: translate(40, 20);

var scaleX = d3.scale.ordinal()
    .rangeRoundBands([0, width], 0.2);

var scaleY = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(scaleX)
    .orient('bottom');

var yAxis = d3.svg.axis()
    .scale(scaleY)
    .orient('left')
    .ticks(15, '%');

d3.json("../data/change.json", function(err, data) {
    if (err) throw error;

   /*data.forEach(function(d) {
        for(var i in d) {
            d[i] = Number(d[i].replace(/[^0-9\.]+/g,""));
            if (i === "year") {
                var tmp = new Date();
                d[i] = tmp.setYear(d[i]);
            }
        }
    }); */

    console.log(data);
    console.log("hi");

    scaleX.domain(data.map(function(d) { return d.posititon }));
    scaleY.domain([0, d3.max(data, function(d) { return d.percent; }) + 0.1]);

    svg.append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(0, ' + height + ')')
        .call(xAxis);

    svg.append('g')
        .attr('class', 'y axis')
        .call(yAxis);

    svg.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
            .attr('class', 'bar')
            .attr('x', function(d) { return scaleX(d.position); })
            .attr('width', scaleX.rangeBand())
            .attr('y', function(d) { return scaleY(d.percent); })
            .attr('height', function(d) { return height - scaleY(d.percent); })
            .attr('fill', '#DE352E')
            .on('mouseover', function(d) {
                d3.select('.tooltip')
                    .html(d.team + "<br />" + Math.round(d.percent * 100) + "%")
                    .style('opacity', 1);
            })
            .on('mouseout', function(d) {
                d3.select('.tooltip')
                    .style('opacity', 0);
            })
            .on('mousemove', function(d) {
                console.log(d3.event);
                d3.select('.tooltip')
                    .style('left', (d3.event.clientX + 20) + 'px')
                    .style('top', (d3.event.clientY) + 'px');
            });

});