var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};

  cheeseburger(storage, queueMethods);

  return storage;
}

var cheeseburger = function(obj1, obj2) {
  for(var key in obj2) {
    obj1[key] = obj2[key];
  }
};

var queueMethods = {
  enqueue: function(value) {
    var index = Object.keys(storage).length;
    if (!storage[index]) {
      storage[index] = value;
    }
  },

  dequeue: function() {
    var index = Object.keys(storage);
    var firstProp = storage[index[0]];
    delete storage[index[0]];
    return firstProp;
  },

  size: function() {
    var stackSize = Object.values(storage).length;
    return stackSize;
  }
}


