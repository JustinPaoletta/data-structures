var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};

<<<<<<< HEAD
  extend(storage, queueMethods);

  return storage;
};

var extend = function(obj1, obj2) {
  for (var key in obj2) {
=======
  cheeseburger(storage, queueMethods);

  return storage;
}

var cheeseburger = function(obj1, obj2) {
  for(var key in obj2) {
>>>>>>> 4c3ec782eaf3476bfca32d1a447f887572bb445f
    obj1[key] = obj2[key];
  }
};

var queueMethods = {
<<<<<<< HEAD

  enqueue: function(value) {
    var index = Object.keys(this).length;
    if (!this[index]) {
      this[index] = value;
=======
  enqueue: function(value) {
    var index = Object.keys(storage).length;
    if (!storage[index]) {
      storage[index] = value;
>>>>>>> 4c3ec782eaf3476bfca32d1a447f887572bb445f
    }
  },

  dequeue: function() {
<<<<<<< HEAD
    var index = Object.keys(this);
    var firstProp = this[index[0]];
    delete this[index[0]];
=======
    var index = Object.keys(storage);
    var firstProp = storage[index[0]];
    delete storage[index[0]];
>>>>>>> 4c3ec782eaf3476bfca32d1a447f887572bb445f
    return firstProp;
  },

  size: function() {
<<<<<<< HEAD
    var stackSize = Object.values(this).length;
    if (stackSize < 3) {
      stackSize = 0;
      return stackSize;
    }
    return stackSize - 3;
  }
};



=======
    var stackSize = Object.values(storage).length;
    return stackSize;
  }
}
>>>>>>> 4c3ec782eaf3476bfca32d1a447f887572bb445f


