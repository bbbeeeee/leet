var testInput = [2, 7, 11, 15]
var testTarget = 9

/**
 * Returns indices of two numbers which add up to target.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	for(var i = 0; i < nums.length; i++){
		for(var j = 0; j < nums.length; j++){
			if(j == i) continue;
			if(nums[i] + nums[j] === target){
				return [i, j];
			}
		}
	}
	// Could return error if nothing matches.
	return -1
};

console.log(twoSum(testInput, testTarget));