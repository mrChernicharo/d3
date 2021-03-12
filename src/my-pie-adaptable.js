import * as d3 from 'd3';
import { attrs } from 'd3-selection-multi';

let [myX, myY] = [window.innerWidth, window.innerHeight / 2];
draw();

const body = document.getElementsByTagName('body')[0];
console.log(body);

window.addEventListener('resize', (e) => {
  console.log(e.target.innerWidth);
  myX = e.target.innerWidth;
  myY = e.target.innerHeight / 2;

  body.innerHTML = '';
  draw();
});

function draw() {
  // let dim = { width: myX, height: myY };
  let dim = { width: myX, height: myY };
  let svg = d3.select('body').append('svg').style('background', 'lightgrey').attrs(dim);

  let arcGen = d3.arc();
  // arcGen.innerRadius(40).outerRadius(120).cornerRadius(10);
  // arcGen.innerRadius(40).outerRadius(120);
  arcGen.innerRadius(0).outerRadius(myY / 2.5);

  let data = [10, 15, 35, 40, 42, 50];
  let colors = d3.schemeOranges[data.length];

  let arcs = d3.pie()(data);
  // arcs = arcs(data)
  console.log(arcs);

  svg
    .selectAll('path')
    .data(arcs)
    .enter()
    .append('path')
    .attrs({
      d: arcGen, // same as 'd': d=>arcGen(d)
      stroke: 'black',
      fill: (d, i) => colors[i],
      // transform: `translate(300,200)`,
      transform: `translate(${myX / 2},${myY / 2})`,
    });

  arcs.forEach((d) => {
    console.log(arcGen.centroid(d));
  });

  svg
    .selectAll('circle')
    .data(arcs)
    .enter()
    .append('circle')
    .attrs({
      r: 2,
      cx: (d) => arcGen.centroid(d)[0],
      cy: (d) => arcGen.centroid(d)[1],
      transform: 'translate(295,195)',
      transform: `translate(${myX / 2},${myY / 2})`,
    });
  svg
    .selectAll('text')
    .data(arcs)
    .enter()
    .append('text')
    .attrs({
      x: (d) => arcGen.centroid(d)[0],
      y: (d) => arcGen.centroid(d)[1],
      transform: 'translate(298,201)',
      transform: `translate(${myX / 2},${myY / 2})`,
      fill: 'black',
      'font-size': 12,
      'text-anchor': 'start', // end, middle, start
      'alignment-baseline': 'text-after-edge', // middle, hanging, central,  after-edge | text-after-edge
    })
    .text((d) => d.value);
}
