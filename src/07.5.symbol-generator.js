import * as d3 from 'd3';
import { attrs } from 'd3-selection-multi';

const svg = d3.select('body').append('svg').style('background', 'lightgrey').attrs({
  width: 600,
  height: 400,
});

let g = svg.append('g').attr('transform', 'translate(0, 200)');

let pth = d3.symbol().size(3000); // <- size = square px

// let pth = d3.symbol().size(2000).type(d3.symbolCircle);
// let pth = d3.symbol().size(2000).type(d3.symbolDiamond);
// let pth = d3.symbol().size(2000).type(d3.symbolSquare);
// let pth = d3.symbol().size(2000).type(d3.symbolStar);
// let pth = d3.symbol().size(2000).type(d3.symbolTriangle);
// let pth = d3.symbol().size(2000).type(d3.symbolWye);

let shape = d3.scaleOrdinal(d3.symbols);
let scale = d3.scaleLinear([0, 6], [50, 550]);

g.selectAll('path')
  .data(d3.range(7))
  .enter()
  .append('path')
  .attrs({
    d: (d) => pth.type(shape(d))(),
    fill: (d) => d3.schemeSpectral[7][d],
    stroke: 'black',
    transform: (d) => 'translate(' + scale(d) + ', 0)',
  });
