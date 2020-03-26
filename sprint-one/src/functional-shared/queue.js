var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};

  extend(storage, queueMethods);

  return storage;
};

var extend = function(obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
};

var queueMethods = {

  enqueue: function(value) {
    var index = Object.keys(this).length;
    if (!this[index]) {
      this[index] = value;
    }
  },

  dequeue: function() {
    var index = Object.keys(this);
    var firstProp = this[index[0]];
    delete this[index[0]];
    return firstProp;
  },

  size: function() {
    var stackSize = Object.values(this).length;
    if (stackSize < 3) {
      stackSize = 0;
      return stackSize;
    }
    return stackSize - 3;
  }
};





