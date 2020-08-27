import * as d3 from 'd3';
import { attrs } from 'd3-selection-multi';

let dim = { width: 770, height: 400 };
let svg = d3.select('body').append('svg').style('background', 'lightgrey').attrs(dim);

d3.json('data.json').then((d) => main(d));

let menu = d3.select('body').append('select');

function main(dataset) {
  let options = menu.selectAll('option').data(Object.keys(dataset));
  options
    .enter()
    .append('option')
    .attr('value', (d) => d)
    .text((d) => d);
  options.exit().remove();
  menu.on('change', function () {
    draw(dataset[menu.select('option:checked').text()]);
  });
  draw(dataset[menu.select('option:checked').text()]);
}

function draw(data) {
  console.log(data);
}
