class Arithmatic {
	add(num1: number, num2: number, num3?: number): number {
		let sum = num1 + num2;
		if(num3) {
			sum += num3;
		}
		return sum;
	}

	addAll(...nums: number[]): number {
		let sum = 0;
		nums.forEach(function(num) {
			let d;
			this
			sum += num;
		});
		return sum;
	}

}

let arth:Arithmatic = new Arithmatic()

console.log('Sum: ' + arth.add(1909, 200));
console.log('Sum: ' + arth.add(1909, 200, 900));

console.log('Sum All: ' + arth.addAll(1909, 200, 900, 8989, 909, 121));
console.log('Sum All: ' + arth.addAll(1909, 200, 900, 8989, 909, 121, 90, 434));