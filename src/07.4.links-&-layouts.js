import * as d3 from 'd3';
import { attrs } from 'd3-selection-multi';
import { linkVertical, curveLinear } from 'd3';
let ix = 0;
let dim = { width: 600, height: 400 };
let svg = d3
  .select('body')
  .append('svg')
  .style('background', 'lightgrey')
  .attrs(dim)
  .on('click', function () {
    if (ix == 0) {
      ix++;
      verticalCluster();
    } else if (ix == 1) {
      ix++;
      horizontalTree();
    } else if (ix == 2) {
      ix++;
      horizontalCluster();
    } else if (ix == 3) {
      ix++;
      radialTree();
    } else if (ix == 4) {
      ix++;
      radialCluster();
    } else if (ix == 5) {
      ix = 0;
      verticalTree();
    }
  });

let data = {
  name: 'Root',
  child: [
    { name: 'A', child: [{ name: 'A1' }, { name: 'A2' }] },
    { name: 'B' },
    { name: 'C', child: [{ name: 'C1' }, { name: 'C2' }] },
    { name: 'D' },
  ],
};

// pro d3 organizar os dados hierarquicamente usamos d3.hierarchy() passando o dataset e,
// no 2º param, o nome da prop que dá acesso pro nível seguinte na estrutura, aqui no caso, "child"
// Se o nome da prop for "children", o 2º param pode ser omitido, pois "children" é o nome default
let rootNode = d3.hierarchy(data, (d) => d.child);

// console.log(rootNode);
// console.log(rootNode.links());
// console.log(rootNode.leaves());
// console.log(rootNode.descendants());

//vamos criar um container dentro do svg pra conter os elementos
//que vamos renderizar dentro de uma margem

let g = svg.append('g').attr('transform', 'translate(50, 50)');

let links = g
  .selectAll('path')
  .data(rootNode.links())
  .enter()
  .append('path')
  .attrs({ fill: 'none', stroke: 'grey' });

let dots = g
  .selectAll('circle')
  // .data(rootNode.links())
  .data(rootNode.descendants())
  .enter()
  .append('circle')
  .attrs({ fill: 'red', stroke: 'grey', r: 3 });

let labels = g
  .selectAll('text')
  // .data(rootNode.links())
  .data(rootNode.descendants())
  .enter()
  .append('text')
  .attr('text-anchor', 'middle');

