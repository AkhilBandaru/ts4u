var Employee = (function () {
    function Employee() {
    }
    Employee.prototype.toString = function (salutation) {
        return ("Name: " + salutation + " " + this.name + ", EmpId: " + this.empId);
    };
    return Employee;
})();
var emp1 = new Employee();
emp1.name = 'Deepak Rana';
emp1.empId = 1212;
var emp2 = new Employee();
emp2.name = 'Gopi';
emp2.empId = 1215;
console.log('Emp1: ' + emp1.toString('Mr.'));
console.log('Emp2: ' + emp2.toString('Master'));
