
function ListNode(val) {
    this.val = val;
    this.next = null;
}


/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
 var deleteNode = function(node) {
    node.val = node.next.val
    node.next = node.next.next
};

var head = [1,2,3,4], node = 3
console.log(head)