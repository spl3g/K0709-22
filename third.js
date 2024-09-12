const user = {
	name: "Noname",
	age: 0,
	email: "email@email.email",

	greet() {
		return `Привет, ${this.name}!`;
	},
};

function displayUserInfo(user) {
	return `Имя: ${user.name}, Возраст: ${user.age}, Email: ${user.email}`;
}

console.log(displayUserInfo(user));

console.log(user.greet());
