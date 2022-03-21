// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var stack = []
    if(!head) {
        return head
    }
    while(head.next) {
        stack.push(head)
        head = head.next
    }
    stack.push(head)

    head = stack.pop()
    var cur = head
    while(stack.length>0) {
        var tmpNode = stack.pop()
        cur.next = tmpNode
        cur = cur.next
    }
    cur.next = null
    console.log(head)
    return head
};

var head = [1,2]
console.log(reverseList(head))