/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var helper = function(num,start,end) {
        while(end>start) {
            const mid = start + Math.floor((end-start)/2)
            if (nums1[mid]<=num) {
                return mid
            nums1[mid]>num ? helper(num,start,mid) : helper(num,mid,end)
            } else {

            }
        }
        
        
        
    }
    var start = 0
    for (let i = 0; i < n; i++) {
        const element = nums2[i];
        const index = helper(element,start,m)
        start = index
        for (let j = index; j < m; j++) {
            nums1[j+1]
            
        }
    }
};

var nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
console.log(merge(nums1,m,nums2,n))