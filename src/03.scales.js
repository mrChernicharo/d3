import * as d3 from 'd3';
import { attrs } from 'd3-selection-multi';

const dim = {
  width: 600,
  height: 400,
};

const canvas = d3
  .select('body')
  .append('svg')
  .style('background', 'lightgray')
  .attrs(dim);

let data = [5, 12, 32, 80, 108, 152, 320, 512, 700, 825];
