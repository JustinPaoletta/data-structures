var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  Object.create(this);
};

Stack.prototype.push = function(Value) {
  let index = Object.keys(this).length;
  if (!this[index]) {
    this[index] = Value;
  }
};

Stack.prototype.pop = function() {
  let index = Object.keys(this);
  let last = this[index.length - 1];
  delete this[index.length - 1];
  return last;
};

Stack.prototype.size = function() {
  let size = Object.keys(this).length;
  return size;
};


