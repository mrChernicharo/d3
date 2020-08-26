import * as d3 from 'd3';
import { attrs } from 'd3-selection-multi';

// ================================ aula 28 ================================----
// ================================ [Axis Generator] ================================---

// const dim = {
//   width: 600,
//   height: 400,
// };

// const svgCanvas = d3.select('body').append('svg').style('background', 'lightgray').attrs(dim);

// let data = [10, 29, 130, 240, 250, 360, 370, 610, 820, 480, 690, 510];
// let months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

// const scaleX = d3.scalePoint(months, [50, 550]); // ([domain], [range])

// const scaleY = d3.scaleLinear(d3.extent(data), [350, 50]); // ([domain], [range])

// let axisX = d3.axisBottom(scaleX);
// let axisY = d3.axisLeft(scaleY);

// svgCanvas.append('g').attr('transform', 'translate(0, 350)').call(axisX);
// svgCanvas.append('g').attr('transform', 'translate(50, 0)').call(axisY);

// ================================ aula 29 ================================----
// ================================ [Axis Styling] ================================---

// const dim = {
//   width: 600,
//   height: 400,
// };

// const svgCanvas = d3.select('body').append('svg').style('background', 'lightgray').attrs(dim);

// let data = [10, 29, 130, 240, 250, 360, 370, 610, 820, 480, 690, 510];
// let months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

// const scaleX = d3.scalePoint(months, [50, 550]); // ([domain], [range])

// const scaleY = d3.scaleLinear(d3.extent(data), [350, 50]); // ([domain], [range])

// let axisX = d3.axisBottom(scaleX);
// let axisY = d3.axisLeft(scaleY);

// // axisY.ticks(10);
// axisY.tickValues([40, 100, 300, 500, d3.max(data)]);
// // axisY.tickFormat((d) => '$ ' + d);
// axisX.tickSize(15);

// svgCanvas
//   .append('g')
//   .attr('transform', 'translate(0, 350)')
//   .call(axisX)
//   .selectAll('text')
//   .attrs({ 'font-size': 12, transform: 'translate(-24, 10), rotate(320)' });

// svgCanvas.append('g').attr('transform', 'translate(50, 0)').call(axisY);

// ================================ aula 30 ================================----
// ================================ [Grid] ================================---

const dim = {
  width: 600,
  height: 400,
};

const svgCanvas = d3.select('body').append('svg').style('background', 'lightgray').attrs(dim);

let data = [10, 29, 130, 240, 250, 360, 370, 610, 820, 480, 690, 510];
let months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

const scaleX = d3.scalePoint(months, [50, 550]); // ([domain], [range])

const scaleY = d3.scaleLinear(d3.extent(data), [350, 50]); // ([domain], [range])

let axisX = d3.axisBottom(scaleX);
let axisY = d3.axisLeft(scaleY);
let gridY = d3.axisLeft(scaleY);

axisY.ticks(10);
// axisY.tickValues([40, 100, 300, 500, d3.max(data)]);
// axisY.tickFormat((d) => '$ ' + d);
gridY.tickSize(-500).tickFormat('').tickSizeOuter(0);

svgCanvas
  .append('g')
  .attr('transform', 'translate(0, 360)')
  .call(axisX)
  .selectAll('text')
  .attrs({ 'font-size': 12, transform: 'translate(-24, 10), rotate(320)' });

svgCanvas.append('g').attr('transform', 'translate(50, 0)').call(axisY);

svgCanvas.append('g').attr('transform', 'translate(50, 0)').call(gridY).selectAll('line').attrs({
  stroke: 'grey',
  'stroke-dasharray': '5, 3',
});

// ================================ aula 31 ================================----
// ================================ [Animations] ================================---

// ================================ aula 32 ================================----
// ================================ [] ================================---

// ================================ aula 33 ================================----
// ================================ [] ================================---
