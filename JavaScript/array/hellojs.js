

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
   let finish = false
   let current;
   if(nums.length < 2) {
     return 2
   }
   while (!finish) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i+1; j < array.length; j++){
        const element = array[j];
        if(nums[j]-nums[i]==0) {
          current = j;
        }
      }
      
    }
   }
  return 0;
};

let nums = [1,2,3,3,4,4,5,5,5,6,7,7,9,10];

let n = removeDuplicates(nums);

console.log(n)