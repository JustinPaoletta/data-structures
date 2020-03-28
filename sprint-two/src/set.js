var Set = function() {

  var set = Object.create(setPrototype);

  set._storage = {};

  let extend = function(obj1, obj2) {
    for (let key in obj2) {
      obj1[key] = obj2[key];
    }
  };

  extend(set._storage, set);

  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  let keys = Object.keys(this._storage);
  if (keys.includes(item)) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  if (this._storage[item]) {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
