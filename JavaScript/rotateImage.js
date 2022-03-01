/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {

  var swap = function (nums, i, j,i1,j1) {
    const tmp = nums[i][j]
    nums[i][j]=nums[i1][j1]
    nums[i1][j1]=tmp
    return nums
}

  var n = matrix.length
  for(let i=0;i<n;i++) {
    //i n-1-i => j
    //j =>i
    for(let j=0;j<n;j++) {
      if (i<(Math.ceil(n/2)) || j<(Math.ceil(n/2))) {
        
        console.log('old:',i,j)
        console.log('new',j,n-1-i)
        swap(matrix,i,j,j,n-1-i)
      }

    }
  }
  return matrix
};

// var matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
var matrix = [[1,2,3],[4,5,6],[7,8,9]]

console.log(rotate(matrix))