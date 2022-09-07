let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maxSubArray = function(nums) {
    let prev = 0;
    let total = -Infinity;
    
    for(let i = 0; i<nums.length; i++) {
        prev = Math.max((prev+nums[i]), nums[i])
        total = Math.max(total, prev);
    }
    console.log(total);
    return total;
};

maxSubArray(arr);