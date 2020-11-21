//library land
const uid = Symbol('uid');

console.log(uid);

const user = {
  //id: 'p1',
  [uid]: 'p1',
  name: 'Max',
  age: 30,
  [Symbol.toStringTag]: 'User Object'
};

// app land using library

user.id = 'p2';
console.log(user);
console.log(user.toString());

const company = {
  employees: ['Max', 'Manu', 'Anna'],
  next() {
    const returnValue = {
      value: this.cuEmployees[0], 
      done: false
    };
    this.curEmployee++
    return returnValue
  },
  getEmployee: function* employeeGenerator(){
    // let employee = company.next();

    // while(!employee.done){
    //   yield employee.value;
    //   employee = company.next();
    // }
    let currentEmployee = 0;
    while(currentEmployee < this.employees.length){
      yield this.employees[currentEmployee];
    }
  }
}

console.log(company.getEmployee.next());
