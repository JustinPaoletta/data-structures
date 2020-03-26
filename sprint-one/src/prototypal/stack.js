var Stack = function(method1, method2, method3) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(stackMethods);
  return storage;
};

var stackMethods = {
  push: function(value) {
    let index = Object.keys(this).length;
    if (!this[index]) {
      this[index] = value;
    }
  },
  pop: function() {
    let index = Object.keys(this).length - 1;
    let last = this[index];
    delete this[index];
    return last;
  },
  size: function() {
    let index = Object.keys(this).length;
    return index;
  }
};


