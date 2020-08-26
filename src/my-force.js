import * as d3 from 'd3';
import { attrs } from 'd3-selection-multi';

let dim = { width: 600, height: 400 };
let svg = d3
  .select('body')
  .append('svg')
  .style('background', 'lightgrey')
  .attrs(dim)
  .on('click', clicked);

let colors = ['tomato', '#10ae44'];
let dataset = d3.range(40).map(function () {
  return {
    r: Math.round(Math.random() * 10) + 5,
    color: colors[Math.round(Math.random())],
  };
});

// console.log(dataset);

let nodes = svg
  .append('g')
  .selectAll('circle')
  .data(dataset)
  .enter()
  .append('circle')
  .attrs({
    r: (d) => d.r,
    fill: (d) => d.color,
    stroke: 'black',
  });

let labels = svg
  .append('g')
  .selectAll('circle')
  .data(dataset)
  .enter()
  .append('text')
  .attrs({
    x: (d) => d.x,
    y: (d) => d.y,
    fill: 'white',
    'font-size': 8,
    'text-anchor': 'middle', // end, middle, start
    'alignment-baseline': 'central', // middle, hanging, central
    'pointer-events': 'none',
  })
  .text((d, i) => i);

console.log(labels);

let sim = d3.forceSimulation(dataset).on('tick', function (d) {
  nodes.attrs({
    cx: (d) => d.x,
    cy: (d) => d.y,
  });
  labels.attrs({
    x: (d) => d.x,
    y: (d) => d.y,
  });
});

sim
  .force('yForce', d3.forceY(200))
  .force('center', d3.forceX(300))
  .force('right', d3.forceX(500).strength(0))
  .force('left', d3.forceX(100).strength(0))
  .force(
    'collide',
    d3.forceCollide().radius((d) => d.r * 1.1)
  );

sim.force('right').initialize(
  dataset.filter(function (d) {
    return d.color === colors[1];
  })
);
sim.force('left').initialize(
  dataset.filter((d) => {
    return d.color === colors[0];
  })
);

sim.alphaDecay(0.08);
sim.velocityDecay(0.2);

let allInCenter = true;
function clicked() {
  allInCenter = !allInCenter;
  if (allInCenter) {
    sim.force('right').strength(0);
    sim.force('left').strength(0);
    sim.force('center').strength(0.1);
    // sim.force('collide').strength(0.4);
    sim.alpha(1).restart();
  } else {
    sim.force('right').strength(0.3);
    sim.force('left').strength(0.1);
    sim.force('center').strength(0);
    sim.alpha(1).restart();
  }
}

// alignment-baseline:
// auto | baseline | before-edge | text-before-edge | middle | central | after-edge | text-after-edge | ideographic | alphabetic | hanging | mathematical | top | center | bottom
