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

// let colorize = d3.scaleQuantize().domain(d3.extent(data)).range(['red', 'blue', 'green']);
// // let colorize = d3.scaleQuantile().domain(data).range(['red', 'blue', 'green']);
// // let colorize = d3.scaleThreshold().domain([200, 400]).range(['red', 'blue', 'green']);

// svgCanvas
//   .selectAll('circle')
//   .data(data)
//   .enter()
//   .append('circle')
//   .attrs({ cx: (d) => scale(d), cy: 200, r: 10, opacity: 0.5, fill: (d) => colorize(d) });

// ================================ aula 23 ================================----
// ================================ [Ordinal Scales] ================================---

// const dim = {
//   width: 600,
//   height: 400,
// };

// const svgCanvas = d3
//   .select('body')
//   .append('svg')
//   .style('background', 'lightgray')
//   .attrs(dim);

// let data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]; // 110, 120];
// let months = [
//   'Jan',
//   'Fev',
//   'Mar',
//   'Abr',
//   'Mai',
//   'Jun',
//   'Jul',
//   'Ago',
//   'Set',
//   'Out',
//   'Nov',
//   'Dez',
// ];

// let scale = d3.scaleOrdinal().domain(months).range(data);

// console.log(scale('Jan'));
// console.log(scale('Fev'));
// console.log(scale('Ago'));
// console.log(scale('Set'));
// console.log(scale('Out'));
// console.log(scale('Nov'));
// console.log(scale('Dez'));
// console.log(scale('foo'));
// console.log(scale('baz'));

// ==================== teste  =========================

// let data2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let scale = d3.scaleOrdinal().domain(data2).range(months);

// console.log(scale(0));
// console.log(scale(1));
// console.log(scale(2));
// console.log(scale(3));
// console.log(scale(10));
// console.log(scale(11));
// console.log(scale(-1));

// ================================ aula 24 ================================----
// ================================ [ScaleBand] ================================---

// const dim = {
//   width: 600,
//   height: 400,
// };

// const svgCanvas = d3.select('body').append('svg').style('background', 'lightgray').attrs(dim);

// let data = [10, 29, 130, 240, 250, 360, 370, 610, 820, 480, 690, 510];
// let months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

// // desenhar duas linhas verticais nas bordas do canvas
// svgCanvas
//   .selectAll('line')
//   .data([50, 550])
//   .enter()
//   .append('line')
//   .attrs({
//     x1: (d) => d,
//     x2: (d) => d,
//     y1: 50,
//     y2: 350,
//     stroke: 'black',
//   });

// // juntando domain e range: scaleLinear([<domain>], [<range])
// let scaleY = d3.scaleLinear([0, d3.max(data)], [350, 50]);

// let scaleX = d3.scaleBand().domain(months).range([50, 550]).paddingInner(0.1).paddingOuter(0.3);
// // .padding(0.1);

// console.log(scaleY(80));
// console.log(scaleY(900));
// console.log(scaleX('Abr'));
// console.log(scaleX('Mai'));

// // desenhar as barras
// svgCanvas
//   .selectAll('rect')
//   .data(months)
//   .enter()
//   .append('rect')
//   .attrs({
//     x: (d) => scaleX(d),
//     y: (d, i) => scaleY(data[i]),
//     width: scaleX.bandwidth(),
//     height: (d, i) => scaleY(0) - scaleY(data[i]),
//     fill: '#fd6900',
//   });

// ================================ aula 25 ================================----
// ================================ [ScalePoint] ================================---

// const dim = {
//   width: 600,
//   height: 400,
// };

// const svgCanvas = d3.select('body').append('svg').style('background', 'lightgray').attrs(dim);

// let data = [10, 29, 130, 240, 250, 360, 370, 610, 820, 480, 690, 510];
// let months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

// // desenhar duas linhas verticais nas bordas do canvas
// svgCanvas
//   .selectAll('line')
//   .data([50, 550])
//   .enter()
//   .append('line')
//   .attrs({
//     x1: (d) => d,
//     x2: (d) => d,
//     y1: 50,
//     y2: 350,
//     stroke: 'black',
//   });

// // juntando domain e range: scaleLinear([<domain>], [<range])
// let scaleY = d3.scaleLinear([0, d3.max(data)], [350, 50]);

// let scaleX = d3.scalePoint().domain(months).range([50, 550]).padding(0.8);

// // desenhar as barras
// svgCanvas
//   .selectAll('circle')
//   .data(months)
//   .enter()
//   .append('circle')
//   .attrs({
//     cx: (d) => scaleX(d),
//     cy: (d, i) => scaleY(data[i]),
//     r: 10,
//     fill: '#fd6900',
//   });

// ================================ aula 26 ================================----
// ================================ [Diverging Scales] ================================---

// const dim = {
//   width: 600,
//   height: 400,
// };

// const svgCanvas = d3.select('body').append('svg').style('background', 'black').attrs(dim);

// let scale = d3.scaleDiverging([0, 500, 600], d3.interpolateTurbo);

// svgCanvas
//   .selectAll('line')
//   .data(d3.range(0, 600, 6))
//   .enter()
//   .append('line')
//   .attrs({
//     x1: (d) => d,
//     x2: (d) => d,
//     y1: 0,
//     y2: 400,
//     stroke: (d) => scale(d),
//     'stroke-width': '2px',
//   });

// ================================ aula 27 ================================----
// ================================ [TimeScale] ================================---

const dim = {
  width: 600,
  height: 400,
};

const svgCanvas = d3
  .select('body')
  .append('svg')
  .style('background', 'lightgrey')
  .attrs(dim);

let timeScale = d3
  .scaleTime()
  .domain([new Date(2020, 0, 1), new Date(2020, 11, 31)])
  .range([50, 350]);

let dates = timeScale.ticks(d3.timeMonth.every(1));

let dateFormat = d3.timeFormat('%Y/%m');

console.log(dates);

svgCanvas
  .selectAll('text')
  .data(dates)
  .enter()
  .append('text')
  .attrs({ x: 50, y: (d) => timeScale(d), 'font-size': 12 })
  .text((d) => dateFormat(d));
