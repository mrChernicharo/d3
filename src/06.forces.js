import * as d3 from 'd3';
import { attrs } from 'd3-selection-multi';

// ================================ aula 36 ================================----
// ================================ [Force Simulation] ================================---

/**
 * 
y: -30.108583436678796
__proto__: Object
3: {id: "Point3", index: 3, x: 17.993541281697, y: 26.778090274320007, vy: -2.9398935803636676e-11, …}
4: {id: "PointA", index: 4, x: -22.93150814525467, y: -4.415710149497656, vy: 2.0450370309699865e-12, …}
5: {id: "PointB", index: 5, x: 6.641184567027773, y: -9.461088745276419, vy: -1.3322368223401184e-11, …}
6: {id: "PointC", index: 6, x: -7.534717871826286, y: 21.331888747462987, vy: 3.781994482469776e-11, …}
length: 7
 */

// const dim = {
//   width: 600,
//   height: 400,
// };
// const svg = d3.select('body').append('svg').style('background', 'lightgrey').attrs(dim);

// let dataset = {
//   nodes: [
//     { id: 'Point0' },
//     { id: 'Point1' },
//     { id: 'Point2' },
//     { id: 'Point3' },
//     { id: 'PointA' },
//     { id: 'PointB' },
//     { id: 'PointC' },
//   ],
//   links: [
//     { source: 'Point1', target: 'Point0' },
//     { source: 'Point2', target: 'Point0' },
//     { source: 'Point3', target: 'Point0' },
//     { source: 'Point0', target: 'PointA' },
//     { source: 'PointB', target: 'PointA' },
//     { source: 'PointC', target: 'PointA' },
//   ],
// };

// // criar simulação de
// let sim = d3.forceSimulation();

// sim.nodes(dataset.nodes);

// console.log(sim.nodes());

// let nodes = svg
//   .append('g')
//   .selectAll('circle')
//   .data(dataset.nodes)
//   .enter()
//   .append('circle')
//   .attrs({ r: 10 });

// let links = svg
//   .append('g')
//   .selectAll('line')
//   .data(dataset.links)
//   .enter()
//   .append('line')
//   .attrs({ stroke: 'black' });

// // tick -> intervalo no internal clock da animação
// sim.on('tick', function (d) {
//   nodes.attrs({
//     cx: (d) => d.x,
//     cy: (d) => d.y,
//   });
//   links.attrs({
//     x1: (d) => d.source.x,
//     y1: (d) => d.source.y,
//     x2: (d) => d.target.x,
//     y2: (d) => d.target.y,
//   });
// });

// // apesar do desenho estar "pronto", precisamos criar uma force
// sim.force(
//   'link',
//   d3.forceLink(dataset.links).id((d) => d.id)
// );

// ================================ aula 36 ================================----
// ================================ [Forces] ================================---

// const dim = {
//   width: 600,
//   height: 400,
// };
// const svg = d3.select('body').append('svg').style('background', 'lightgrey').attrs(dim);

// let dataset = {
//   nodes: [
//     { id: 'Point0' },
//     { id: 'Point1' },
//     { id: 'Point2' },
//     { id: 'Point3' },
//     { id: 'PointA' },
//     { id: 'PointB' },
//     { id: 'PointC' },
//   ],
//   links: [
//     { source: 'Point1', target: 'Point0', value: 20 },
//     { source: 'Point2', target: 'Point0', value: 60 },
//     { source: 'Point3', target: 'Point0', value: 100 },
//     { source: 'Point0', target: 'PointA', value: 200 },
//     { source: 'PointB', target: 'PointA', value: 130 },
//     { source: 'PointC', target: 'PointA', value: 90 },
//   ],
// };

// // criar simulação de
// let sim = d3.forceSimulation();

// sim.nodes(dataset.nodes);

// console.log(sim.nodes());

// let nodes = svg
//   .append('g')
//   .selectAll('circle')
//   .data(dataset.nodes)
//   .enter()
//   .append('circle')
//   .attrs({ r: 10 });

