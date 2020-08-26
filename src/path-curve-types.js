import * as d3 from 'd3';
import { attrs } from 'd3-selection-multi';

let dim = { width: 600, height: 400 };
let svg = d3
  .select('body')
  .append('svg')
  .style('background', 'lightgrey')
  .attrs(dim)
  .on('click', function (d) {
    ix++;
    ix = ix === curves.length ? 0 : ix;
    lineGenerator.curve(curves[ix][1]);
    svg.select('path').attr('d', lineGenerator(dataset));
    svg.select('text').text(curves[ix][0]);
  });

let dataset = [
  [50, 200],
  [150, 100],
  [420, 50],
  [150, 340],
  [200, 120],
  [350, 300],
  [460, 120],
  [420, 380],
];

let points = svg
  .append('g')
  .selectAll('circle')
  .data(dataset)
  .enter()
  .append('circle')
  .attrs({ r: 5, cx: (d) => d[0], cy: (d) => d[1], fill: 'green' });

svg.append('text').attrs({ x: 20, y: 20 });

let lineGenerator = d3.line();
lineGenerator.x((d) => d[0]);
lineGenerator.y((d) => d[1]);

lineGenerator.curve(d3.curveCardinal.tension(0));

svg.append('path').attrs({
  d: lineGenerator(dataset),
  stroke: 'black',
  'stroke-width': 2,
  fill: 'none',
});

let ix = 0;
let curves = [
  ['curveBasis', d3.curveBasis],
  ['curveBasisClosed', d3.curveBasisClosed],
  ['curveBasisOpen', d3.curveBasisOpen],
  ['curveBundle', d3.curveBundle],
  ['curveCardinal', d3.curveCardinal],
  ['curveCardinalClosed', d3.curveCardinalClosed],
  ['curveCardinalOpen', d3.curveCardinalOpen],
  ['curveCatmullRom', d3.curveCatmullRom],
  ['curveCatmullRomClosed', d3.curveCatmullRomClosed],
  ['curveCatmullRomOpen', d3.curveCatmullRomOpen],
  ['curveLinear', d3.curveLinear],
  ['curveLinearClosed', d3.curveLinearClosed],
  ['curveMonotoneX', d3.curveMonotoneX],
  ['curveMonotoneY', d3.curveMonotoneY],
  ['curveNatural', d3.curveNatural],
  ['curveStep', d3.curveStep],
  ['curveStepAfter', d3.curveStepAfter],
  ['curveStepBefore', d3.curveStepBefore],
];
