var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  // returns a number from hashing function
  var index = getIndexBelowMaxForKey(k, this._limit);
  // looks up whats at the index of the storage array
  let bucket = this._storage.get(index);
  // if there is no bucket create one
  if (!bucket) {
    bucket = [];
    // push the bucket to the storage array
    this._storage.set(index, bucket);
  }
  // var tracks if the key already exists in the storage array
  let keyAlreadyExists = false;
  // loop through each pair in the bucket
  bucket.forEach((pair) => {
    // if it finds the key update the 'keys' value
    if (pair[0] === k) {
      pair.splice(1, 1, v);
      // if the key is found update the variable to found
      keyAlreadyExists = true;
    }
  });
  // if it doesnt find the key push the new pair to the bucket
  if (keyAlreadyExists === false) {
    bucket.push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  // returns a number from the hashing function
  var index = getIndexBelowMaxForKey(k, this._limit);
  // looks up whats at the index of the storage array
  let bucket = this._storage.get(index);
  // set var for what im retrieving
  let retriever;
  // loop through each pair in the bucket
  bucket.forEach((pair) => {
    // if the key is found update the variable the keys value
    if (pair[0] === k) {
      retriever = pair[1];
    }
  });
  // return the value of the key
  return retriever;
};

HashTable.prototype.remove = function(k) {
  // returns a number from the hashing function
  var index = getIndexBelowMaxForKey(k, this._limit);
  // looks up whats at the index of the storage array
  let bucket = this._storage.get(index);

  // loop through each pair in the bucket
  bucket.forEach((pair) => {
    // if it finds the key delete the 'keys' value
    if (pair[0] === k) {
      delete pair[1];
    }
  });

};

/*
 * Complexity: What is the time complexity of the above functions?
 *  Time Complexity = O(1)
 */