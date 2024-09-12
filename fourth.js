const names = ["Анна", "Иван", "Мария", "Алексей", "Екатерина"];

for (const [index, name] of names.entries()) {
	console.log(`Студент ${name}, ваш порядковый номер: ${index}`);
}

function findLongestName(names) {
	return names.reduce((acc, name) => {
		if (name.length > acc.length) {
			return name;
		}
		return acc;
	});
}

console.log(findLongestName(names));
