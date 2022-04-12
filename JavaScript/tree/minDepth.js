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
 * @return {number}
 */
var minDepth = function (root) {
  const process = function (node) {
    if (!node) return null;
    if (!node.left && !node.right) return 1;

    const leftdata = process(node.left);
    const rightdata = process(node.right);
    if (leftdata === null) return rightdata + 1;
    if (rightdata === null) return leftdata + 1;
    return Math.min(leftdata, rightdata) + 1;
  };
  return process(root);
};

import BinaryTree from "../common/BinaryTree.js";

var arr = [2, null, 3, null, 4, null, 5, null, 6];

const root = BinaryTree.buildTreeFromArr(arr);
console.log(minDepth(root));
