var Tree = function(value) {

  var newTree = {
    // value : value,
    // children : [
    //   {
    //    value : value,
    //    children : []
    //   },
    //   {
    //    value : value,
    //    children : []
    //   }
    // ]
  };

  newTree.value = value;

  newTree.children = [];

  var extend = function(obj1, obj2) {
    for (let key in obj2) {
      obj1[key] = obj2[key];
    }
  };

  // extends newTree with treeMethods
  extend(newTree, treeMethods);

  return newTree;
};

//object with methods
var treeMethods = {};


treeMethods.addChild = function(value) {
  //add a new tree into the children array of current tree;
  this.children.push(new Tree(value));
};

treeMethods.contains = function(target) {
  // if the current value is the same as the target return true
  if (this.value === target) {
    return true;
  }
  //if there is anything in the children array
  if (this.children.length > 0) {
    //loop through each child
    for (let i = 0; i < this.children.length; i++) {
      // run contains on each child and return true if any child contains the target
      if (this.children[i].contains(target)) {
        return true;
      }
    }

  }

  // if not in any child return false
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * Time Complexity = addChild = O(1) contains = O(n)
 */