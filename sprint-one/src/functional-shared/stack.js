var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not to reference your old code in writing the new style.

  var storage = {};

  stackMethods.push = function(value) {
    var index = Object.keys(storage).length;
    if (!storage[index]) {
      storage[index] = value;
    }
  };

  stackMethods.pop = function() {
    var index = Object.keys(storage).length - 1;
    var last = storage[index];
    delete storage[index];
    return last;
  };

  stackMethods.size = function () {
    var size = Object.keys(storage).length;
    return size;
  };

  return stackMethods;
};

var stackMethods = {};




