'use strict'

$(document).ready(animatedBG);


function animatedBG() {
  (function() {

    var stage = document.getElementById('canvas');
    stage.width = window.innerWidth;
    stage.height = window.innerHeight;

    var FlowField, Grid, GridView, Squiggle, SquiggleManager, animate, animationRequestId, createMapData, ctx, defaultTargetCellX, defaultTargetCellY, gridData, gridView, noop, rng, seed, squiggleCount, squiggleManager;

    squiggleCount = 1500;

    ctx = document.getElementById('canvas').getContext('2d');

    animationRequestId = null;

    seed = Math.floor(Math.random() * 9999999999);

    rng = new Chance(seed);

    gridView = null;

    gridData = null;

    noop = function() {};

    defaultTargetCellX = Math.floor(Math.random() * window.innerWidth / 20);

    defaultTargetCellY = Math.floor(Math.random() * window.innerHeight / 20);

    squiggleManager = null;

    FlowField = function(gridData1) {
      this.gridData = gridData1;
      return this;
    };

    FlowField.prototype.neighborDirections = [[0, -1], [1, 0], [0, 1], [-1, 0]];

    FlowField.prototype.callback = (function(_this) {
      return function(node) {
        if (!node.data.open) {
          return;
        }
        node.visited = true;
        node.iteration = 1;
        return _this.openNodes.push(node);
      };
    })(this);

    FlowField.prototype.directionFlow = function(vX, vY, costCallback, flowCallback) {
      var height, i, j, k, l, lX, lY, node, nodes, ref, ref1, ref2, ref3, ref4, results, vector, width, x, y;
      this.reset();
      this.openNodes = [];
      ref = this.gridData, width = ref.width, height = ref.height, nodes = ref.nodes;
      lX = vX === -1 ? 0 : width - 1;
      lY = vY === -1 ? 0 : height - 1;
      if (vX === -1 || vX === 1) {
        for (y = i = 0, ref1 = height; 0 <= ref1 ? i < ref1 : i > ref1; y = 0 <= ref1 ? ++i : --i) {
          node = nodes[y][lX];
          this.callback(node);
        }
      }
      if (vY === -1 || vY === 1) {
        for (x = j = 0, ref2 = width; 0 <= ref2 ? j < ref2 : j > ref2; x = 0 <= ref2 ? ++j : --j) {
          node = nodes[lY][x];
          this.callback(node);
        }
      }
      this.costMap(1, costCallback);
      this.flowMap(flowCallback);
      if (vX === -1 || vX === 1) {
        for (y = k = 0, ref3 = height; 0 <= ref3 ? k < ref3 : k > ref3; y = 0 <= ref3 ? ++k : --k) {
          node = nodes[y][lX];
          if (!node.data.open) {
            continue;
          }
          vector = {
            x: vX,
            y: 0
          };
          node.data.vector = vector;
          flowCallback(lX, y, vector);
        }
      }
      if (vY === -1 || vY === 1) {
        results = [];
        for (x = l = 0, ref4 = width; 0 <= ref4 ? l < ref4 : l > ref4; x = 0 <= ref4 ? ++l : --l) {
          node = nodes[lY][x];
          if (!node.data.open) {
            continue;
          }
          vector = {
            x: 0,
            y: vY
          };
          node.data.vector = vector;
          results.push(flowCallback(x, lY, vector));
        }
        return results;
      }
    };

    FlowField.prototype.process = function(x, y, costCallback, flowCallback, endCallback) {
      this.reset();
      this.openNodes = [this.gridData.nodes[y][x]];
      this.costMap(0, costCallback);
      this.flowMap(flowCallback);
      if (endCallback) {
        return endCallback();
      }
    };

    FlowField.prototype.flowMap = function(flowCallback) {
      var height, i, lowestNode, neighbors, node, nodes, ref, ref1, results, vector, width, x, y;
      ref = this.gridData, width = ref.width, height = ref.height, nodes = ref.nodes;
      results = [];
      for (y = i = 0, ref1 = height; 0 <= ref1 ? i < ref1 : i > ref1; y = 0 <= ref1 ? ++i : --i) {
        results.push((function() {
          var j, ref2, results1;
          results1 = [];
          for (x = j = 0, ref2 = width; 0 <= ref2 ? j < ref2 : j > ref2; x = 0 <= ref2 ? ++j : --j) {
            node = nodes[y][x];
            if (!node.data.open) {
              continue;
            }
            if (!node.visited) {
              continue;
            }
            neighbors = this.collectNeighbors(node, function() {
              return node.iteration != null;
            });
            if (!neighbors.length) {
              continue;
            }
            lowestNode = neighbors.pop();
            neighbors.map(function(n) {
              if (!n.data.open) {
                return;
              }
              if (n.iteration == null) {
                return;
              }
              if (lowestNode.iteration > n.iteration) {
                return lowestNode = n;
              }
            });
            vector = {
              x: lowestNode.x - node.x,
              y: lowestNode.y - node.y
            };
            if (node.iteration === 0) {
              vector = {
                x: 0,
                y: 0
              };
            }
            node.data.vector = vector;
            results1.push(flowCallback(x, y, vector));
          }
          return results1;
        }).call(this));
      }
      return results;
    };

    FlowField.prototype.reset = function() {
      var height, i, node, nodes, ref, ref1, results, width, x, y;
      ref = this.gridData, width = ref.width, height = ref.height, nodes = ref.nodes;
      results = [];
      for (y = i = 0, ref1 = height; 0 <= ref1 ? i < ref1 : i > ref1; y = 0 <= ref1 ? ++i : --i) {
        results.push((function() {
          var j, ref2, results1;
          results1 = [];
          for (x = j = 0, ref2 = width; 0 <= ref2 ? j < ref2 : j > ref2; x = 0 <= ref2 ? ++j : --j) {
            node = nodes[y][x];
            results1.push(node.visited = false);
          }
          return results1;
        })());
      }
      return results;
    };

    FlowField.prototype.floodCallback = function(node) {
      if (!node.data.open) {
        return false;
      }
      if (node.visited) {
        return false;
      }
      node.visited = true;
      return true;
    };

    FlowField.prototype.costMap = function(iteration, costCallback) {
      var newNodes, node, nodes, x, y;
      newNodes = [];
      while (node = this.openNodes.pop()) {
        node.visited = true;
        node.iteration = iteration;
        x = node.x, y = node.y;
        costCallback(x, y, iteration);
        nodes = this.collectNeighbors(node, this.floodCallback);
        newNodes = newNodes.concat(nodes);
      }
      this.openNodes = this.openNodes.concat(newNodes);
      if (this.openNodes.length) {
        return this.costMap(iteration + 1, costCallback);
      }
    };

    FlowField.prototype.collectNeighbors = function(arg, checkCallback) {
      var dX, dY, height, i, len, node, nodes, ref, ref1, ref2, tX, tY, width, x, y;
      x = arg.x, y = arg.y;
      ref = this.gridData, width = ref.width, height = ref.height;
      nodes = [];
      ref1 = this.neighborDirections;
      for (i = 0, len = ref1.length; i < len; i++) {
        ref2 = ref1[i], dX = ref2[0], dY = ref2[1];
        tX = x + dX;
        tY = y + dY;
        if (!((tX >= 0 && tX < width) && (tY >= 0 && tY < height))) {
          continue;
        }
        node = this.gridData.nodes[tY][tX];
        if (!checkCallback(node)) {
          continue;
        }
        nodes.push(node);
      }
      return nodes;
    };

    Grid = function(mapData) {
      this.buildData(mapData);
      return this;
    };

    Grid.prototype.buildData = function(mapData) {
      var i, node, ref, results, x, y;
      this.width = mapData[0].length;
      this.height = mapData.length;
      this.nodes = [];
      results = [];
      for (y = i = 0, ref = this.height; 0 <= ref ? i < ref : i > ref; y = 0 <= ref ? ++i : --i) {
        this.nodes.push([]);
        results.push((function() {
          var j, ref1, results1;
          results1 = [];
          for (x = j = 0, ref1 = this.width; 0 <= ref1 ? j < ref1 : j > ref1; x = 0 <= ref1 ? ++j : --j) {
            node = {
              visited: false,
              x: x,
              y: y,
              iteration: 2e308,
              data: {
                open: !!mapData[y][x]
              }
            };
            results1.push(this.nodes[y][x] = node);
          }
          return results1;
        }).call(this));
      }
      return results;
    };

    Squiggle = function(cellX, cellY, cellWidth1, cellHeight1, arriveCallback) {
      this.cellWidth = cellWidth1;
      this.cellHeight = cellHeight1;
      this.arriveCallback = arriveCallback;
      this.color = randomColor({
        luminosity: 'light'
      });
      this.size = 2;
      this.speed = 1;
      this.recycle(cellX, cellY);
      return this;
    };

    Squiggle.prototype.recycle = function(cellX, cellY) {
      this.x = (cellX * this.cellWidth) + (this.cellWidth / 2);
      this.y = (cellY * this.cellHeight) + (this.cellHeight / 2);
      this.vX = 0;
      return this.vY = 0;
    };

    Squiggle.prototype.update = function(arg) {
      var cellX, cellY, nodes, vector, x, y;
      nodes = arg.nodes;
      cellX = Math.floor(this.x / this.cellWidth);
      cellY = Math.floor(this.y / this.cellHeight);
      vector = nodes[cellY][cellX].data.vector;
      if (vector) {
        x = vector.x, y = vector.y;
        this.vX = x;
        this.vY = y;
        if (x === 0 && y === 0) {
          this.arriveCallback(this);
        }
      }
      this.x += this.vX * this.speed;
      return this.y += this.vY * this.speed;
    };

    Squiggle.prototype.render = function(ctx) {
      var halfSize, x, y;
      halfSize = this.size / 2;
      x = this.x;
      y = this.y;
      x += Math.random() * halfSize - halfSize / 2;
      y += Math.random() * halfSize - halfSize / 2;
      ctx.fillStyle = this.color;
      return ctx.fillRect(x - halfSize, y - halfSize, this.size, this.size);
    };

    GridView = function(gridData1) {
      this.gridData = gridData1;
      this.flowField = new FlowField(this.gridData);
      return this;
    };

    GridView.prototype.setTarget = function(targetX, targetY, endCallback) {
      return this.flowField.process(targetX, targetY, noop, noop, endCallback);
    };

    GridView.prototype.render = function(ctx, marginX, marginY) {
      var cellHeight, cellWidth, height, i, node, nodes, open, ref, ref1, results, width, x, xPos, y, yPos;
      ref = this.gridData, width = ref.width, height = ref.height, nodes = ref.nodes;
      marginX = 5;
      marginY = 5;
      cellWidth = ctx.canvas.width / width;
      cellHeight = ctx.canvas.height / height;
      results = [];
      for (y = i = 0, ref1 = height; 0 <= ref1 ? i < ref1 : i > ref1; y = 0 <= ref1 ? ++i : --i) {
        results.push((function() {
          var j, ref2, results1;
          results1 = [];
          for (x = j = 0, ref2 = width; 0 <= ref2 ? j < ref2 : j > ref2; x = 0 <= ref2 ? ++j : --j) {
            node = nodes[y][x];
            open = node.data.open;
            if (!open) {
              xPos = x * cellWidth + marginX;
              yPos = y * cellHeight + marginY;
              ctx.fillStyle = 'rgba(241, 241, 241, 0.75)';
              results1.push(ctx.fillRect(xPos, yPos, cellWidth - marginX * 2, cellHeight - marginY * 2));
            } else {
              results1.push(void 0);
            }
          }
          return results1;
        })());
      }
      return results;
    };

    SquiggleManager = function(gridData1) {
      this.gridData = gridData1;
      this.squiggles = [];
      return this;
    };

    SquiggleManager.prototype.createSquiggles = function(count, canvasWidth, canvasHeight) {
      var cellHeight, cellWidth, height, i, index, nodes, ref, ref1, results, width, x, y;
      ref = this.gridData, width = ref.width, height = ref.height, nodes = ref.nodes;
      cellWidth = canvasWidth / width;
      cellHeight = canvasHeight / height;
      results = [];
      for (index = i = 0, ref1 = count; 0 <= ref1 ? i < ref1 : i > ref1; index = 0 <= ref1 ? ++i : --i) {
        while (true) {
          x = rng.integer({
            min: 0,
            max: width - 1
          });
          y = rng.integer({
            min: 0,
            max: height - 1
          });
          if (nodes[y][x].data.open) {
            break;
          }
        }
        results.push(this.squiggles.push(new Squiggle(x, y, cellWidth, cellHeight, (function(_this) {
          return function(squiggle) {
            return _this.arriveCallback(squiggle);
          };
        })(this))));
      }
      return results;
    };

    SquiggleManager.prototype.arriveCallback = function(squiggle) {
      var height, nodes, ref, width, x, y;
      ref = this.gridData, width = ref.width, height = ref.height, nodes = ref.nodes;
      while (true) {
        x = Math.floor(Math.random() * width);
        y = Math.floor(Math.random() * height);
        if (nodes[y][x].data.open) {
          break;
        }
      }
      return squiggle.recycle(x, y);
    };

    SquiggleManager.prototype.update = function() {
      var i, len, ref, results, squiggle;
      ref = this.squiggles;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        squiggle = ref[i];
        results.push(squiggle.update(this.gridData));
      }
      return results;
    };

    SquiggleManager.prototype.render = function(ctx) {
      var i, len, ref, results, squiggle;
      ref = this.squiggles;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        squiggle = ref[i];
        results.push(squiggle.render(ctx));
      }
      return results;
    };

    createMapData = function(width, height) {
      var data, i, j, ref, ref1, x, y;
      data = [];
      for (y = i = 0, ref = height; 0 <= ref ? i < ref : i > ref; y = 0 <= ref ? ++i : --i) {
        data[y] = [];
        for (x = j = 0, ref1 = width; 0 <= ref1 ? j < ref1 : j > ref1; x = 0 <= ref1 ? ++j : --j) {
          data[y][x] = rng.bool({
            likelihood: 87
          });
        }
      }
      return data;
    };

    animate = function() {
      ctx.fillStyle = 'rgba(251, 251, 251, 0.125)'; //BG FILL COLOR
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      gridView.render(ctx);
      squiggleManager.update();
      squiggleManager.render(ctx);
      return animationRequestId = window.requestAnimationFrame(animate);
    };

    window.addEventListener('click', function(arg) {
      var cellHeight, cellWidth, cellX, cellY, height, node, nodes, offsetX, offsetY, width;
      offsetX = arg.offsetX, offsetY = arg.offsetY;
      if (animationRequestId) {
        window.cancelAnimationFrame(animationRequestId);
      }
      nodes = gridData.nodes;
      do {
        cellX = Math.floor(Math.random() * window.innerWidth / 20);
        cellY = Math.floor(Math.random() * window.innerWidth / 20);
      } while (nodes[cellY] === undefined || nodes[cellY][cellX] === undefined);
      node = nodes[cellY][cellX];
      if (node.data.open) {
        gridView.setTarget(cellX, cellY);
      }
      return animationRequestId = window.requestAnimationFrame(animate);
    });

    ctx.canvas.addEventListener('mouseout', function() {
      if (animationRequestId) {
        window.cancelAnimationFrame(animationRequestId);
      }
      gridView.setTarget(defaultTargetCellX, defaultTargetCellY);
      return animationRequestId = window.requestAnimationFrame(animate);
    });

    window.addEventListener('load', function() {
      var mapData, mapHeight, mapWidth;
      mapWidth = Math.floor(ctx.canvas.width / 20);
      mapHeight = Math.floor(ctx.canvas.height / 20);
      mapData = createMapData(mapWidth, mapHeight);
      gridData = new Grid(mapData);
      gridView = new GridView(gridData);
      squiggleManager = new SquiggleManager(gridData);
      gridView.setTarget(defaultTargetCellX, defaultTargetCellY, function() {
        var height, ref, width;
        ref = ctx.canvas, width = ref.width, height = ref.height;
        return squiggleManager.createSquiggles(squiggleCount, width, height);
      });
      return animationRequestId = window.requestAnimationFrame(animate);
    }, false);

  }).call(this);

}
