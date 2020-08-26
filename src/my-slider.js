import * as d3 from 'd3';
import { attrs } from 'd3-selection-multi';

let dimensions = {
  width: 800,
  height: 400,
};

let myRange = d3.range(50, 751, 5);

let canvas = d3
  .select('body')
  .append('svg')
  .style('background', 'lightgrey')
  .attrs(dimensions);

let lineAttrs = {
  x1: (d) => d,
  y1: 200,
  x2: (d) => d,
  y2: (d, i) => (i % 10 === 0 ? 220 : 210),
  stroke: 'black',
};

let lines = canvas
  .selectAll('line')
  .data(myRange)
  .enter()
  .append('line')
  .attrs(lineAttrs);

let circleAttrs = {
  cx: 50,
  cy: 200,
  r: 20,
  fill: 'white',
  stroke: 'dodgerblue',
  'stroke-width': 3,
};
let circle = canvas.append('circle').attrs(circleAttrs);

let circleDrag = d3.drag();

circle.on('click', function (e) {
  let el = d3.select(this);
  el.attr('fill') === 'white' ? el.attr('fill', 'dodgerblue') : el.attr('fill', 'white');
});

circleDrag.on('start', function (e) {
  d3.select(this).attr('stroke-width', '12px');
});
circleDrag.on('drag', function (e) {
  let el = d3.select(this);
  el.attr('cx', parseInt(el.attr('cx')) + d3.event.dx);
  // el.attr('cy', parseInt(el.attr('cy')) + d3.event.dy);
});
circleDrag.on('end', function (e) {
  d3.select(this).attr('stroke-width', 3);
});

circle.call(circleDrag);
