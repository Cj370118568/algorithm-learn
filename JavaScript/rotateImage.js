/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {

  var swap = function (nums, i, j) {
    if (i==j && i==Math.floor(nums.length/2)) {
      return 
    }
    var i1 = j,j1 = nums.length-1-i
    var i1,j1
    var tmp,tmp1
    tmp = nums[i][j]
    
    while (!(i1==i&&j1==j)) {
        tmp1 = nums[i1][j1]
        nums[i1][j1]=tmp
        
        const tmpj1 = j1
        j1 = nums.length - 1 - i1
        i1 = tmpj1
        tmp=tmp1
      }
      nums[i][j]=tmp
  }

  var n = matrix.length
  for (let i = 0; i < n; i++) {
    //i n-1-i => j
    //j =>i
    for (let j = i; j < n-1-i; j++) {
      swap(matrix,i,j,j,n-1-i)

    }
  }

  return matrix
};

// var matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

console.log(rotate(matrix))