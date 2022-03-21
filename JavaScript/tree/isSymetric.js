/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    var i = 0
    var process = function(left,right) {
        i++
        if(left && right && left.val===right.val) {
            var leftflag=true,rightFlag=true
            if(left.left && right.right) {
                leftflag = process(left.left,right.right)
            } else if(!left.left && !right.right) {
                leftflag=true
            } else {
                leftflag = false
            }
            if (left.right && right.left) {
                rightFlag = process(left.right,right.left)
            } else if(!left.right && !right.left) {
                rightFlag = true
            } else {
                rightFlag = false
            }
            return leftflag&&rightFlag
        } else if(!left && !right) {
            return true
        } else {
            return false
        }
    }

    if(!root) {
        return true
    }
    const flag = process(root.left,root.right)
    console.log(i)
    return flag
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }

function buildTreeFromArr (arr) {
    if (arr.length === 0) return null
  
    const root = new TreeNode(arr[0])
    const nodes = [root]
    let index = 1;
    for (node of nodes) {
      if(arr[index]) nodes.push((node.left = new TreeNode(arr[index])))
      
      index++
      if (index === arr.length) return root
      if(arr[index]) nodes.push((node.right = new TreeNode(arr[index])))
      index++
      if (index === arr.length) return root
    }
}

var root = [9,-42,-42,null,76,76,null,null,13,null,13]

var tree = buildTreeFromArr(root)
console.log(isSymmetric(tree))