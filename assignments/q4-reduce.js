function reduce (xs, fn, seed) {
	if (seed == null)
		seed = xs[0];
  	if (xs.length == 0)
  		return seed;
  	
}

console.log(reduce([1, 2, 3, 4, 5, 6], function (memo, x) { return memo + x; }));
console.log(reduce([1, 2, 3, 4, 5, 6], function (memo, x) { return memo + x; }, 21));
