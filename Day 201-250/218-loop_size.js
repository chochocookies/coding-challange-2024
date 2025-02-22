// Description:
// You are given a node that is the beginning of a linked list. This list contains a dangling piece and a loop. Your objective is to determine the length of the loop.

// For example in the following picture the size of the dangling piece is 3 and the loop size is 12:


// // Use the `getNext' method or 'next' property to get the following node.
// node.getNext()
// node.next
// Notes:

// do NOT mutate the nodes!
// in some cases there may be only a loop, with no dangling piece
// Thanks to shadchnev, I broke all of the methods from the Hash class.

// Don't miss dmitry's article in the discussion after you pass the Kata !! 

function loop_size(node){
    let slow = node;
    let fast = node.getNext();
    while (slow !== fast) {
      slow = slow.getNext();
      fast = fast.getNext().getNext();
    }
    let count = 1;
    fast = fast.getNext();
    while (slow !== fast) {
      count++;
      fast = fast.getNext();
    }
    return count;
}

function loop_size(node) {
    let lastIndex = 0;
    let indices = new WeakMap();
    while (indices.get(node) == null) {
        indices.set(node, lastIndex++);
        node = node.next;
    }
    return lastIndex - indices.get(node);
}