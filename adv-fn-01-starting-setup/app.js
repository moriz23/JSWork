const add = (num1, num2) => {
  return num1 + num2;
}

console.log(add(5,7));

function createTaxCalculator(tax){
  function calculateTax(amount){
    return amount * tax;
  }

  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));

let userName = 'Max';

function greetUser() {
  let name = userName
  console.log('Hi ' + name);
}

greetUser();


// function powerOf(x, n){
//   let result = 1;

//   for(let i = 0; i <n; i++){
//     result *= x;
//   }

//   return result;
// }

function powerOf(x, n){
  // if( n === 1){
  //   return x;
  // }
  // return x * powerOf(x, n - 1);
  return n === 1 ? x : x * powerOf(x, n - 1);
}


console.log(powerOf(2, 3))

const myself = {
  name: 'Max',
  friends: [
    {
      name: 'Manuel',
      friends: [
        {
          name: 'Chris'
        }
      ]
    },
    {
      name: 'Julia'
    }
  ]
};

function getFriendNames(person){
  const collectedNames = []

  if(!person.friends){
    return [];
  }
  for(const friend of person.friends){
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendNames(friend));
  }

  return collectedNames;
}

console.log(getFriendNames(myself));

function random(min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min);
}
console.log(random(1, 10));

function productDescription(strings, productName, productPrice){
  console.log(strings);
  console.log(productName);
  console.log(productPrice);
  return 'This is a product';
}

prodName = 'JavaScript Course'
prodPrice = 29.99

const productOutput = productDescription`This product ${prodName} is ${prodPrice}.`;

console.log(productOutput);

