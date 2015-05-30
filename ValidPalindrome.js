/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
	var reduced = s.replace(/\W/g, '').toLowerCase();
	var reversed = reduced.split('').reverse().join('')

	if(reduced === reversed)
		return true;
	else
		return false;	
};

var good = "I, am: ma i"
var bad = "mop";

console.log(isPalindrome(good));
console.log(isPalindrome(bad));
