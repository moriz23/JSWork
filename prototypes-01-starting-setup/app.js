class AgedPerson {
  printAge(){
    console.log(this.age)
  }
}

class Person extends AgedPerson {
  name = 'Maz';

  constructor(){
    super();
    this.age = 30;
  }

  greet(){
    console.log(
      'Hi ! am ' + this.name + ' and I am ' + this.age + ' years old.'
    );
  }
}

// function Person(){
//   this.age = 30;
//   this.name = 'Max';
//   this.greet = function(){
//     console.log(
//       'Hi ! am ' + this.name + ' and I am ' + this.age + ' years old.'
//     );
//   }
// }

// Person.prototype = {
//   printAge(){
//     console.log(this.age);
//   }
// }

const person = new Person();
person.greet();
person.printAge();
console.log(person.__proto__);

console.log(typeof Person)