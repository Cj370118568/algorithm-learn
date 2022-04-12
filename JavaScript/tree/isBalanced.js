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
var isBalanced = function (root) {
  const process = function (node) {
    if (!node) return { isBalanced: true, height: 0 };
    if (!node.left && !node.right) return { isBalanced: true, height: 1 };

    const leftData = process(node.left);
    const rightData = process(node.right);

    if (!leftData.isBalanced || !rightData.isBalanced) {
      return { isBalanced: false, height: 0 };
    }

    const abs = Math.abs(leftData.height - rightData.height);
    return {
      isBalanced: abs <= 1,
      height: Math.max(leftData.height, rightData.height) + 1,
    };
  };
  return process(root).isBalanced;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function buildTreeFromArr(arr) {
  if (arr.length === 0) return null;

  const root = new TreeNode(arr[0]);
  const nodes = [root];
  let index = 1;
  for (let node of nodes) {
    if (arr[index]) nodes.push((node.left = new TreeNode(arr[index])));

    index++;
    if (index === arr.length) return root;
    if (arr[index]) nodes.push((node.right = new TreeNode(arr[index])));
    index++;
    if (index === arr.length) return root;
  }
}

var root = buildTreeFromArr([]);
console.log(isBalanced(root));
