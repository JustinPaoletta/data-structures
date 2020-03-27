var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    let index = Object.keys(list).length;
    if (!list[index]) {
      list[index] = Node(value);
      list.tail = Node(value);
    }
    if (list.head === null) {
      list.head = list.tail;
    }

  };

  list.removeHead = function() {

    if (list.head === null) {
      return list.head;
    }
    let index = Object.keys(list);
    let currentHead = list[index[0]];
    delete Node(list[index[0]]);
    list.head = list[index[1]];
    let values = Object.values(list);
    delete list[index[0]];
    return currentHead.value;

  };

  list.contains = function(target) {

    let values = Object.values(list);
    let actValues = [];
    for (let i = 0; i < values.length; i++) {
      actValues.push(values[i].value);
    }
    return actValues.includes(target);
  };

  return list;
};

var Node = function(value) {

  var node = {};

  node.value = value;
  node.next = null;

  return node;

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