// let links = svg
//   .append('g')
//   .selectAll('line')
//   .data(dataset.links)
//   .enter()
//   .append('line')
//   .attrs({ stroke: 'black' });

// // tick -> intervalo no internal clock da animação
// sim.on('tick', function (d) {
//   nodes.attrs({
//     cx: (d) => d.x,
//     cy: (d) => d.y,
//   });
//   links.attrs({
//     x1: (d) => d.source.x,
//     y1: (d) => d.source.y,
//     x2: (d) => d.target.x,
//     y2: (d) => d.target.y,
//   });
// });

// // apesar do desenho estar "pronto", precisamos criar uma force
// sim
//   .force('center', d3.forceCenter(300, 200))
//   .force('collide', d3.forceCollide(60))
//   .force('nanyBody', d3.forceManyBody())
//   .force('radial', d3.forceRadial(100, 300, 200)) // r, x, y
//   .force('xForce', d3.forceX())
//   .force('yForce', d3.forceY())
//   .force(
//     'link',
//     d3.forceLink(dataset.links).id((d) => d.id)
//   );

// sim.force('link').distance((d) => d.value);

// sim.force('radial').strength(0.2);
// sim.force('xForce').strength(0.6);
// sim.force('yForce').strength(1.2);

// ================================ aula 36 ================================----
// ================================ [Force Simulation - Drag] ================================---

const dim = {
  width: 600,
  height: 400,
};
const svg = d3.select('body').append('svg').style('background', 'lightgrey').attrs(dim);

let dataset = {
  nodes: [
    { id: 'Point0' },
    // { id: 'Point1' },
    { id: 'Point2' },
    { id: 'Point3' },
    { id: 'PointA' },
    { id: 'PointB' },
    { id: 'PointC' },
  ],
  links: [
    // { source: 'Point1', target: 'Point0', value: 20 },
    { source: 'Point2', target: 'Point0', value: 60 },
    { source: 'Point3', target: 'Point0', value: 100 },
    { source: 'Point0', target: 'PointA', value: 200 },
    { source: 'PointB', target: 'PointA', value: 130 },
    { source: 'PointC', target: 'PointA', value: 90 },
  ],
};

// criar simulação de
let sim = d3.forceSimulation();

sim.nodes(dataset.nodes);

// console.log(sim.nodes());

let drag = d3
  .drag()
  .on('start', startDragging)
  .on('drag', dragging)
  .on('end', endDragging);

let nodes = svg
  .append('g')
  .selectAll('circle')
  .data(dataset.nodes)
  .enter()
  .append('circle')
  .attrs({ r: 10 })
  .call(drag);

let links = svg
  .append('g')
  .selectAll('line')
  .data(dataset.links)
  .enter()
  .append('line')
  .attrs({ stroke: 'black' });

// tick -> intervalo no internal clock da animação
sim.on('tick', function (d) {
  nodes.attrs({
    cx: (d) => d.x,
    cy: (d) => d.y,
  });
  links.attrs({
    x1: (d) => d.source.x,
    y1: (d) => d.source.y,
    x2: (d) => d.target.x,
    y2: (d) => d.target.y,
  });
});

sim
  .force('center', d3.forceCenter(300, 200))
  .force('collide', d3.forceCollide(30))
  .force('manyBody', d3.forceManyBody())
  .force('radial', d3.forceRadial(150, 300, 200))
  .force('xForce', d3.forceX())
  .force('yForce', d3.forceY())
  .force(
    'link',
    d3.forceLink(dataset.links).id((d) => d.id)
  );

sim.force('link').distance((d) => d.value);
sim.force('radial').strength(0.5);
sim.force('xForce').strength(0.29);
sim.force('yForce').strength(0.18);

// Dragging

function startDragging(d) {
  if (!d3.event.active) sim.alphaTarget(0.009).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragging(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function endDragging(d) {
  if (!d3.event.active) sim.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}

// ================================ aula 36 ================================----
// ================================ [Forces] ================================---
