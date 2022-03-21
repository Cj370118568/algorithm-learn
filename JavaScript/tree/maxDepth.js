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
 var maxDepth = function(root) {

    var process = function (tree) {
        if(tree == null) {
            return 0
        }
        var left = process(tree.left)
        var right = process(tree.right)

        return Math.max(left,right)+1
    }

    return process(root)

};
