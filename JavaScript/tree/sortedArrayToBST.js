/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  var length = nums.length
  if(length<1) return null
  if(length<2) return root = new TreeNode(nums[0])
  
  var middle = Math.ceil(length/2)
  var left = nums.splice(0,middle)
  const root = new TreeNode(left.pop())
  const nodes = [root]
  let index = 0

  while(index<length-1) {
     
  }
  for (node of nodes) {
    nodes.push(node.left = new TreeNode(left.shift()))
    index++
    if(index == length-1) return root

    nodes.push(node.right = new TreeNode(nums.shift()))
    index++
    if(index == length-1) return root
  }
  
  
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

var nums = [-10,-3,0,5,9]
console.log(sortedArrayToBST(nums))