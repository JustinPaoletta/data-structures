// Instantiate a new graph
var Graph = function() {
  this.graph = {};
};
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // put a key on the graph object with an empty array for the value
  this.graph[node] = [];
};
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // get an array of the graph keys
  let nodes = Object.keys(this.graph);
  // see if the node is contained in the array and return boolean
  return nodes.includes(node.toString());
};
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // get an array of the graph keys
  let nodes = Object.keys(this.graph);
  // remove edge between two nodes
  this.removeEdge(nodes[0], nodes[1]);
  // remove the node
  delete this.graph[node];
};
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // check to see if the nodes values are in each others array and return a boolean
  return this.graph[fromNode].includes(toNode) && this.graph[toNode].includes(fromNode);
};
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // place each node in the others array
  this.graph[fromNode].push(Number(toNode));
  this.graph[toNode].push(Number(fromNode));
};
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.graph[fromNode] = [];
  this.graph[toNode] = [];
};
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // array of the graphs keys
  let nodes = Object.keys(this.graph);
  // run the function on each 'key'
  nodes.forEach((node) => {
    cb(node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Time Complexity = O(n2)
 */


