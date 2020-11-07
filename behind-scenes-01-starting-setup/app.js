function getName(){
  return prompt("Enter you name");
}

function greet(){
  const age = 29;
  const name = getName();
  console.log(`Hello my name is ${name} and I am ${age} years old.`)
}

greet();