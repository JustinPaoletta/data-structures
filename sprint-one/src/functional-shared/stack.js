var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not to reference your old code in writing the new style.

  var storage = {};

  extend(storage, stackMethods);

  return storage;
};

var extend = function(obj1, obj2) {
  for (let key in obj2) {
    obj1[key] = obj2[key];
  }
};

var stackMethods = {
  push: function(value) {
    var index = Object.keys(this).length;
    if (!this[index]) {
      this[index] = value;
    }
  },

  pop: function() {
    var index = Object.keys(this).length - 1;
    var last = this[index];
    delete this[index];
    return last;
  },

  size: function () {
    var size = Object.keys(this).length;
    return size - 3;
  }
};




