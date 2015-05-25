/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
	var neg = (x < 0) ? true : false;                 // Negative flag

	x = Math.abs(x).toString().split('').reverse();   // Reverse string
	if(parseInt(x.join('')) > 2147483647)             // Check overflow
		return 0;
	if(neg)                                           // Add negative back
		x.unshift('-'); 
	x = parseInt(x.join(''));                         // String again

	return x;
};

console.log(reverse(123));
console.log(reverse(-53030));
console.log(reverse(530993000899));