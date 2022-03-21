/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }


/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var cur = head,length = 1
    while(cur.next) {
        cur = cur.next
        length++
    }

    if (length==1) {
        if(head.val) {
            return head.next
        }
    }

    if(n>length) {
        return head
    }

    
    const specilIndex = length-n
    if(specilIndex==0) {
        return head.next
    }
    cur = head
    
    for(let i=0;i<=(specilIndex-1);i++) {
        if(i==(specilIndex-1)) {
            cur.next = cur.next.next 
        } else {
            cur = cur.next
        }

    }


    return head
};

var head = [1,2,3,4,5], n = 2
console.log(removeNthFromEnd(head,n))