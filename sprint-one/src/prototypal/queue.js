var Queue = function(storage) {
  var storage = Object.create(queueMethods);
  // storage.storage = storage;
  return storage;
}

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


