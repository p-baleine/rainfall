
/**
 * Module dependencies.
 */

var d3 = require('d3'),
    topojson = require('topojson'),
    jpn = require('./jpn.json');

var width = 960,
    height = 1160;

var svg = d3.select('body').append('svg')
      .attr('width', width)
      .attr('height', height);

var projection = d3.geo.albers()
      .center([-10, 35.4])
      .rotate([210, 0])
      .parallels([50, 60])
      .scale(480 * 5)
      .translate([width / 2, height / 2]);

var path = d3.geo.path()
      .projection(projection);

var color = d3.scale.category20();

svg.append('path')
    .datum(topojson.feature(jpn, jpn.objects.states_jpn))
    .attr('d', path);

svg.selectAll('.subunit')
    .data(topojson.feature(jpn, jpn.objects.states_jpn).features)
  .enter().append('path')
    .attr("d", path)
    .style('fill', function(d, i) { return color(i); });
