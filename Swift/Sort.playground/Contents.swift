import UIKit


//基本排序算法
var array = [3,5,7,0,89,2,100,55,32,15]

//插入排序
//思路：从第二个元素起，把元素放置在左边已经排序好的序列中的合适位置
func insertSort(arr:[Int]) -> [Int] {
    let arrCount = arr.count
    guard arrCount > 0 else {
        return arr
    }
    var sortedArr = [arr[0]]   //左边排好序的序列
    for i in 1..<arrCount {
        //从第二个元素开始便利，依次把每个元素插入到左边序列中合适的位置
        for j in 0..<sortedArr.count {
            if sortedArr[j] > arr[i] {
                sortedArr.insert(arr[i], at: j)
                break
            } else {
                sortedArr.insert(arr[i], at: j+1)
                break
            }
        }
    }
    return sortedArr
}

////https://www.runoob.com/w3cnote/insertion-sort.html
//func insertSort( arr:[Int]) -> [Int] {
//    var temArr = arr
//    for i in 1..<temArr.endIndex {
//        let temp = temArr[i]
//        for j in (0..<i).reversed() {
//            if temArr[j] > temp {
//                temArr.swapAt(j, j+1)
//            }
//        }
//    }
//    return temArr
//}

let sortedArr = insertSort(arr: array)
