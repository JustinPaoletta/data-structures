var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.enqueue = function(value) {
    var index = Object.keys(storage).length;
    if (storage[index] === undefined) {
      storage[index] = value;
    }
  };


  // it('removes the oldest item, after newer items have already been added and removed', function() {
  //   queue.enqueue('a');
  //   queue.enqueue('b');
  //   queue.dequeue();
  //   queue.enqueue('c');
  //   expect(queue.dequeue()).to.equal('b');
  // });

  // {0 : "a", 1 : "b"};
  someInstance.dequeue = function() {
    var index = Object.keys(storage);
    var firstIn = storage[index[0]];
    delete storage[index[0]];
    return firstIn;
  };

  someInstance.size = function() {
    var index = Object.keys(storage).length;
    return index;
  };

  return someInstance;
};
