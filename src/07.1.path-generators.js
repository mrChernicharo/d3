import * as d3 from 'd3';
import { attrs } from 'd3-selection-multi';

let dim = { width: 600, height: 400 };
let svg = d3.select('body').append('svg').style('background', 'lightgrey').attrs(dim);

let dataset = [
  [100, 200],
  [150, 100],
  [200, 150],
  [250, 300],
  [300, 120],
  [350, 280],
  [400, 100],
  [450, 250],
];

let points = svg
  .selectAll('circle')
  .data(dataset)
  .enter()
  .append('circle')
  .attrs({ cx: (d) => d[0], cy: (d) => d[1], r: 6, fill: 'red' });

// nosso gerador de linhas
let lineGenerator = d3.line();
lineGenerator.x((d) => d[0]);
lineGenerator.y((d) => d[1]);
lineGenerator.curve(d3.curveCardinal.tension(0.3));
// lineGenerator.curve(d3.curveNatural);
// lineGenerator.curve(d3.curveStep);

console.log(lineGenerator(dataset));

svg.append('path').attrs({
  d: lineGenerator(dataset),
  stroke: 'black',
  'stroke-width': 2,
  fill: 'none',
});
