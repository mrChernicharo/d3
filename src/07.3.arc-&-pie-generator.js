import * as d3 from 'd3';
import { attrs } from 'd3-selection-multi';

let dim = { width: 600, height: 400 };
let svg = d3.select('body').append('svg').style('background', 'lightgrey').attrs(dim);

let arcGen = d3.arc();
arcGen.innerRadius(40).outerRadius(120).cornerRadius(10);

let data = [10, 15, 35, 40, 42, 50];
let colors = d3.schemeOranges[data.length];

let arcs = d3.pie()(data);
// arcs = arcs(data)
console.log(arcs);

svg
  .selectAll('path')
  .data(arcs)
  .enter()
  .append('path')
  .attrs({
    d: arcGen, // same as 'd': d=>arcGen(d)
    stroke: 'black',
    fill: (d, i) => colors[i],
    transform: 'translate(300,200)',
  });

arcs.forEach((d) => {
  console.log(arcGen.centroid(d));
});

svg
  .selectAll('circle')
  .data(arcs)
  .enter()
  .append('circle')
  .attrs({
    r: 2,
    cx: (d) => arcGen.centroid(d)[0],
    cy: (d) => arcGen.centroid(d)[1],
    transform: 'translate(295,195)',
  });
svg
  .selectAll('text')
  .data(arcs)
  .enter()
  .append('text')
  .attrs({
    x: (d) => arcGen.centroid(d)[0],
    y: (d) => arcGen.centroid(d)[1],
    transform: 'translate(298,201)',
    fill: 'black',
    'font-size': 12,
    'text-anchor': 'start', // end, middle, start
    'alignment-baseline': 'text-after-edge', // middle, hanging, central,  after-edge | text-after-edge
  })
  .text((d) => d.value);
