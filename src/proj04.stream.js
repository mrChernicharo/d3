import * as d3 from 'd3';
import { attrs } from 'd3-selection-multi'; // // ================================ [Axis e gridlines] ================================---// ////================================// ================================// ================================// ================================

// ================================ parte 01 ================================----
// ================================ [Carregando dados] ================================---

// let dim = { width: 770, height: 400 };
// let svg = d3.select('body').append('svg').style('background', 'lightgrey').attrs(dim);

// d3.json('data.json').then((d) => {
//   main(d);
//   console.log(d);
// });

// let menu = d3.select('body').append('select');

// function main(dataset) {
//   let options = menu.selectAll('option').data(Object.keys(dataset));
//   options
//     .enter()
//     .append('option')
//     .attr('value', (d) => d)
//     .text((d) => d);
//   options.exit().remove();
//   menu.on('change', function () {
//     draw(dataset[menu.select('option:checked').text()]);
//   });
//   draw(dataset[menu.select('option:checked').text()]);
// }

// function draw(data) {
//   console.log(data);
// }

// ================================ parte 02 ================================----
// ================================ [Reshape data with StackGenerator + Scales] ================================---

// d3.json('data.json').then((d) => main(d));

// let menu = d3.select('body').append('select');

// function main(dataset) {
//   let options = menu.selectAll('options').data(Object.keys(dataset));
//   options
//     .enter()
//     .append('option')
//     .attr('value', (d) => d)
//     .text((d) => d);
//   options.exit().remove();
//   menu.on('change', function () {
//     draw(dataset[menu.select('option:checked').text()]);
//   });
//   draw(dataset[menu.select('option:checked').text()]);
// }

// function draw(data) {
//   console.log(data);

//   let stack = d3.stack().keys(Object.keys(data[0]));
//   stack.order(d3.stackOrderReverse);
//   stack.offset(d3.stackOffsetSilhouette);
//   // stack.offset(d3.stackOffsetExpand);
//   let stackData = stack(data);
//   console.log(stackData);
//   let minV = d3.min(stackData, (d) => d3.min(d, (d) => d3.min(d)));
//   let maxV = d3.max(stackData, (d) => d3.max(d, (d) => d3.max(d)));

//   let scaleX = d3.scaleLinear([0, data.length - 1], [100, 750]);
//   let scaleY = d3.scaleLinear([minV, maxV], [300, 50]);
//   let colors = d3.schemeOrRd[stackData.length];
// }

// ================================ parte 03 ================================----
// ================================ [Drawing Areas] ================================---

// d3.json('data.json').then((d) => main(d));

// let menu = d3.select('body').append('select');

// let pathsContainer = svg.append('g');

// function main(dataset) {
//   let options = menu.selectAll('options').data(Object.keys(dataset));
//   options
//     .enter()
//     .append('option')
//     .attr('value', (d) => d)
//     .text((d) => d);
//   options.exit().remove();
//   menu.on('change', function () {
//     draw(dataset[menu.select('option:checked').text()]);
//   });
//   draw(dataset[menu.select('option:checked').text()]);
// }

// function draw(data) {
//   console.log(data);
//   let t = d3.transition().duration(1000);
//   let stack = d3.stack().keys(Object.keys(data[0]));
//   stack.order(d3.stackOrderReverse);
//   stack.offset(d3.stackOffsetSilhouette);
//   let stackData = stack(data);
//   console.log(stackData);
//   let minV = d3.min(stackData, (d) => d3.min(d, (d) => d3.min(d)));
//   let maxV = d3.max(stackData, (d) => d3.max(d, (d) => d3.max(d)));

//   let scaleX = d3.scaleLinear([0, data.length - 1], [100, 750]);
//   let scaleY = d3.scaleLinear([minV, maxV], [300, 50]);
//   let colors = d3.schemeOrRd[stackData.length];

//   let area = d3
//     .area()
//     .x((d, i) => scaleX(i))
//     .y0((d) => scaleY(d[0]))
//     .y1((d) => scaleY(d[1]))
//     .curve(d3.curveCatmullRom);

