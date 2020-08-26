import * as d3 from 'd3';
import { attrs } from 'd3-selection-multi';

let dimensions = {
  width: 800,
  height: 400,
};

let myRange = d3.range(50, 751, 5);

let canvas = d3
  .select('body')
  .append('svg')
  .style('background', 'lightgrey')
  .attrs(dimensions);

let lineAttrs = {
  x1: (d) => d,
  y1: 200,
  x2: (d) => d,
  y2: (d, i) => (i % 10 === 0 ? 220 : 210),
  stroke: 'black',
};

let lines = canvas
  .selectAll('line')
  .data(myRange)
  .enter()
  .append('line')
  .attrs(lineAttrs);

let circleAttrs = {
  cx: 50,
  cy: 200,
  r: 20,
  fill: 'white',
  stroke: 'dodgerblue',
  'stroke-width': 3,
  cursor: 'grab',
};
let circle = canvas
  .append('circle')
  .attrs(circleAttrs)

  .on('click', function (e) {
    let el = d3.select(this);
    el.attr('fill') === 'white'
      ? el.attr('fill', 'dodgerblue')
      : el.attr('fill', 'white');
  });

let circleLabel = canvas
  .append('text')
  .attrs({
    x: 50,
    y: 200,
    'text-anchor': 'middle',
    'alignment-baseline': 'middle',
  })
  .text('50')
  .style('pointer-events', 'none');

let circleDrag = d3.drag();

circleDrag.on('start', function (e) {
  let el = d3.select(this);
  el.attrs({ 'stroke-width': '8px', cursor: 'none' });
});
circleDrag.on('drag', function (e) {
  let el = d3.select(this);
  let xPos = parseInt(el.attr('cx'));
  let newPos = xPos + d3.event.dx;

  if (newPos < 50) newPos = 50;
  if (newPos > 750) newPos = 750;
  el.attr('cx', newPos);

  pushLines();
});

circleDrag.on('end', function (e) {
  let el = d3.select(this);
  el.attrs({ 'stroke-width': '8px', cursor: 'grab' });
});

circle.call(circleDrag);

function pushLines() {
  lines.each(function (d, i) {
    let el = d3.select(this);
    let x = parseInt(el.attr('x1'));
    let sliderX = parseInt(circle.attr('cx'));
    let dx = Math.abs(sliderX - x);
    let r = 25;
    // há colisão entre o círculo e a linha?
    if (x >= sliderX - r && x <= sliderX + r) {
      // se sim, calcule o deltaY
      let dy = Math.sqrt(Math.abs(r ** 2 - dx ** 2));
      el.attr('y1', 200 + dy);
      el.attr('y2', i % 10 === 0 ? 220 + dy : 210 + dy);
    } else {
      el.attr('y1', 200);
      el.attr('y2', i % 10 === 0 ? 220 : 210);
    }
    circleLabel.text(circle.attr('cx')).attr('x', circle.attr('cx'));
  });
}

pushLines();
