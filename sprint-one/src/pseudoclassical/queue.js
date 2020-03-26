var Queue = function() {
  Object.create(this);
};

Queue.prototype.enqueue = function(value) {
  var index = Object.keys(this).length;
  if (!this[index]) {
    this[index] = value;
  }
},

Queue.prototype.dequeue = function() {
  var index = Object.keys(this);
  var firstProp = this[index[0]];
  delete this[index[0]];
  return firstProp;
},

Queue.prototype.size = function() {
  var stackSize = Object.values(this).length;
  return stackSize;
};


