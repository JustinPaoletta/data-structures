var Stack = function() {

  var someInstance = {};

  // Use an object with numeric keys to store values

  var storage = {};

  // Implement the methods below

  someInstance.push = function(value) {
    var index = Object.keys(storage).length;
    if (storage[index] === undefined) {
      storage[index] = value;
    }

  };

  someInstance.pop = function() {
    var index = Object.keys(storage).length - 1;
    var last = storage[index];
    delete storage[index];
    console.log(Object.keys(storage));
    return last;
  };

  someInstance.size = function() {
    var index = Object.keys(storage).length;
    return index;
  };

  return someInstance;
};
