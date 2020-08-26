import * as d3 from 'd3';
import { attrs } from 'd3-selection-multi';

const canvasWidth = 720;
const canvasHeight = 500;

let dim = { width: canvasWidth, height: canvasHeight };
let svg = d3.select('body').append('svg').style('background', 'ghostwhite').attrs(dim);

// button append
d3.select('body')
  .append('div')
  .append('button')
  .text('Change data')
  .on('click', changeData);

// clipPath Attrs
const plotArea = {
  x: 50,
  y: 50,
  width: 620,
  height: 400,
};

// clipPath
svg.append('clipPath').attr('id', 'plot-area').append('rect').attrs(plotArea);

// grid
svg.append('g').attrs({
  transform: 'translate(0, 450)',
  id: 'x-grid',
  class: 'grid',
});

svg.append('g').attrs({
  transform: 'translate(50, 0)',
  id: 'y-grid',
  class: 'grid',
});

// axis
svg.append('g').attrs({
  transform: 'translate(0, 450)',
  id: 'x-axis',
});

svg.append('g').attrs({
  transform: 'translate(50, 0)',
  id: 'y-axis',
});

// linha fechando o gráfico no top & right sides
svg.append('polyline').attrs({
  points: '50,50 670,50 670, 450',
  fill: 'none',
  stroke: 'black',
});

// criar container
let container = svg.append('g').attr('clip-path', 'url(#plot-area');

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

  // chame o draw()!!!
  draw();
}

function draw() {
  // duração das transições
  const trans = d3.transition().duration(2000);

  // scales
  let scaleX = d3.scaleLinear(
    d3.extent(dataset, (d) => d.weight),
    [50, 670]
  );
  let scaleY = d3.scaleLinear(
    d3.extent(dataset, (d) => d.height),
    [450, 50]
  );

  let areaScale = d3
    .scaleSqrt()
    .domain(d3.extent(dataset, (d) => d.weight / d.height))
    .range([8, 20]);

  let colorScale = d3
    .scaleDiverging(d3.interpolateSpectral)
    .domain([
      d3.max(dataset, (d) => d.weight / d.height),
      d3.median(dataset, (d) => d.weight / d.height),
      d3.min(dataset, (d) => d.weight / d.height),
    ]);

  // desenhar grids - seleção por id
  let gridX = d3.axisBottom(scaleX);
  gridX.tickFormat('').tickSize(-400).tickSizeOuter(0);
  d3.select('#x-grid').transition(trans).call(gridX);

  let gridY = d3.axisLeft(scaleY);
  gridY.tickFormat('').tickSize(-620).tickSizeOuter(0);
  d3.select('#y-grid').transition(trans).call(gridY);

  // estilizar grids - seleção por classe
  d3.selectAll('.grid').selectAll('line').attrs({
    stroke: 'lightgrey',
    'stroke-dasharray': '5 3',
  });

  // criar axis
  let axisX = d3.axisBottom(scaleX);
  let axisY = d3.axisLeft(scaleY);

  // e chamá-las embutindo a transição, pro update ser suave, animado
  d3.select('#x-axis').transition(trans).call(axisX);
  d3.select('#y-axis').transition(trans).call(axisY);

  // bubbles

  // attrs de círculos
  let circleAttrs = {
    cx: (d) => scaleX(d.weight),
    cy: (d) => scaleY(d.height),
    r: (d) => areaScale(d.weight / d.height),
    fill: (d) => colorScale(d.weight / d.height),
    stroke: 'grey',
    opacity: 0.8,
  };

  // criar referências de círculos no canvas => Empty selection to bind data
  // let circles = svg.selectAll('circle').data(dataset);
  let circles = container.selectAll('circle').data(dataset);

  // 1. fluxo de círculos ainda não criados:
  circles
    .enter()
    .append('circle')
    .attrs({
      cx: (d) => scaleX(d.weight),
      cy: (d) => scaleY(d.height),
      r: 0, // estado inicial dos círculos (r = 0)
    })
    .transition(trans) // e aí sim a transição pros valores setados em circleAttrs
    .attrs(circleAttrs);

  // 2. fluxo de círculos já existentes:
  circles.transition(trans).attrs(circleAttrs);

  // 3. fluxo pro caso de haver mais círculos que dados
  circles.exit().transition(trans).attr('r', 0).remove();
}