// verticalTree
function verticalTree() {
  g.transition().duration(1000).attr('transform', 'translate(50, 50)');
  // olha lá o treeGenerator!
  let layout = d3.tree().size([500, 300]);

  layout(rootNode); // <- essa função é quem adiciona as props x e y aos nossos nodes
  // console.log(layout(rootNode));

  links
    .data(rootNode.links())
    .transition()
    .duration(1000)
    .attr(
      'd',
      linkVertical()
        .x((d) => d.x)
        .y((d) => d.y)
    );
  dots
    .data(rootNode.descendants())
    .transition()
    .duration(1000)
    .attrs({ cx: (d) => d.x, cy: (d) => d.y });

  labels
    .data(rootNode.descendants())
    .transition()
    .duration(1000)
    .attrs({ x: (d) => d.x, y: (d) => d.y - 10 })
    .text((d) => d.data.name);
}
// verticalCluster
function verticalCluster() {
  g.transition().duration(1000).attr('transform', 'translate(50, 50)');
  let layout = d3.cluster().size([500, 300]); // <- só muda aqui. Layout CLUSTER

  layout(rootNode);
  links
    .data(rootNode.links())
    .transition()
    .duration(1000)
    .attr(
      'd',
      linkVertical()
        .x((d) => d.x)
        .y((d) => d.y)
    );
  dots
    .data(rootNode.descendants())
    .transition()
    .duration(1000)
    .attrs({ cx: (d) => d.x, cy: (d) => d.y });

  labels
    .data(rootNode.descendants())
    .transition()
    .duration(1000)
    .attrs({ x: (d) => d.x, y: (d) => d.y - 10 })
    .text((d) => d.data.name);
}
// horizontalTree
function horizontalTree() {
  g.transition().duration(1000).attr('transform', 'translate(50, 50)');
  let layout = d3.tree().size([300, 500]); // <- layout TREE e inverte x com y

  layout(rootNode);
  links
    .data(rootNode.links())
    .transition()
    .duration(1000)
    .attr(
      'd',
      d3
        .linkHorizontal() // <- troca pra linkHorizontal()
        .x((d) => d.y) // <- inverte x com y
        .y((d) => d.x)
    );
  dots
    .data(rootNode.descendants())
    .transition()
    .duration(1000)
    .attrs({ cx: (d) => d.y, cy: (d) => d.x }); // <- inverte x com y

  labels
    .data(rootNode.descendants())
    .transition()
    .duration(1000)
    .attrs({ x: (d) => d.y, y: (d) => d.x - 10 }) // <- inverte x com y
    .text((d) => d.data.name);
}
// horizontalCluster
function horizontalCluster() {
  g.transition().duration(1000).attr('transform', 'translate(50, 50)');
  let layout = d3.cluster().size([300, 500]); // <- layout CLUSTER e inverte x com y

  layout(rootNode);
  links
    .data(rootNode.links())
    .transition()
    .duration(1000)
    .attr(
      'd',
      d3
        .linkHorizontal() // <- troca pra linkHorizontal()
        .x((d) => d.y) // <- inverte x com y
        .y((d) => d.x)
    );
  dots
    .data(rootNode.descendants())
    .transition()
    .duration(1000)
    .attrs({ cx: (d) => d.y, cy: (d) => d.x }); // <- inverte x com y

  labels
    .data(rootNode.descendants())
    .transition()
    .duration(1000)
    .attrs({ x: (d) => d.y, y: (d) => d.x - 10 }) // <- inverte x com y
    .text((d) => d.data.name);
}
// radialTree
function radialTree() {
  g.transition().duration(1000).attr('transform', 'translate(300, 200)');
  // olha lá o treeGenerator!
  let layout = d3.tree().size([Math.PI * 2, 200]); // size([angle: 360deg, radius: 150px])

  layout(rootNode);

  links
    .data(rootNode.links())
    .transition()
    .duration(1000)
    .attr(
      'd',
      d3 // d3.linkRadial().angle().radius()
        .linkRadial()
        .angle((d) => d.x)
        .radius((d) => d.y)
    );

  // pra calcular as posiçòes de dots e labels, vamos criar uma helper function radialPoint
  // que pega os valores de x e y, subtrai 90deg de x e retorna y * cosseno e seno de x

  dots
    .data(rootNode.descendants())
    .transition()
    .duration(1000)
    .attrs({ cx: (d) => radialPoint(d.x, d.y)[0], cy: (d) => radialPoint(d.x, d.y)[1] }); // <-

  labels
    .data(rootNode.descendants())
    .transition()
    .duration(1000)
    .attrs({
      x: (d) => radialPoint(d.x, d.y)[0],
      y: (d) => radialPoint(d.x, d.y)[1] - 10, // <-
    })
    .text((d) => d.data.name);
}
// radialCluster
function radialCluster() {
  g.transition().duration(1000).attr('transform', 'translate(300, 200)');
  // olha lá o treeGenerator!
  let layout = d3.cluster().size([Math.PI * 2, 200]); // só trocar por CLUSTER

  layout(rootNode);

  links
    .data(rootNode.links())
    .transition()
    .duration(1000)
    .attr(
      'd',
      d3
        .linkRadial()
        .angle((d) => d.x)
        .radius((d) => d.y)
    );

  dots
    .data(rootNode.descendants())
    .transition()
    .duration(1000)
    .attrs({ cx: (d) => radialPoint(d.x, d.y)[0], cy: (d) => radialPoint(d.x, d.y)[1] }); // <-

  labels
    .data(rootNode.descendants())
    .transition()
    .duration(1000)
    .attrs({
      x: (d) => radialPoint(d.x, d.y)[0],
      y: (d) => radialPoint(d.x, d.y)[1] - 10, // <-
    })
    .text((d) => d.data.name);
}

function radialPoint(x, y) {
  x -= Math.PI / 2;
  return [y * Math.cos(x), y * Math.sin(x)];
}

verticalTree();
