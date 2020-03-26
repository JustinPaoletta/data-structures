<<<<<<< HEAD
var Queue = function() {
  var storage = Object.create(queueMethods);
  return storage;
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
    return stackSize;
  }

};
=======
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
>>>>>>> 4c3ec782eaf3476bfca32d1a447f887572bb445f


