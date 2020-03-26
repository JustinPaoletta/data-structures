class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	Object.create(this);
  };

  push(Value) {
  	let index = Object.keys(this).length;
  		if (!this[index]) {
    		this[index] = Value;
  		}
  };

  pop() {
  	let index = Object.keys(this);
  	let last = this[index.length - 1];
  	delete this[index.length - 1];
  	return last;
  };

  size () {
  	let size = Object.keys(this).length;
  	return size;
  };


}