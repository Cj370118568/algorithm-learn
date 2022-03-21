

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

// 删除链表末尾节点
function removeNode(listNode) {
  while(listNode.next !== null) {
      if(listNode.next.next === null) break;
      listNode = listNode.next;
  }
  listNode.next = null; 
}


// 挨个读取节点
function readNode(listNode) {
  while(listNode) {
      console.log(listNode.val);
      listNode = listNode.next;
      if(listNode) console.log('---->');
  }
} 



 
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  
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

  if(!list1 || !list2) {
    if(list1) {
      return list1
    }
    if(list2) {
      return list2
    }
    return null
  }

  var p1=list1,p2=list2,finalList,cur
  while(p1 && p2) {
    if(p1.val > p2.val) {
      if(finalList==null) {
        finalList = new ListNode(p2.val)
        cur = finalList
      } else {
        addNode(p2.val,cur)
        cur = cur.next
      }
      p2 = p2.next
    } else if(p1.val == p2.val) {
      if(finalList==null) {
        finalList = new ListNode(p2.val)
        addNode(p1.val,finalList)
        cur = finalList
      } else {
        addNode(p2.val,cur)
        addNode(p2.val,cur)
        cur = cur.next.next
      }
      p1 = p1.next
      p2 = p2.next
    } 
    else {
      if(finalList==null) {
        finalList = new ListNode(p1.val)
        cur = finalList
      } else {
        addNode(p1.val,cur)
        cur = cur.next
      }
      p1 = p1.next
    }
  }
  console.log(p1,p2)
  if(p1==null) {
    while(p2) {
      addNode(p2.val,cur)
      cur = cur.next
      p2 = p2.next
    }
  }

  if(p2==null && p1!=null) {
    while(p1) {
      addNode(p1.val,cur)
      cur = cur.next
      p1 = p1.next
    }
  }
  return finalList

};

var l1 = [1], l2 = [2]



var list1,list2
for (const item of l1) {
  if(list1 === undefined) {
    list1 = new ListNode(item)
  } else {
    addNode(item,list1)
  }
  
}

for (const item of l2) {
  if(list2 === undefined) {
    list2 = new ListNode(item)
  } else {
    addNode(item,list2)
  }
  
}
readNode(list1)
readNode(list2)


let list = mergeTwoLists(list1,list2)
readNode(list)