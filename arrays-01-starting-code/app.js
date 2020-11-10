const numbers = [1, 2, 3];
console.log(numbers);

const moreNumbers = new Array('Hi', 'Welcome!');
// const moreNumbers = new Array(5); single number will create length of that number
console.log(moreNumbers);

const evenMoreNumbers = Array(1, 2, 3);
console.log(evenMoreNumbers);

const yetMoreNumbers = Array.of(7, 8, 9); //slower
console.log(yetMoreNumbers);

const secondMoreNumbers = Array.from('Hi!')
console.log(secondMoreNumbers);

const listItems = document.querySelectorAll('li');
console.log(Array.from(listItems));

const hobbies = ['cooking', 'sports'];
const personalData = [30, 'Max', {moreDetail: []}];

const nested = [[1, 1.6], [5, 9], [-1.9, 98]];

for(const data of nested){
  for(dataPoint of data){
    console.log(dataPoint);
  }
}

console.log(personalData[1]);
hobbies.push('reading');
hobbies.unshift('coding');
hobbies.pop('coding');
hobbies.shift();
hobbies[1] = "Jumping";
console.log(hobbies);

hobbies.splice(1, 0, 'Food');
console.log(hobbies);

hobbies.splice(0, 1)
console.log(hobbies);

hobbies.splice(-2, 1)
console.log(hobbies);

const testResults =[1, 5.6, -4, 0, 90, 102, 5.6];
// const storedResults = testResults.slice(-1, -3);
const storedResults = testResults.concat([50, 70, 9.9, 88]);

testResults.push('907');

console.log(testResults, storedResults);
console.log(testResults.indexOf(5.6));
console.log(testResults.lastIndexOf(5.6));
console.log(testResults.includes(90));

const dataPerson = [{name: 'Max'}, {name: 'Manuel'}];
console.log(dataPerson.indexOf({name: 'Max'})); //does not work bc objects are references.

const manuel = dataPerson.find((person, index, persons) => {
  return person.name = 'Manuel';
})
console.log(manuel);

manuel.name = 'Anna';
console.log(manuel, dataPerson);

const maxIndex = dataPerson.findIndex((person, index, persons) => {
  return person.name = 'Manuel';
})
console.log(maxIndex);

const prices =[10.99, 5.00, 11.00, 12.99];
const tax = 0.19;
const taxAdjustmentPrices = [];

for(const price of prices){
  taxAdjustmentPrices.push(price * (1 + tax));
}

console.log(taxAdjustmentPrices);

prices.forEach((price, index, prices) => {
  const priceObj = {index: index, taxAdjustPrice: price * (1 + tax)};
  taxAdjustmentPrices.push(priceObj);
})

console.log(taxAdjustmentPrices);

const taxAdjusted= prices.map((price, index, prices) => {
  const priceObj = {index: index, taxAdjustPrice: price * (1 + tax)};
  taxAdjustmentPrices.push(priceObj);
  return priceObj;
})

// console.log(prices, taxAdjusted);

const sortedPrices = prices.sort((a, b) => {
  if(a > b){
      return 1;
  } else if(a === b){
    return 0;
  } else {
    return -1;
  }
});
//console.log(sortedPrices.reverse());
console.log(sortedPrices);

const filteredArray = prices.filter((price, index, prices) => {
  return price > 6;
});

console.log(filteredArray);

// let sum = 0;

// prices.forEach((price) => {
//   sum += price;
// });

// console.log(sum);

const sum = prices.reduce((prevValue, curValue, curIndex, prices) => { 
  return prevValue + curValue;
}, 0);

console.log(sum);

const newData = 'new york;10.99;2000';

const transformedData = newData.split(';')
console.log(transformedData);

const nameFragments = ["Mohammed", "Rizvi"];
const mergedName = nameFragments.join(" ");
console.log(mergedName);

const copyNameFragments = [...nameFragments];
nameFragments.push("hello");
console.log(nameFragments, copyNameFragments);

console.log(Math.min(...prices));

const person = [{name: "Mohammed", age: 29}, {name: "Max", age: 30}]
const copiedPersons = [...person];
person[0].age = 31;

person.push({name: "Anna", age: 30})
console.log(person, copiedPersons);

const nameFragments2 = ["Mohammed", "Rizvi", "hello", 30];
const [firstName, lastName, ...otherInfo] = nameFragments2
console.log(firstName, lastName, otherInfo);







