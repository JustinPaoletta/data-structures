// Instantiate a new graph
var Graph = function() {
  this.graph = {};
};
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.graph[node] = [];
};
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  let nodes = Object.keys(this.graph);
  return nodes.includes(node.toString());
};
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  let nodes = Object.keys(this.graph);
  console.log(this.graph);
  this.removeEdge(nodes[0], nodes[1]);
  console.log(this.graph);
  delete this.graph[node];
};
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.graph[fromNode].includes(toNode) && this.graph[toNode].includes(fromNode)) {
    return true;
  }
  return false;
};
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.graph[fromNode].push(Number(toNode));
  this.graph[toNode].push(Number(fromNode));
};
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // if (this.graph[fromNode].includes(toNode) && this.graph[toNode].includes(fromNode)) {
  console.log(this.graph);
  this.graph[fromNode] = [];
  this.graph[toNode] = [];
  console.log(this.graph);
  // }
};
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  console.log(this.graph);
  let nodes = Object.keys(this.graph);
  console.log(nodes);
  nodes.forEach((node) => {
    return cb(node);
  });
  console.log(this.graph);


};

/*
 * Complexity: What is the time complexity of the above functions?
 */


