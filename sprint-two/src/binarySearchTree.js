var BinarySearchTree = function(value) {

  let myTree = Object.create(binaryMethods);
  myTree.value = value;
  myTree.left;
  myTree.right;
  return myTree;

};

let binaryMethods = {};

binaryMethods.insert = function(value) {

  if (value < this.value) {
    this.left === undefined ? this.left = BinarySearchTree(value) : this.left.insert(value);
  } else if (value > this.value) {
    this.right === undefined ? this.right = BinarySearchTree(value) : this.right.insert(value);
  }

};

binaryMethods.contains = function(value) {
  if (value === this.value) {
    return true;
  } else if (value < this.value && !!this.left) {
    return this.left.contains(value);
  } else if (value > this.value && !!this.right) {
    return this.right.contains(value);
  } else {
    return false;
  }
};

binaryMethods.depthFirstLog = function(func) {

  func(this.value);

  if (!!this.left) {
    this.left.depthFirstLog(func);
  }

  if (!!this.right) {
    this.right.depthFirstLog(func);
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 * Time Complexity = O(log n)
 */
