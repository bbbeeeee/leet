/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
	this.val = val;
  this.left = this.right = null;
}

/**
 * @param {number[]} num
 * @return {TreeNode} 
 */
function sortedArrayToBST(num) {
  if(num.length === 0)
  	return null;

  function BST(nums){
  	if(nums.length === 0)
  		return null;
  	
  	var middle = Math.floor(nums.length / 2);
  	var node = new TreeNode(nums[middle]);
  	var left = nums.slice(0, middle);
  	var right = nums.slice(middle + 1, nums.length);

  	node.left = BST(left);
  	node.right = BST(right);

  	return node;
  }

  return BST(num);
}


// Test 
nums = [1, 2, 3, 4, 5, 6]
console.log(sortedArrayToBST(nums))

