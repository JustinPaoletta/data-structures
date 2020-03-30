var BinarySearchTree = function(value) {

  // give created object access to all the methods
  let myTree = Object.create(binaryMethods);
  // object has a value prop & a left and right prop
  myTree.value = value;
  myTree.left;
  myTree.right;
  // return the object with access to all properties and methods
  return myTree;

};

// Object that stores my methods
let binaryMethods = {};

binaryMethods.insert = function(value) {
  // if the value is less than the current nodes value
  if (value < this.value) {
    // if there is no value on the left side set it with a new tree
    // if there is a value on the left keep checking till there is not
    this.left === undefined ? this.left = BinarySearchTree(value) : this.left.insert(value);
  } else if (value > this.value) {
    // if there is no value on the right side set it with a new tree
    // if there is a value on the right keep checking till there is not
    this.right === undefined ? this.right = BinarySearchTree(value) : this.right.insert(value);
  }

};

binaryMethods.contains = function(value) {
  // if the current value is the same as the value im looking for return true
  if (value === this.value) {
    return true;
    // if the value im looking for is less than the current value and there is a value on the left
  } else if (value < this.value && !!this.left) {
    // check the tree to the left till there are no more
    return this.left.contains(value);
    // if the value im looking for is more than the current value and there is a value on the right
  } else if (value > this.value && !!this.right) {
    // check the tree to the right till there are no more
    return this.right.contains(value);
    // otherwise return false
  } else {
    return false;
  }

};

binaryMethods.depthFirstLog = function(func) {
  // run the function on the current value
  func(this.value);
  // if there is a tree on the left run the function on that value
  if (!!this.left) {
    this.left.depthFirstLog(func);
  }
  // if there is a tree on the left run the function on that value
  if (!!this.right) {
    this.right.depthFirstLog(func);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 * Time Complexity = O(log n)
 */
