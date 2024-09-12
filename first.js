function isPrime(num) {
	for (let i = 2; i <= Math.floor(num ** 0.5); i++) {
		if (num % i == 0) {
			return false;
		}
	}
	return true;
}

for (let i = 2; i < 20; i++) {
	console.log(i, isPrime(i));
}
