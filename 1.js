var testInput = [0, 2, 4, 6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44]
var testTarget = 24

/**
 * Naive
 * Returns indices of two numbers which add up to target.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumNaive = function(nums, target) {
	for(var i = 0; i < nums.length; i++){
		for(var j = 0; j < nums.length; j++){
			if(j == i) continue;
			if((nums[i] + nums[j]) === target){
				return [i, j];
			}
		}
	}
	// Could return error if nothing matches.
	return -1
};

/**
 * Optimized
 * Returns indices of two numbers which add up to target.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumOptimized = function(nums, target){
	var p = {};

	for(var i = 0; i < nums.length; i++){
		if(p.hasOwnProperty(nums[i])){
			return [p[nums[i]] + 1, i + 1]
		} else{
			p[target - nums[i]] = i;
		}
	}
}


console.log(twoSumOptimized(testInput, testTarget));