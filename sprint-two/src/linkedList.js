var LinkedList = function() {
  // list object needs head and tail properties
  var list = {};
  list.head = null;
  list.tail = null;

  // place method on list object
  list.addToTail = function(value) {
    // get a new node
    let newNode = Node(value);
    // if no head is set make it the newNode
    if (list.head === null) {
      list.head = newNode;
    }
    // if there is a tail add a new node to that nodes .next property
    if (list.tail !== null) {
      list.tail.next = newNode;
    }
    // set tail
    list.tail = newNode;

  };

  // place method on list object
  list.removeHead = function() {
    // set current head to variable
    let currentHead = list.head;
    // delete the object it points to
    delete list.head;
    // set the head to the next in the list
    list.head = currentHead.next;
    // return the value of the deleted head
    return currentHead.value;
  };

  // place method on list object
  list.contains = function(target) {
    // start at head
    let current = list.head;
    // while there is a current node
    while (current) {
      //if that nodes value equals the target
      if (current.value === target) {
        return true;
      } else {
        // change the current node to the next node
        current = current.next;
      }
    }
    // if target not found return false
    return false;
  };
  // return object
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
 * Time Complexity = addToTail && removeHead  === O(1) and contains === O(n)
 */
