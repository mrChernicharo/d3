import * as d3 from 'd3';
import { attrs } from 'd3-selection-multi';
import { min, transition } from 'd3';

let dim = { width: 600, height: 400 };
let svg = d3.select('body').append('svg').style('background', 'lightgrey').attrs(dim);

let data = [
  { a: 40, b: 30, c: 10, d: 50 },
  { a: 45, b: 31, c: 10, d: 50 },
  { a: 42, b: 34, c: 0, d: 0 },
  { a: 38, b: 29, c: 15, d: 40 },
  { a: 21, b: 25, c: 20, d: 52 },
  { a: 40, b: 12, c: 18, d: 4 },
  { a: 30, b: 0, c: 16, d: 38 },
  { a: 35, b: 22, c: 22, d: 45 },
  { a: 35, b: 28, c: 64, d: 42 },
  { a: 36, b: 34, c: 30, d: 41 },
];

// reshape data to have baseline for the next element

// stackGenerator
let stack = d3.stack().keys(['a', 'b', 'c', 'd']);
let stackedData = stack(data);

console.log(stackedData);

let minV = d3.min(stackedData, (d) => d3.min(d, (d) => d3.min(d)));
let maxV = d3.max(stackedData, (d) => d3.max(d, (d) => d3.max(d)));

console.log(maxV);

let scaleX = d3.scaleLinear([0, 9], [0, 600]);
let scaleY = d3.scaleLinear([minV, maxV], [350, 50]);
let colors = d3.schemeSpectral[stackedData.length];

let area = d3
  .area()
  // .curve(d3.curveBasis)
  .x((d, i) => scaleX(i))
  .y0((d) => scaleY(d[0]))
  .y1((d) => scaleY(d[1]));

svg
  .selectAll('path')
  .data(stackedData)
  .enter()
  .append('path')
  .attrs({
    stroke: 'black',
    fill: (d, i) => colors[i],
    d: area,
  });

let order = svg
  .append('text')
  .attrs({
    x: 20,
    y: 25,
    'alignment-baseline': 'middle',
    cursor: 'pointer',
  })
  .text('order')
  .on('click', function () {
    if (order.text() == 'order') {
      order.text('d3.stackOrderAppearance');
      stack.order(d3.stackOrderAppearance);
    } else if (order.text() == 'd3.stackOrderAppearance') {
      order.text('d3.stackOrderAscending');
      stack.order(d3.stackOrderAscending);
    } else if (order.text() == 'd3.stackOrderAscending') {
      order.text('d3.stackOrderDescending');
      stack.order(d3.stackOrderDescending);
    } else if (order.text() == 'd3.stackOrderDescending') {
      order.text('d3.stackOrderInsideOut');
      stack.order(d3.stackOrderInsideOut);
    } else if (order.text() == 'd3.stackOrderInsideOut') {
      order.text('d3.stackOrderNone');
      stack.order(d3.stackOrderNone);
    } else if (order.text() == 'd3.stackOrderNone') {
      order.text('d3.stackOrderReverse');
      stack.order(d3.stackOrderReverse);
    } else if (order.text() == 'd3.stackOrderReverse') {
      order.text('d3.stackOrderAppearance');
      stack.order(d3.stackOrderAppearance);
    }
    stackedData = stack(data);
    minV = d3.min(stackedData, (d) => d3.min(d, (d) => d3.min(d)));
    maxV = d3.max(stackedData, (d) => d3.max(d, (d) => d3.max(d)));
    scaleX = d3.scaleLinear([0, 9], [0, 600]);
    scaleY = d3.scaleLinear().domain([minV, maxV]).range([350, 50]);
    svg.selectAll('path').data(stackedData).transition().duration(2000).attr('d', area);
  });

let offset = svg
  .append('text')
  .attrs({
    x: 20,
    y: 375,
    cursor: 'pointer',
    'alignment-baseline': 'middle',
  })
  .text('offset')
  .on('click', function () {
    if (offset.text() == 'offset') {
      offset.text('d3.stackOffsetExpand');
      stack.offset(d3.stackOffsetExpand);
    } else if (offset.text() == 'd3.stackOffsetExpand') {
      offset.text('d3.stackOffsetDiverging');
      stack.offset(d3.stackOffsetDiverging);
    } else if (offset.text() == 'd3.stackOffsetDiverging') {
      offset.text('d3.stackOffsetNone');
      stack.offset(d3.stackOffsetNone);
    } else if (offset.text() == 'd3.stackOffsetNone') {
      offset.text('d3.stackOffsetSilhouette');
      stack.offset(d3.stackOffsetSilhouette);
    } else if (offset.text() == 'd3.stackOffsetSilhouette') {
      offset.text('d3.stackOffsetWiggle');
      stack.offset(d3.stackOffsetWiggle);
    } else if (offset.text() == 'd3.stackOffsetWiggle') {
      offset.text('d3.stackOffsetExpand');
      stack.offset(d3.stackOffsetExpand);
    }
    stackedData = stack(data);
    minV = d3.min(stackedData, (d) => d3.min(d, (d) => d3.min(d)));
    maxV = d3.max(stackedData, (d) => d3.max(d, (d) => d3.max(d)));
    scaleX = d3.scaleLinear([0, 9], [0, 600]);
    scaleY = d3.scaleLinear().domain([minV, maxV]).range([350, 50]);
    svg.selectAll('path').data(stackedData).transition().duration(2000).attr('d', area);
  });

