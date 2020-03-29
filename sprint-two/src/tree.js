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

  // your code here
  newTree.children = [];


  // extends newTree with treeMethods
  var extend = function(obj1, obj2) {
    for (let key in obj2) {
      obj1[key] = obj2[key];
    }
  };

  extend(newTree, treeMethods);

  return newTree;
};

//object with methods
var treeMethods = {};

//adds child to tree
treeMethods.addChild = function(value) {
//add the template of new tree into the children array of newTree;
  let child = new Tree(value);
  this.children.push(child);
};

//checks to see if it exists on the tree
treeMethods.contains = function(target) {

  if (this.value === target) {
    return true;
  }

  if (this.children.length > 0) {

    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }

  }


  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * Time Complexity = addChild = O(1) contains = O(n)
 */