//   let paths = pathsContainer.selectAll('path').data(stackData);
//   let attributes = {
//     d: area,
//     stroke: 'gray',
//     fill: (d, i) => colors[i],
//     'fill-opacity': 0.75,
//     id: (d, i) => Object.keys(data[0])[i],
//   };
//   paths.enter().append('path').attrs(attributes);
//   paths.transition(t).attrs(attributes);
//   paths.exit().remove();
// }

// // ================================ parte 04 ================================----
// // ================================ [Legends] ================================---

// let dim = { width: 770, height: 400 };
// let svg = d3.select('body').append('svg').style('background', 'lightgrey').attrs(dim);

// d3.json('data.json').then((d) => main(d));

// let menu = d3.select('body').append('select');

// let pathsContainer = svg.append('g');
// let legendContainer = svg.append('g');

// function main(dataset) {
//   let options = menu.selectAll('options').data(Object.keys(dataset));
//   options
//     .enter()
//     .append('option')
//     .attr('value', (d) => d)
//     .text((d) => d);
//   options.exit().remove();
//   menu.on('change', function () {
//     draw(dataset[menu.select('option:checked').text()]);
//   });
//   draw(dataset[menu.select('option:checked').text()]);
// }

// function draw(data) {
//   console.log(data);
//   let t = d3.transition().duration(1000);
//   let stack = d3.stack().keys(Object.keys(data[0]));
//   stack.order(d3.stackOrderReverse);
//   stack.offset(d3.stackOffsetSilhouette);
//   let stackData = stack(data);
//   console.log(stackData);
//   let minV = d3.min(stackData, (d) => d3.min(d, (d) => d3.min(d)));
//   let maxV = d3.max(stackData, (d) => d3.max(d, (d) => d3.max(d)));

//   let scaleX = d3.scaleLinear([0, data.length - 1], [100, 750]);
//   let scaleY = d3.scaleLinear([minV, maxV], [300, 50]);
//   let colors = d3.schemeOrRd[stackData.length];

//   let area = d3
//     .area()
//     .x((d, i) => scaleX(i))
//     .y0((d) => scaleY(d[0]))
//     .y1((d) => scaleY(d[1]))
//     .curve(d3.curveCatmullRom);

//   let paths = pathsContainer.selectAll('path').data(stackData);
//   let attributes = {
//     d: area,
//     stroke: 'gray',
//     fill: (d, i) => colors[i],
//     'fill-opacity': 0.75,
//     id: (d, i) => Object.keys(data[0])[i],
//   };
//   paths.enter().append('path').attrs(attributes);

//   paths.transition(t).attrs(attributes);
//   paths.exit().remove();

//   let rects = legendContainer.selectAll('rect').data(Object.keys(data[0]));
//   attributes = {
//     stroke: 'gray',
//     fill: (d, i) => colors[i],
//     'fill-opacity': 0.75,
//     width: 12,
//     height: 12,
//     x: 10,
//   };
//   rects
//     .enter()
//     .append('rect')
//     .attrs(attributes)
//     .attr('y', (d, i) => 100 + i * 22);
//   rects.exit().remove();

//   let legend = legendContainer.selectAll('text').data(Object.keys(data[0]));
//   attributes = {
//     fill: 'gray',
//     'alignment-baseline': 'hanging',
//     x: 26,
//   };
//   legend
//     .enter()
//     .append('text')
//     .attrs(attributes)
//     .attr('y', (d, i) => 100 + i * 22)
//    // .attr('id', (d) => 'label' + d);
//   legend.text((d) => d);
// }

// // ================================ parte 05 ================================----
// // ================================ [Labels] ================================---

// let dim = { width: 770, height: 400 };
// let svg = d3.select('body').append('svg').style('background', 'lightgrey').attrs(dim);

// d3.json('data.json').then((d) => main(d));

// let menu = d3.select('body').append('select');

// let pathsContainer = svg.append('g');
// let legendContainer = svg.append('g');

// function main(dataset) {
//   let options = menu.selectAll('options').data(Object.keys(dataset));
//   options
//     .enter()
//     .append('option')
//     .attr('value', (d) => d)
//     .text((d) => d);
//   options.exit().remove();
//   menu.on('change', function () {
//     draw(dataset[menu.select('option:checked').text()]);
//   });
//   draw(dataset[menu.select('option:checked').text()]);
// }

