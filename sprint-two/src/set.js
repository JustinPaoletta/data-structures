var Set = function() {
  // object with all the methods of the prototype
  var set = Object.create(setPrototype);
  // putting a storage object into the set object
  set._storage = {};

  let extend = function(obj1, obj2) {
    for (let key in obj2) {
      obj1[key] = obj2[key];
    }
  };
  //give the storage object all the properties of the set object
  extend(set._storage, set);
  // return the set object
  return set;
};

// object to store methods on
var setPrototype = {};

setPrototype.add = function(item) {
  // add item to the storage object
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  // gets keys of the storage object
  let keys = Object.keys(this._storage);
  // return boolean checking to see if the item is contained in the object
  return keys.includes(item);
};

setPrototype.remove = function(item) {
  // if the key exists delete it
  if (this._storage[item]) {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 *  Time Complexity  add && remove === O(1)    contains === O(n)
 */
