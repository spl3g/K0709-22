function reverseString(string) {
	return string.split("").reverse().join("");
}

function removeVowels(string) {
	return string.replace(/[aeioyuAEIOYU]/g, "");
}

console.log(reverseString("hello"));
console.log(removeVowels("hello"));
