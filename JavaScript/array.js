var swap = function (nums, i, j) {
    nums[i] = nums[i] ^ nums[j];
    nums[j] = nums[i] ^ nums[j];
    nums[i] = nums[i] ^ nums[j];
    return nums
}


/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function (nums) {
    let current = 0;
    let finallength = nums.length;
    if (nums.length == 0) {
        return 0;
    }
    for (let i = 0; i < nums.length; i++) {
        if (finallength > i + 1 && nums[i] == nums[i + 1]) {
            swap(nums, i + 1, finallength);

            finallength--;

        }

    }
    return finallength;

};

/** 笨方法删除数组中的重复元素
 *  因为删除数组元素耗费性能较多，此方法效率低
 * @param {number[]} nums 整型数组
 * @return {number} 清除重复元素之后的数组长度
 */
var stupidRemoveDuplicates = function (nums) {
    // 笨方法
    let current = 0;
    let finallength = nums.length;
    if (nums.length == 0) {
        return 0;
    }
    while (finallength > current) {
        for (let i = current; i < nums.length; i++) {
            if (nums[i] == nums[i + 1]) { //要删除的时候
                nums.splice(i + 1, 1);
                finallength--;
                current = i;
                break;
            } else {
                current++;
            }
        }
    }
    return finallength;
};

var nums = [1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 7, 7, 7, 10];
// var nums = [1, 1, 2]
var length = removeDuplicates(nums);
console.log(length);
console.log(nums);


