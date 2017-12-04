function toggle (direction){
	if(direction === "+")
		return "-"
	else
		return "+"
}


function findTotalStepsFromNumTo1InTaxiCabGeometry(num){

	let startNum = 1
	let x = 0
	let y = 0
	let nextNum 

	let deltaStep = 1
	let count = 0
	let direction = "+"
	let coord = 'x'

	for(let i=2; i<=num; i++){
		// start with 1 with coord (0,0)
console.log('direction...', direction)
console.log('count', count)
		if(direction === "+" && count < deltaStep && coord === 'x'){
			x += 1
			count += 1
			if(count >= deltaStep){
				count = 0
				coord = 'y'
			}
		}

		else if (direction === "+" && count < deltaStep && coord === 'y'){
			y += 1
			count += 1
			if(count >= deltaStep){
				count = 0
				coord = 'x'

				deltaStep += 1
				direction = toggle(direction)
			}
		}

		else if (direction === "-" && count < deltaStep && coord === 'x'){
			x -= 1
			count += 1

			if(count >= deltaStep){
				count = 0
				coord = 'y'
			}
		}
		else {
			y -= 1
			count += 1

			if(count >= deltaStep){
				count = 0
				coord = 'x'

				deltaStep += 1
				direction = toggle(direction)
			}
		}

		console.log('i.....', i, 'direction', direction, 'coord', coord)
	}
	console.log(num, 'x', x, 'y', y)
	return Math.abs(x) + Math.abs(y)
}

console.log('result', findTotalStepsFromNumTo1InTaxiCabGeometry(325489))
