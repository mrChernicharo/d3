import * as d3 from 'd3';
import { attrs } from 'd3-selection-multi';
import { color } from 'd3';

// ================================ aula 22 ================================----
// ================================ [Continuous Scales: Linear, Pow, Sqrt, Log] ================================---

// const dim = {
//   width: 600,
//   height: 400,
// };

// const svgCanvas = d3
//   .select('body')
//   .append('svg')
//   .style('background', 'lightgray')
//   .attrs(dim);

// let data = [5, 12, 32, 80, 108, 152, 320, 512, 700, 825];

// let scale = d3.scaleLinear().domain(d3.extent(data)).rangeRound([50, 551]);
// // let scale = d3.scalePow().domain(d3.extent(data)).rangeRound([50, 551]);
// // let scale = d3.scalePow().domain(d3.extent(data)).rangeRound([50, 551]).exponent();
// // let scale = d3.scalePow().domain(d3.extent(data)).rangeRound([50, 551]).exponent(0.5);
// // let scale = d3.scaleSqrt().domain(d3.extent(data)).rangeRound([50, 551]);
// // let scale = d3.scaleLog().domain(d3.extent(data)).rangeRound([50, 551]);
// // let scale = d3.scaleLog().domain(d3.extent(data)).rangeRound([50, 551]).base(110);

// svgCanvas
//   .selectAll('circle')
//   .data(data)
//   .enter()
//   .append('circle')
//   .attrs({ cx: (d) => scale(d), cy: 200, r: 10, opacity: 0.5 });

// // console.log(scale(5));
// // console.log(scale(10));
// // console.log(scale(300));
// // console.log(scale(825));
// // console.log(scale(2000));

// ================================ aula 22 ================================----
// ================================ [Quantize Scales] ================================---

const dim = {
  width: 600,
  height: 400,
};

const svgCanvas = d3
  .select('body')
  .append('svg')
  .style('background', 'lightgray')
  .attrs(dim);

let data = [5, 12, 32, 80, 108, 152, 320, 512, 700, 825];

let scale = d3.scaleLinear().domain(d3.extent(data)).rangeRound([50, 551]);

let colorize = d3.scaleQuantize().domain(d3.extent(data)).range(['red', 'blue', 'green']);
// let colorize = d3.scaleQuantile().domain(data).range(['red', 'blue', 'green']);
// let colorize = d3.scaleThreshold().domain([200, 400]).range(['red', 'blue', 'green']);

svgCanvas
  .selectAll('circle')
  .data(data)
  .enter()
  .append('circle')
  .attrs({ cx: (d) => scale(d), cy: 200, r: 10, opacity: 0.5, fill: (d) => colorize(d) });

// ================================ aula 23 ================================----
// ================================ [] ================================---

// ================================ aula 24 ================================----
// ================================ [] ================================---

// ================================ aula 25 ================================----
// ================================ [] ================================---
