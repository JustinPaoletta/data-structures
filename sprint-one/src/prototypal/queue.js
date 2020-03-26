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


