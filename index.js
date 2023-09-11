// Напиши функцию проверки полиндрома которая возвращает булевое значения?

// Base

// function isPalindrome(string) {

// 	let arr = string.split('');
// 	let reversArr = arr.reverse();
//    let resString = reversArr.join('');
 
// 	let res = string === resString;

// 	return res
	
	
// };



// Advanced

function isPalindrome(string) {

 return  string === string.split('').reverse().join('')


}



console.log(isPalindrome('шалаш'));

console.log(isPalindrome('рот'));
