/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head && head.next) {
        var slow=head,fast = head.next,i=0
        while(fast&&fast.next&&fast.next.next) {
            if(fast===slow) {
                return true
            }
            slow = slow.next
            fast = fast.next.next
            i++
            console.log(i)
        }
    }

    return false
};

// var head = [-21,10,17,8,4,26,5,35,33,-7,-16,27,-12,6,29,-12,5,9,20,14,14,2,13,-24,21,23,-21,5]
var head = [1,1,1,1]
var list
for (const val of head) {
    if(!list) {
        list = new ListNode(val)
    } else {
        addNode(val,list)
    }
}
console.log(hasCycle(list))


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)

}

// 在链表末尾添加节点
function addNode(num, listNode) {
  // 如果原始链表为空，则新建一个
  if(listNode === null) return new ListNode(num);
  // 添加节点
  let curNode = listNode;
  while(curNode.next !== null) {
      curNode = curNode.next;
  }
  curNode.next = new ListNode(num);
}