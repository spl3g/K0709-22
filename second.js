const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 33));

function findMinMax(arr) {
	return { max: Math.max(...arr), min: Math.min(...arr) };
}
console.log(findMinMax(arr));
