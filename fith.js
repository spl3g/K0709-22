const today = new Date(Date.now());

function formatDate(date) {
	return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
}

console.log(formatDate(today));

function getDifference(date1, date2) {
	return Math.floor((date1 - date2) / (1000 * 60 * 60 * 24));
}
console.log(getDifference(today, new Date("9/11/2024")));
