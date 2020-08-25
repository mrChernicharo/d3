import * as d3 from "d3";
import { attrs } from "d3-selection-multi";

// ================================ aula 01 ================================---
// ================================ [setup] ================================---

// d3.select("body").append("h1").html("hello D3!");

// d3.select("body").style("background", "lightblue");

// ================================ aula 02 ================================---
// ================================ [seleção] ================================---

// d3.selectAll("p").style("color", "blue");
// d3.select("p").style("color", "green");

// d3.select(".even").style("color", "orange"); // seleção por classe

// d3.select("#last").style("color", "black"); // seleção por id

// d3.select("p:nth-child(1)").style("color", "red"); // seleção por nth-child()

// ================================ aula 03 ================================----
// ================================ [data binding] ================================---

// let d = [1, 2, 3, 4, 5];

// let s = d3
//   .selectAll("p")
//   .data(d)
//   .text((d) => "I'm the paragraph no. " + d);

// console.log(s);

// ================================ aula 04 ================================----
// ================================ [enter() & exit()] ================================---

// let d = [1, 2, 3, 4, 5];

// let body = d3.select("body");

// let s = body
//   .selectAll("p")
//   .data(d)
//   .text((d) => "I'm the paragraph no. " + d);

// // enter
// s.enter()
//   .append("p")
//   .text((d) => "I'm the paragraph no. " + d);

// // overwrite d
// d = [10, 20, 30];

// s = body
//   .selectAll("p")
//   .data(d)
//   .text((d) => "I'm the paragraph no. " + d);

// // exit
// s.exit().remove();

// console.log(s);

// ================================ aula 05 ================================----
// ================================ [SVG] ================================---
// let d = [50, 100, 150, 200, 250];

// let svg = d3
//   .select("body")
//   .append("svg")
//   .style("background", "lightblue")
//   .attr("width", 400)
//   .attr("height", 300);

// svg
//   .selectAll("circle")
//   .data(d)
//   .enter()
//   .append("circle")
//   .attr("cx", (d) => d)
//   .attr("cy", (d) => d)
//   .attr("r", (d) => (Math.random() * d) / 8)
//   .attr("fill", "green");

// ================================ aula ================================----
// ================================ [Selection-Multi] ================================---

// ❯ yarn add d3-selection-multi

let dim = {
  width: 400,
  height: 300,
};

let circleAttrs = {
  cx: (d) => d,
  cy: (d) => d,
  r: (d) => (Math.random() * d) / 8,
  fill: "red",
};

let d = [50, 100, 150, 200, 250];

let svg = d3
  .select("body")
  .append("svg")
  .style("background", "lightblue")
  .attrs(dim);

svg.selectAll("circle").data(d).enter().append("circle").attrs(circleAttrs);

// ================================ aula ================================----
// ================================ [] ================================---

// ================================ aula ================================----
// ================================ [] ================================---

// ================================ aula ================================----
// ================================ [] ================================---

// ================================ aula ================================----
// ================================ [] ================================---
