import * as d3 from 'd3';
import { attrs } from 'd3-selection-multi';

let dim = { width: 720, height: 500 };
let svg = d3.select('body').append('svg').style('background', 'lightgrey').attrs(dim);
// let svg = d3.select('body').append('svg').style('background', 'ghostwhite').attrs(dim);

d3.select('body')
  .append('div')
  .append('button')
  .text('Change data')
  .on('click', changeData);

let dataset;
let maxWeight;
let maxHeight;
let minWeight;
let minHeight;
let canvasX;
let canvasY;
changeData();

function changeData() {
  svg.selectAll('g').remove();
  svg.selectAll('circle').remove();

  // dataset size random number from range 60 to 100
  let size = Math.round(Math.random() * 40) + 60;
  // generate the data - an array of objects
  dataset = [];
  for (let i = 0; i < size; i++) {
    dataset.push({
      weight: Math.round(Math.random() * 50) + 55,
      height: Math.round(Math.random() * 30) + 160,
    });
  }

  // 1.1 pegar valores máximos
  maxWeight = d3.max(dataset.map((d) => d.weight));
  maxHeight = d3.max(dataset.map((d) => d.height));
  minWeight = d3.min(dataset.map((d) => d.weight));
  minHeight = d3.min(dataset.map((d) => d.height));

  // 1.2 pra criar as escalas
  let scaleX = d3.scaleLinear().domain([minWeight, maxWeight]).range([40, 680]);
  let scaleY = d3.scaleLinear().domain([minHeight, maxHeight]).range([450, 50]);

  // 1.3 e os eixos
  let axisX = d3.axisBottom(scaleX);
  let axisY = d3.axisLeft(scaleY);

  // 1.4 anexar eixos ao SVG
  canvasX = svg.append('g').attr('transform', 'translate(0, 460)').call(axisX);
  canvasY = svg.append('g').attr('transform', 'translate(40, 0)').call(axisY);

  console.log(dataset);
  console.log(maxWeight);
  console.log(maxHeight);
  // console.log(scaleY(maxHeight));

  // 2. criando os círculos
  svg
    .selectAll('circle')
    .data(dataset)
    .enter()
    .append('circle')
    .attrs({
      cx: (d) => scaleX(d.weight),
      cy: (d) => scaleY(d.height),
      r: 10,
      fill: 'black',
    });
}
