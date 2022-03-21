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
   var i=0
   var process = function(tree) {
     i++

    var returnData = {
      "isBST":true,
      "min":0,
      "max":0
    }
    if(!tree) {
      return null
    }

     var left = (tree && tree.left) ? process(tree.left) : null
     var right = (tree && tree.right) ? process(tree.right) : null
     console.log('---------------')
     console.log(left)
     console.log(right)
     console.log(i)
     console.log("treenode",tree)
     console.log('---------------')


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
         returnData.min = tree.val
         returnData.max = tree.val
       }
     }
     return returnData
   }

   if (!root) {
     return true
   }
   return process(root) === null ? true : process(root).isBST


};

function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}

var initaltree = new TreeNode(5,new TreeNode(1,null,null),new TreeNode(4,new TreeNode(3,null,null),new TreeNode(6,null,null)))

console.log(isValidBST(initaltree))