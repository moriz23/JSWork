// function sayHello(name) {
//   console.log('Hi ' + name);
// }

const FALLBACK_NAME = "MOHAMMED";

const sayHello = name => console.log('Hi ' + name);
const sayHelloArguments = (greeting, name) => console.log(`${greeting} ${name}`);
const sayHelloNoArguments = () => console.log("Hi Mohammed");
const sayHelloReturn = (name = FALLBACK_NAME) => `HELLO ${name}`;

const checkInput = (cb, ...texts) => {
  let hasEmptyText = false;

  for(const text of texts){
    if(!text){
      hasEmptyText = true;
      break;
    }
  }
  if(!hasEmptyText){
    cb()
  }
}

sayHello("Mohammed");
sayHelloArguments("HELLO", "JOHN");
sayHelloNoArguments();
console.log(sayHelloReturn("MAX"));
checkInput(() => {console.log("ALL NOT EMPTY")}, "HELLO", "MY", "NAME", "IS", "", "RIZVI");
