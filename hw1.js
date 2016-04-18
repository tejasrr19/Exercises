
/**
 * 1) Write a function to determine if a string has all unique characters.
 * How do you do this if you cannot use any additional data structures?
 * For the second part, declaring new variables is OK, but using something like an array is not.
 * Assume you don't know the size of the alphabet used to construct the string (e.g. it may be [a-z], or [a-z, A-Z], or all of unicode, ...)
 */


/**
 * Function to check if a string has unique characters
 *
 * @param  {String} str description
 * @return {Boolean}     description
 */
var isUnique = function(str){
  var result = str.split('').filter(function(a,b,self){
    return self.indexOf(a) == b;
  }).join('');
  if(result.length !== str.length){
    return false;
  }
  else{
    return true;
  }
}


/**
 * 2) Write a function to remove duplicates from an unsorted linked list (single or double, doesn't matter - you choose).
 * What if you cannot use a temporary buffer?
 */

/**
 * Function to remove duplicate nodes from a linked list.
 * Iterate through the list one node at a time. Iterate through the list again and compare the current node value.
 *
 * @return {void}  description
 */
var removeDuplicates = function() {
  var node1, node2, node3, val;
  node2 = this.head;
  while (node2) {
    val = node2.data;
    node1 = node2;
    node3 = node1.next;
    while (node3) {
      if (node3.data === val) {
          node1.next = node3.next;
      } else {
        node1 = node3;
      }
      node3 = node3.next;
    }
    node2 = node2.next;
  }
};