let curve = svg
  .append('text')
  .attrs({
    x: 435,
    y: 30,
    cursor: 'pointer',
    'alignment-baseline': 'middle',
  })
  .text('curve')
  .on('click', function () {
    if (curve.text() == 'curve') {
      curve.text('d3.curveBasis');
      area.curve(d3.curveBasis);
    } else if (curve.text() == 'd3.curveBasis') {
      curve.text('d3.curveLinear');
      area.curve(d3.curveLinear);
    } else if (curve.text() == 'd3.curveLinear') {
      curve.text('d3.curveCardinal');
      area.curve(d3.curveCardinal);
    } else if (curve.text() == 'd3.curveCardinal') {
      curve.text('d3.curveCatmullRom');
      area.curve(d3.curveCatmullRom);
    } else if (curve.text() == 'd3.curveCatmullRom') {
      curve.text('d3.curveMonotoneX');
      area.curve(d3.curveMonotoneX);
    } else if (curve.text() == 'd3.curveMonotoneX') {
      curve.text('d3.curveMonotoneY');
      area.curve(d3.curveMonotoneY);
    } else if (curve.text() == 'd3.curveMonotoneY') {
      curve.text('d3.curveStep');
      area.curve(d3.curveStep);
    } else if (curve.text() == 'd3.curveStep') {
      curve.text('d3.curveBasis');
      area.curve(d3.curveBasis);
    }

    stackedData = stack(data);
    minV = d3.min(stackedData, (d) => d3.min(d, (d) => d3.min(d)));
    maxV = d3.max(stackedData, (d) => d3.max(d, (d) => d3.max(d)));
    console.log(minV);
    console.log(maxV);
    scaleX = d3.scaleLinear([0, 9], [0, 600]);
    scaleY = d3.scaleLinear().domain([minV, maxV]).range([360, 50]);
    svg.selectAll('path').data(stackedData).attr('d', area);
  });

let changeColors = svg
  .append('text')
  .attrs({
    x: 435,
    y: 375,
    cursor: 'pointer',
    'alignment-baseline': 'middle',
  })
  .text('color')
  .on('click', function () {
    if (changeColors.text() == 'color') {
      changeColors.text('d3.schemeOrRd');
      colors = d3.schemeOrRd[stackedData.length];
    } else if (changeColors.text() == 'd3.schemeOrRd') {
      changeColors.text('d3.schemeBuPu');
      colors = d3.schemeBuPu[stackedData.length];
    } else if (changeColors.text() == 'd3.schemeBuPu') {
      changeColors.text('d3.schemeBrBG');
      colors = d3.schemeBrBG[stackedData.length];
    } else if (changeColors.text() == 'd3.schemeBrBG') {
      changeColors.text('d3.schemePRGn');
      colors = d3.schemePRGn[stackedData.length];
    } else if (changeColors.text() == 'd3.schemePRGn') {
      changeColors.text('d3.schemeYlOrBr');
      colors = d3.schemeYlOrBr[stackedData.length];
    } else if (changeColors.text() == 'd3.schemeYlOrBr') {
      changeColors.text('d3.schemeBlues');
      colors = d3.schemeBlues[stackedData.length];
    } else if (changeColors.text() == 'd3.schemeBlues') {
      changeColors.text('d3.schemeSpectral');
      colors = d3.schemeSpectral[stackedData.length];
    } else if (changeColors.text() == 'd3.schemeSpectral') {
      changeColors.text('d3.schemeOrRd');
      colors = d3.schemeOrRd[stackedData.length];
    }

    svg
      .selectAll('path')
      .transition()
      .duration(1000)
      .attrs({
        fill: (d, i) => colors[i],
      });
  });

// [stackedData.length];

// let curves = [
// 	['curveBasis', d3.curveBasis],
// 	['curveBasisClosed', d3.curveBasisClosed],
// 	['curveBasisOpen', d3.curveBasisOpen],
// 	// ['curveBundle', d3.curveBundle],
// 	['curveCardinal', d3.curveCardinal],
// 	['curveCardinalClosed', d3.curveCardinalClosed],
// 	['curveCardinalOpen', d3.curveCardinalOpen],
// 	['curveCatmullRom', d3.curveCatmullRom],
// 	['curveCatmullRomClosed', d3.curveCatmullRomClosed],
// 	['curveCatmullRomOpen', d3.curveCatmullRomOpen],
// 	['curveLinear', d3.curveLinear],
// 	['curveLinearClosed', d3.curveLinearClosed],
// 	['curveMonotoneX', d3.curveMonotoneX],
// 	['curveMonotoneY', d3.curveMonotoneY],
// 	['curveNatural', d3.curveNatural],
// 	['curveStep', d3.curveStep],
// 	['curveStepAfter', d3.curveStepAfter],
// 	['curveStepBefore', d3.curveStepBefore],
// ];