// function draw(data) {
//   console.log(data);
//   let t = d3.transition().duration(1000);
//   let stack = d3.stack().keys(Object.keys(data[0]));
//   stack.order(d3.stackOrderReverse);
//   stack.offset(d3.stackOffsetSilhouette);
//   let stackData = stack(data);
//   console.log(stackData);
//   let minV = d3.min(stackData, (d) => d3.min(d, (d) => d3.min(d)));
//   let maxV = d3.max(stackData, (d) => d3.max(d, (d) => d3.max(d)));

//   let scaleX = d3.scaleLinear([0, data.length - 1], [100, 750]);
//   let scaleY = d3.scaleLinear([minV, maxV], [300, 50]);
//   let colors = d3.schemeOrRd[stackData.length];

//   let area = d3
//     .area()
//     .x((d, i) => scaleX(i))
//     .y0((d) => scaleY(d[0]))
//     .y1((d) => scaleY(d[1]))
//     .curve(d3.curveCatmullRom);

//   let paths = pathsContainer.selectAll('path').data(stackData);
//   let attributes = {
//     d: area,
//     stroke: 'gray',
//     fill: (d, i) => colors[i],
//     'fill-opacity': 0.75,
//     id: (d, i) => Object.keys(data[0])[i],
//   };
//   paths
//     .enter()
//     .append('path')
//     .attrs(attributes)
//     .on('mousemove', updateLabels)
//     .on('mouseleave', resetLabels);
//   paths.transition(t).attrs(attributes);
//   paths.on('mousemove', updateLabels).on('mouseleave', resetLabels);
//   paths.exit().remove();

//   function updateLabels() {
//     let ix = Math.round(scaleX.invert(d3.event.x));
//     let txt = Object.keys(data[ix]);
//     for (let i = 0; i < txt.length; i++) {
//       d3.select('#label' + txt[i]).text(txt[i] + ': ' + data[ix][txt[i]]);
//     }
//   }

//   function resetLabels() {
//     let txt = Object.keys(data[0]);
//     for (let i = 0; i < txt.length; i++) {
//       d3.select('#label' + txt[i]).text(txt[i]);
//     }
//   }

//   let rects = legendContainer.selectAll('rect').data(Object.keys(data[0]));
//   attributes = {
//     stroke: 'gray',
//     fill: (d, i) => colors[i],
//     'fill-opacity': 0.75,
//     width: 12,
//     height: 12,
//     x: 10,
//   };
//   rects
//     .enter()
//     .append('rect')
//     .attrs(attributes)
//     .attr('y', (d, i) => 100 + i * 22);
//   rects.exit().remove();

//   let legend = legendContainer.selectAll('text').data(Object.keys(data[0]));
//   attributes = {
//     fill: 'gray',
//     'alignment-baseline': 'hanging',
//     x: 26,
//   };
//   legend
//     .enter()
//     .append('text')
//     .attrs(attributes)
//     .attr('y', (d, i) => 100 + i * 22)
//     .text((d) => d)
//     .attr('id', (d) => 'label' + d);
//   legend.text((d) => d);
// }
//
//
// // ================================// ================================// ================================
// // ================================ parte 06 ================================----// ================================
// // ================================ [Markers] ================================---// ================================
// ================================// ================================// ================================// ================================
// ================================// ================================// ================================
//
//
/*
 */
// let dim = { width: 770, height: 400 };
// let svg = d3.select('body').append('svg').style('background', 'lightgrey').attrs(dim);

// d3.json('data.json').then((d) => main(d));

// let menu = d3.select('body').append('select');

// let pathsContainer = svg.append('g');
// let legendContainer = svg.append('g');

// function main(dataset) {
//   let options = menu.selectAll('options').data(Object.keys(dataset));
//   options
//     .enter()
//     .append('option')
//     .attr('value', (d) => d)
//     .text((d) => d);
//   options.exit().remove();
//   menu.on('change', function () {
//     draw(dataset[menu.select('option:checked').text()]);
//   });
//   draw(dataset[menu.select('option:checked').text()]);
// }

