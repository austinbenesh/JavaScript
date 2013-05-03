function map(xs, fn) {
 	var ret = [];
 	var ctr = 0;
 	while(ctr < xs.length) {
 		ret[ctr] = fn(xs[ctr]);
 		ctr++;
 	}
 	return ret;
}