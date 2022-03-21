/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : 　next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  var tmpStack = [],cur = head
  while(cur) {
    tmpStack.push(cur.val)
    cur = cur.next
  }

  while(head) {
    if(head.val != tmpStack.pop()) {
      return false
    }
    head = head.next
  }

  return true


};