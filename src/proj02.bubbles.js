import * as d3 from 'd3';
import { attrs } from 'd3-selection-multi';

let dim = { width: 720, height: 500 };
let svg = d3.select('body').append('svg').style('background', 'ghostwhite').attrs(dim);

d3.select('body')
  .append('div')
  .append('button')
  .text('Change data')
  .on('click', changeData);

let dataset;
changeData();

function changeData() {
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
  console.log(dataset);
}
