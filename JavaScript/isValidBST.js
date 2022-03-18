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
 var isValidBST = function(root) {
   var process = function(tree) {
     if(!tree) {
      return null
     }

     var left = process(tree.left)
     var right = process(tree.right)

     var returnData = {
      "isBST":true,
      "min":0,
      "max":0
    }
     if((left && !left.isBST) || (right && !right.isBST)) {
       returnData.isBST =false
      return returnData
     }

     
     if(left&&right) {
       if(left.max<tree.val && right.min>tree.val) {
         returnData.min = left.min
         returnData.max = right.max
       } else {
         returnData.isBST = false
       }

     } else {
       if(!left && right) { //只有右子树
        if(tree.val<right.min) {
          returnData.min=tree.val
          returnData.max=right.max
        } else {
          returnData.isBST = false
          returnData.min = right.min
          returnData.max = right.max
        }
       } else if(!right && left){ //只有左子树
        if(left.max < tree.val) {
          returnData.min = left.min
          returnData.max = tree.val
        } else {
          returnData.isBST = false
          returnData.min = left.min
          returnData.max = left.max
        }
       } else {
         return null;
       }
     }
     return returnData
   }

   if (!root) {
     return true
   }
   return process(root) === null ? true : process(root).isBST


};