/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {

  var isValueExist = function (v, array) {
    var indexs = []
    for (let index = 0; index < array.length; index++) {
      if (array[index] == v) {
        indexs.push(index)
      }
    }
    return indexs
  }
  var storeItems = {}
  var storeValues = []
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      var tmp = board[i][j]
      if (tmp != '.') {
        const indexs = isValueExist(tmp, storeValues)
        if (indexs.length > 0) {
          for (const valueIndex of indexs) {
            //同行/同列
            var tmpItem = storeItems['' + valueIndex + '']
            let tmpi = tmpItem['x']
            let tmpj = tmpItem['y']
            if (tmpi == i || tmpj==j) {
              return false
            }

            //同组
            let tmpx = Math.floor(tmpItem['x'] / 3)
            let tmpy = Math.floor(tmpItem['y'] / 3)
            let x = Math.floor(i / 3)
            let y = Math.floor(j / 3)
            if(tmpx==x&&tmpy==y) {
              return false
            }
          }
        }
        const index = storeValues.push(tmp) - 1
        storeItems['' + index + ''] = { 'x': i, 'y': j }

      }
    }

  }
  return true
};


var board =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]


console.log(isValidSudoku(board))