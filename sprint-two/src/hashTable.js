var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {

  var index = getIndexBelowMaxForKey(k, this._limit);

  let bucket = this._storage.get(index);

  if (!bucket) {
    bucket = [];
    this._storage.set(index, bucket);
  }

  let keyExists = false;

  bucket.forEach((pair) => {
    if (bucket[pair[0]] === k) {
      bucket[pair[1]] === v;
      keyExists = true;
    }
  });

  if (!keyExists) {
    bucket.push([k, v]);
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  let bucket = this._storage.get(index);

  let retriever;

  bucket.forEach((pair) => {
    if (pair[0] === k) {
      retriever = pair[1];
    }
  });

  return retriever;

  // return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //retrieve bucket

  let bucket = this._storage.get(index);

  //iterate over bucket

  let remover;

  bucket.forEach((pair) => {
    if (pair[0] === k) {
      remover = pair[1];
      pair.splice(1);
    }
  });

  return remover;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */