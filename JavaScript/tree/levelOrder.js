/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


 function buildTreeFromArr (arr) {
  if (arr.length === 0) return null

  const root = new TreeNode(arr[0])
  const nodes = [root]
  let index = 1;
  for (node of nodes) {
    const left = arr[index] !== null ? new TreeNode(arr[index]) : null
    node.left = left
    if (left) {
      nodes.push(left)
    }
    index++
    if (index === arr.length) return root
    const right = arr[index] !== null ? new TreeNode(arr[index]) : null
    node.right = right
    if (right) {
      nodes.push(right)
    }
    index++
    if (index === arr.length) return root
  }
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(!root) {
    return []
  }
  var queue = [root],nums=[]
  
  while(queue.length) {
    var tmpArr = []
    const tmpLength = queue.length
    for (let i = 0; i < tmpLength; i++) {
      const node = queue.shift()
      tmpArr.push(node.val)
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
      
    }

    nums.push(tmpArr)
  }
  return nums
};

function buildTreeFromArr (arr) {
  if (arr.length === 0) return null

  const root = new TreeNode(arr[0])
  const nodes = [root]
  let index = 1;
  for (node of nodes) {
    const left = arr[index] !== null ? new TreeNode(arr[index]) : null
    node.left = left
    if (left) {
      nodes.push(left)
    }
    index++
    if (index === arr.length) return root
    const right = arr[index] !== null ? new TreeNode(arr[index]) : null
    node.right = right
    if (right) {
      nodes.push(right)
    }
    index++
    if (index === arr.length) return root
  }
}

function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var arr = [3,9,20,null,null,15,7]
var tree = buildTreeFromArr(arr)
console.log(levelOrder(tree))