class Employee {
	name: string;
	empId: number;

	toString(salutation: string): string {
		return ("Name: " + salutation + " " + this.name + ", EmpId: " + this.empId);
	}
}

var emp1: Employee = new Employee();
emp1.name = 'Deepak Rana';
emp1.empId = 1212;

var emp2: Employee = new Employee();
emp2.name = 'Gopi';
emp2.empId = 1215;

console.log('Emp1: ' + emp1.toString('Mr.'));
console.log('Emp2: ' + emp2.toString('Master'));