let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// const maxSubArray = (nums) => {
//     let prev = 0;
//     let total = -Infinity;
    
//     for(let i = 0; i<nums.length; i++) {
//         prev = Math.max((prev+nums[i]), nums[i])
//         total = Math.max(total, prev);
//     }
//     console.log(total);
//     return total;
// };

// maxSubArray(arr);

// Divide and Conquer Solution

var maxSubArray = function(nums) {
    return findMax(nums, 0, nums.length - 1)
};

var findMax = function (nums, l, r) {
    if (l == r) {
        return nums[l]
    }
    
    let mid = Math.floor((l + r)/2)
    let leftSum = findMax(nums, l, mid) 
    let rightSum = findMax(nums, mid+1, r) 
    const crossingSum = findCrossingSum(nums, l, mid, r)
    return Math.max (crossingSum, leftSum, rightSum)
}

var findCrossingSum = function(nums, l, mid, r) { 
    let sum=0
    let maxLSum = -Infinity
    for(let i = mid; i >= l; i--) {
        sum += nums[i]
        maxLSum = Math.max(maxLSum, sum)
    }
    sum =0
    let maxRSum = -Infinity
    for (let i = mid + 1; i <= r; i++) {
        sum += nums[i]
        maxRSum = Math.max(maxRSum, sum)
    }
    
    return maxRSum + maxLSum;
}

console.log(maxSubArray(arr));