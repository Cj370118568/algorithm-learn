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
    // 笨方法
    let finish = false;
    let current = 0;
    let finallength = nums.length;
    if (nums.length == 0) {
        return 0;
    }
    while(!finish) {
        for (let i = current; i < nums.length; i++) {
            console.log('final',finallength)
            console.log('current',current)
            if (finallength > current ) {
                if (nums[i] == nums[i + 1]) { //要删除的时候
                    console.log('before',nums,current,i+1);
                    nums.splice(i+1,1);
                    console.log('after',nums);
                    finallength--;
                    current=i;
                    break;
                } else {
                    current++;
                }
            } else {
                console.log('finish')
                finish=true;
                break;
            }

    
        }
    }
    
    return finallength;

};

// var nums = [1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 7, 7, 7, 10];
var nums = [1,1,2]
var length = removeDuplicates(nums);
console.log(length);
console.log(nums);

/**
 * @param {number[]} nums
 * @return {number}
 */
 var testremoveDuplicates = function (nums) {
    let current = 0;
    let finallength = nums.length;
    if (nums.length == 0) {
        return 0;
    }
    for (let i = 0; i < nums.length; i++) {
        if (finallength > i + 1 && nums[i] == nums[i + 1]) {
            swap(nums,i+1,finallength);

            finallength--;

        }

    }
    return finallength;

};
