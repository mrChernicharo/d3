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

// // ❯ yarn add d3-selection-multi

// let dim = {
//   width: 400,
//   height: 300,
// };

// let circleAttrs = {
//   cx: (d) => d,
//   cy: (d) => d,
//   r: (d) => (Math.random() * d) / 8,
//   fill: "red",
// };

// let d = [50, 100, 150, 200, 250];

// let svg = d3
//   .select("body")
//   .append("svg")
//   .style("background", "lightblue")
//   .attrs(dim);

// svg.selectAll("circle").data(d).enter().append("circle").attrs(circleAttrs);

// ================================ aula ================================----
// ================================ [SVG - Shapes] ================================---

// let d = [50, 100, 150, 200, 250];

// let dim = {
//   width: 600,
//   height: 400,
// };

// let svg = d3
//   .select("body")
//   .append("svg")
//   .style("background", "lightblue")
//   .attrs(dim);

// // "circle"
// let attributes = {
//   cx: 100,
//   cy: 100,
//   r: 40,
// };
// svg.append("circle").attrs(attributes);

// // "ellipse"
// attributes = {
//   cx: 300,
//   cy: 100,
//   rx: 60,
//   ry: 30,
// };
// svg.append("ellipse").attrs(attributes);

// // "line"
// attributes = {
//   x1: 450,
//   y1: 150,
//   x2: 550,
//   y2: 50,
//   stroke: "black",
// };
// svg.append("line").attrs(attributes);

// // "polygon"
// attributes = {
//   points: "50,250 100,350 150,300 150,350", // x,y x,y x,y x,y
//   stroke: "black",
//   fill: "none",
// };
// svg.append("polygon").attrs(attributes);

// // "polyline"
// attributes = {
//   points: "250,250 300,350 350,300 350,350", // x,y x,y x,y x,y
//   stroke: "black",
//   fill: "none",
// };
// svg.append("polyline").attrs(attributes);

// // "rect"
// attributes = {
//   x: 450,
//   y: 300,
//   width: 100,
//   height: 80,
//   rx: 10, // border-radius
// };
// svg.append("rect").attrs(attributes);

// ================================ aula 09 ================================----
// ================================ [Path Element] ================================---

// let dim = {
//   width: 600,
//   height: 400,
// };

// let svg = d3
//   .select("body")
//   .append("svg")
//   .style("background", "lightblue")
//   .attrs(dim);

// // "path"
// let attributes = {
//   d: `M 100,300
// 		l 0,-200
// 		L 300,200
// 		l 200,-100
// 		L 500,300
// 		C 400,350 400,250 500,300
// 		Z`,
//   stroke: "purple",
//   fill: "none",
// };
// svg.append("path").attrs(attributes);

// // Letras maiúsculas pra coords Absolutas e minúsculas para coords Relativas

// // M -> início
// // L -> line
// // C -> curve
// // Z -> fechar a forma

// ================================ aula 10 ================================----
// ================================ [Appearance Attributes] ================================---

// let dim = {
//   width: 600,
//   height: 400,
// };

// let svg = d3
//   .select("body")
//   .append("svg")
//   .style("background", "lightgrey")
//   .attrs(dim);

// svg.append("line").attrs({
//   x1: 0,
//   y1: 200,
//   x2: 600,
//   y2: 200,
//   stroke: "#888",
// });

// svg.append("line").attrs({
//   x1: 300,
//   y1: 0,
//   x2: 300,
//   y2: 400,
//   stroke: "#888",
// });

// let attributes = {
//   x: 300,
//   y: 200,
// };

// let attributes = {
//   points: "100,300 500,300 300,100",
//   stroke: "purple", // default: black
//   fill: "orange", // default: black
//   "stroke-width": 20,
//   opacity: 0.9,
//   "fill-opacity": 0.7,
//   "stroke-opacity": 0.4,
//   "stroke-dasharray": "30, 5, 10, 5",
//   cursor: "crosshair",
// };
// svg.append("polygon").attrs(attributes);

// ================================ aula 11 ================================----
// ================================ [Text Element] ================================---

// let attributes = {
//   x: 300,
//   y: 200,
//   textLength: 300,
//   lengthAdjust: "spacingAndGlyphs",
//   "font-size": 38,
//   // rotate: 30,
//   "font-family": "sans-serif",
//   "font-style": "italic",
//   "font-weight": 100,
//   "alignment-baseline": "hanging", // middle, hanging
//   "text-anchor": "middle", // middle, start
//   "letter-spacing": 10,
// };
// svg.append("text").attrs(attributes).text("hey yoou!");

// ================================ aula 12 ================================----
// ================================ [Text Element] ================================---

let dim = {
  width: 600,
  height: 400,
};

let canvas = d3
  .select("body")
  .append("svg")
  .style("background", "lightgrey")
  .attrs(dim);

let pth = "M100,200 Q300,100 500,200";

canvas
  .append("path")
  .attrs({ d: pth, fill: "none", stroke: "red", id: "myPath" });

let attributes = {
  href: "#myPath",
  "font-size": 44,
  "text-anchor": "middle",
  startOffset: "50%",
};

canvas
  .append("text")
  .append("textPath")
  .attrs(attributes)
  .text("Text on path!");
// ================================ aula 13 ================================----
// ================================ [] ================================---

// ================================ aula ================================----
// ================================ [] ================================---

// ================================ aula ================================----
// ================================ [] ================================---

// ================================ aula ================================----
// ================================ [] ================================---

// ================================ aula ================================----
// ================================ [] ================================---

// ================================ aula ================================----
// ================================ [] ================================---
