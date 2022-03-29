/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  var helper = function (start, end, num) {
    if (!nums1 || nums1.length < 1) return 0;
    while (start <= end) {
      const middle = start + Math.floor((end - start) / 2);
      if (nums1[middle] === num) return middle;
      if (nums1[middle] > num) end = middle - 1;
      if (nums1[middle] < num) start = middle + 1;
    }
    return start;
  };
  for (let j = 0; j < n; j++) {
    const element = nums2[j];
    const index = helper(0, m + j - 1, element);
    for (let i = m + j; i > index; i--) {
      nums1[i] = nums1[i - 1];
    }
    nums1[index] = element;
  }
};

var nums1 = [4, 5, 6, 0, 0, 0],
  m = 3,
  nums2 = [1, 2, 3],
  n = 3;
// var nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
merge(nums1, m, nums2, n);
console.log(nums1);
