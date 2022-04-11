export default class BinaryTree {
  constructor(val, left, right = null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
  buildTreeFromArr(arr) {
    if (arr.length === 0) return null;

    const root = new TreeNode(arr[0]);
    const nodes = [root];
    let index = 1;
    for (node of nodes) {
      const left = arr[index] !== null ? new TreeNode(arr[index]) : null;
      node.left = left;
      if (left) {
        nodes.push(left);
      }
      index++;
      if (index === arr.length) return root;
      const right = arr[index] !== null ? new TreeNode(arr[index]) : null;
      node.right = right;
      if (right) {
        nodes.push(right);
      }
      index++;
      if (index === arr.length) return root;
    }
  }
}
