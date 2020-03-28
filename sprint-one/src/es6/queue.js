class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    Object.create(this);
  }

  enqueue(value) {
    var index = Object.keys(this).length;
    if (!this[index]) {
      this[index] = value;
    }
  }

  dequeue() {
    var index = Object.keys(this);
    var firstProp = this[index[0]];
    delete this[index[0]];
    return firstProp;
  }

  size() {
    var stackSize = Object.values(this).length;
    return stackSize;
  }

}