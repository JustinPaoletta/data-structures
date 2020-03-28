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
  newTree.children = []; // fix me


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
  this.value = value;
  this.children.push(this);
  console.log(this);
};

//checks to see if it exists on the tree
treeMethods.contains = function(target) {

  if (this.value === target) {
    return true;
  }

  if (this.children.length > 0) {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].value === target) {
        return true;
      }
      if (this.children[i].length > 0) {
        contains(this.children[i]);
      }
    }
  }


  return false;

};






/*
 * Complexity: What is the time complexity of the above functions?
 */

















// var helperFunc = function (tree) {

//   //checks to see if there is something in children array
//   if (tree.children.length > 0) {
//   //loops through children array
//     for (var i = 0; i < tree.children.length - 1; i++) {
//     // checks each childs value and compares it to the target
//       if (tree.children[i].value === target) {
//         return true;
//       }
//       helperFunc(tree.children[i]);
//     }
//   }
// };

// helperFunc(this);