// function draw(data) {
//   console.log(data);
//   let t = d3.transition().duration(1000);
//   let stack = d3.stack().keys(Object.keys(data[0]));
//   stack.order(d3.stackOrderReverse);
//   stack.offset(d3.stackOffsetSilhouette);
//   let stackData = stack(data);
//   console.log(stackData);
//   let minV = d3.min(stackData, (d) => d3.min(d, (d) => d3.min(d)));
//   let maxV = d3.max(stackData, (d) => d3.max(d, (d) => d3.max(d)));

//   let scaleX = d3.scaleLinear([0, data.length - 1], [100, 750]);
//   let scaleY = d3.scaleLinear([minV, maxV], [300, 50]);
//   let colors = d3.schemeOrRd[stackData.length];

//   let area = d3
//     .area()
//     .x((d, i) => scaleX(i))
//     .y0((d) => scaleY(d[0]))
//     .y1((d) => scaleY(d[1]))
//     .curve(d3.curveCatmullRom);

//   let paths = pathsContainer.selectAll('path').data(stackData);
//   let attributes = {
//     d: area,
//     stroke: 'gray',
//     fill: (d, i) => colors[i],
//     'fill-opacity': 0.75,
//     id: (d, i) => Object.keys(data[0])[i],
//   };
//   paths
//     .enter()
//     .append('path')
//     .attrs(attributes)
//     .on('mousemove', updateLabels)
//     .on('mouseleave', resetLabels);
//   paths.transition(t).attrs(attributes);
//   paths.on('mousemove', updateLabels).on('mouseleave', resetLabels);
//   paths.exit().remove();

//   let markers = svg.selectAll('circle').data(d3.range(stackData.length + 1));
//   markers.enter().append('circle').attrs({
//     cx: -10,
//     cy: -10,
//     r: 3,
//     fill: 'darkred',
//   });

//   function updateLabels() {
//     let ix = Math.round(scaleX.invert(d3.event.x));
//     let txt = Object.keys(data[ix]);
//     let markerNodes = d3.selectAll('circle').nodes();
//     for (let i = 0; i < txt.length; i++) {
//       d3.select('#label' + txt[i]).text(txt[i] + ': ' + data[ix][txt[i]]);
//       // markers update
//       d3.select(markerNodes[i]).attrs({
//         cx: scaleX(ix),
//         cy: scaleY(stackData[i][ix][0]),
//       });
//     }
//     d3.select(markerNodes[txt.length]).attrs({
//       cx: scaleX(ix),
//       cy: scaleY(stackData[0][ix][1]),
//     });
//   }

//   function resetLabels() {
//     let txt = Object.keys(data[0]);
//     for (let i = 0; i < txt.length; i++) {
//       d3.select('#label' + txt[i]).text(txt[i]);
//     }
//     d3.selectAll('circle').attrs({ cx: -10, cy: -10 });
//   }

//   let rects = legendContainer.selectAll('rect').data(Object.keys(data[0]));
//   attributes = {
//     stroke: 'gray',
//     fill: (d, i) => colors[i],
//     'fill-opacity': 0.75,
//     width: 12,
//     height: 12,
//     x: 10,
//   };
//   rects
//     .enter()
//     .append('rect')
//     .attrs(attributes)
//     .attr('y', (d, i) => 100 + i * 22);
//   rects.exit().remove();

//   let legend = legendContainer.selectAll('text').data(Object.keys(data[0]));
//   attributes = {
//     fill: 'gray',
//     'alignment-baseline': 'hanging',
//     x: 26,
//   };
//   legend
//     .enter()
//     .append('text')
//     .attrs(attributes)
//     .attr('y', (d, i) => 100 + i * 22)
//     .text((d) => d)
//     .attr('id', (d) => 'label' + d);
//   legend.text((d) => d);
// }

/////

// ================================// ================================// ================================// ================================
// ================================// ================================// ================================
//================================// ================================// ================================// ================================
//
// // ================================ parte 07 - Final ================================----// ================================
/*
 */ // ================================// ================================// ================================// ================================
// ================================// ================================// ================================
//
//
/*
 */

let dim = { width: 770, height: 400 };
let svg = d3
  .select('body')
  .append('svg')
  // .style('background', 'lightgrey')
  .attrs(dim);

d3.json('data.json').then((d) => main(d));

let menu = d3.select('body').append('select');

