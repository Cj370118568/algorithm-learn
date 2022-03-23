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
  var process = function(nums) {
    var length = nums.length
    if(length<1) return null
    if(length<2) return new TreeNode(nums[0])
    
    var middle = Math.ceil(length/2)
    var left = nums.splice(0,middle)
    const root = new TreeNode(left.pop())
    root.left = process(left)
    root.right = process(nums)
    return root
  }
  return process(nums)
 
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

var arr = [-10,-3,0,5,9]
console.log(sortedArrayToBST(arr))