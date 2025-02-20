function Employee(name,position,salary){
    this.name = name
    this.position = position
    this.salary = salary
}

Employee.prototype.applyBonus = function(bonus){
    this.salary += (this.salary/100)*bonus
}

const name = "Alice"
const position = "Manager"
const salary = 50000
const bonus = 10

const employee = new Employee(name,position,salary)
employee.applyBonus(bonus)
console.log(employee.salary);