let axisContainer = svg.append('g').attrs({
  id: 'axis',
  transform: 'translate(0, 360)',
});

let pathsContainer = svg.append('g');
let legendContainer = svg.append('g');

function main(dataset) {
  let options = menu.selectAll('options').data(Object.keys(dataset));
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
  let t = d3.transition().duration(1000);
  let stack = d3.stack().keys(Object.keys(data[0]));
  stack.order(d3.stackOrderReverse);
  stack.offset(d3.stackOffsetSilhouette);
  let stackData = stack(data);
  console.log(stackData);
  let minV = d3.min(stackData, (d) => d3.min(d, (d) => d3.min(d)));
  let maxV = d3.max(stackData, (d) => d3.max(d, (d) => d3.max(d)));

  let scaleX = d3.scaleLinear([0, data.length - 1], [100, 750]);
  let scaleY = d3.scaleLinear([minV, maxV], [300, 50]);
  let colors = d3.schemeOrRd[stackData.length];

  let axis = d3.axisBottom(scaleX);
  axis.ticks(data.length);
  axis.tickFormat((d) => `CW${d + 1}`);
  axis.tickSize(-330);

  axisContainer
    .call(axis)
    .call((d) => d.select('.domain').remove())
    .selectAll('line')
    .attrs({
      stroke: 'gray',
      'stroke-dasharray': '6 3',
    });

  let area = d3
    .area()
    .x((d, i) => scaleX(i))
    .y0((d) => scaleY(d[0]))
    .y1((d) => scaleY(d[1]))
    .curve(d3.curveCatmullRom);

  let paths = pathsContainer.selectAll('path').data(stackData);
  let attributes = {
    d: area,
    stroke: 'gray',
    fill: (d, i) => colors[i],
    'fill-opacity': 0.75,
    id: (d, i) => Object.keys(data[0])[i],
  };
  paths
    .enter()
    .append('path')
    .attrs(attributes)
    .on('mousemove', updateLabels)
    .on('mouseleave', resetLabels);
  paths.transition(t).attrs(attributes);
  paths.on('mousemove', updateLabels).on('mouseleave', resetLabels);
  paths.exit().remove();

  let markers = svg.selectAll('circle').data(d3.range(stackData.length + 1));
  markers.enter().append('circle').attrs({
    cx: -10,
    cy: -10,
    r: 3,
    // fill: '',
    opacity: 0.4,
  });

  function updateLabels() {
    let ix = Math.round(scaleX.invert(d3.event.x));
    let txt = Object.keys(data[ix]);
    let markerNodes = d3.selectAll('circle').nodes();
    for (let i = 0; i < txt.length; i++) {
      d3.select('#label' + txt[i]).text(txt[i] + ': ' + data[ix][txt[i]]);
      // markers update
      d3.select(markerNodes[i]).attrs({
        cx: scaleX(ix),
        cy: scaleY(stackData[i][ix][0]),
      });
    }
    d3.select(markerNodes[txt.length]).attrs({
      cx: scaleX(ix),
      cy: scaleY(stackData[0][ix][1]),
    });
  }

  function resetLabels() {
    let txt = Object.keys(data[0]);
    for (let i = 0; i < txt.length; i++) {
      d3.select('#label' + txt[i]).text(txt[i]);
    }
    d3.selectAll('circle').attrs({ cx: -10, cy: -10 });
  }

  let rects = legendContainer.selectAll('rect').data(Object.keys(data[0]));
  attributes = {
    stroke: 'gray',
    fill: (d, i) => colors[i],
    'fill-opacity': 0.75,
    width: 12,
    height: 12,
    x: 10,
  };
  rects
    .enter()
    .append('rect')
    .attrs(attributes)
    .attr('y', (d, i) => 100 + i * 22);
  rects.exit().remove();

  let legend = legendContainer.selectAll('text').data(Object.keys(data[0]));
  attributes = {
    fill: 'gray',
    'alignment-baseline': 'hanging',
    x: 26,
  };
  legend
    .enter()
    .append('text')
    .attrs(attributes)
    .attr('y', (d, i) => 100 + i * 22)
    .text((d) => d)
    .attr('id', (d) => 'label' + d);
  legend.text((d) => d);
}
