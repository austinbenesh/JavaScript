function multiples (limit) {
	k = limit-1;
	k5 = k - k%5;
	k3 = k - k%3;
	k15 = k - k%15;
	return (k5 * (k5 + 5) / 10) + 
		(k3 * (k3 + 3) / 6) - 
		(k15 * (k15 + 15) / 30);
}