import * as d3 from 'd3';
import { attrs } from 'd3-selection-multi';

// ================================ aula 31 ================================----
// ================================ [Animations] ================================---

// const dim = {
//   width: 600,
//   height: 400,
// };

// const svgCanvas = d3.select('body').append('svg').style('background', 'lightgray').attrs(dim);

// let blueBall = svgCanvas
//   .append('circle')
//   .attrs({
//     cx: 100,
//     cy: 200,
//     r: 30,
//     fill: 'royalblue',
//   })
//   .on('click', function () {
//     animate();
//   });

// function animate() {
//   let t = d3.transition().duration(2000);
//   // .ease(d3.easeElastic);
//   blueBall
//     .transition(t)
//     .attrs({
//       cx: 500,
//       fill: 'orange',
//       r: 15,
//     })
//     .transition(t)
//     .attrs({
//       cx: 100,
//       r: 30,
//       fill: 'royalblue',
//     })
//     .on('end', animate);
// }

// ================================ aula 32 ================================----
// ================================ [Easing] ================================---

const dim = {
  width: 600,
  height: 400,
};

const svgCanvas = d3.select('body').append('svg').style('background', 'lightgray').attrs(dim);

let blueBall = svgCanvas
  .append('circle')
  .attrs({
    cx: 100,
    cy: 200,
    r: 30,
    fill: 'royalblue',
  })
  .on('click', function () {
    animate();
  });

function animate() {
  let t = d3.transition().duration(2000).ease(d3.easeBounceOut);
  // .ease(d3.easeLinear);
  // .ease(d3.easeElastic);
  // .ease(d3.easeElasticInOut.amplitude(1.2).period(0.35));
  // .ease(d3.easePoly.exponent(3));
  // .ease(d3.easePolyInOut.exponent(2.0));
  // .ease(d3.easePolyIn.exponent(4.0));
  blueBall
    .transition(t)
    .attrs({
      cx: 500,
      fill: 'orange',
      r: 15,
    })
    .transition(t)
    .attrs({
      cx: 100,
      r: 30,
      fill: 'royalblue',
    })
    .on('end', animate);
}

// console.log(d3.easeLinear(1));

// ================================ aula 33 ================================----
// ================================ [] ================================---
