function filter (xs, condition) {
	var ret = [];
	var ctr = 0;
	var ctr2 = 0;
	while(ctr < xs.length) {
		if (condition(xs[ctr]))
		{
			ret[ctr2] = xs[ctr];
			ctr2++;
		}
		ctr++;
	}
	return ret;
}