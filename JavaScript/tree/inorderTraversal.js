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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  var nodes = [];
  var process = function (node) {
    if (!node) return null;
    process(node.left);
    nodes.push(node.val);
    process(node.right);
  };
  process(root);
  return nodes;
};
