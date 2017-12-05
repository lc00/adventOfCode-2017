/*
--- Day 4: High-Entropy Passphrases ---

A new system policy has been put in place that requires all accounts to use a passphrase instead of simply a password. A passphrase consists of a series of words (lowercase letters) separated by spaces.

To ensure security, a valid passphrase must contain no duplicate words.

For example:

aa bb cc dd ee is valid.
aa bb cc dd aa is not valid - the word aa appears more than once.
aa bb cc dd aaa is valid - aa and aaa count as different words.
*/

var fs = require('fs')

function getInput(){
	let input = fs.readFileSync('/Users/llc/projects/adventOfCode-2017/day4-input.txt', 'utf8') 

	let arrOfStr = input.split('\n')
	// console.log('getInput', arrOfStr)
	return arrOfStr
}


function isValid (password){
	// console.log('isValid, password', password)
	if(password.length === 0){
		// console.log('password is unique!!!')
		return true
	}

	let word = password.pop()

	// console.log('isValid | word', word)

	for(let i=0; i<password.length; i++){
		// console.log('isValid | password[i]', password[i])
		
		if(word == password[i]){
			// console.log('meow..')
			return false
		}
	}

	return isValid(password)
}

let count = 0
let result 
function getResult (input){
	for (var i = 0; i < input.length; i++) {
		input[i] = input[i].split(' ')
	
		isValid(input[i]) ? count+=1 : null
	}

	return count
}


let arrOfStr = getInput()

console.log('final result:', getResult(arrOfStr))







