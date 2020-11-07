const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

const secondRandomNumber = Math.random();

console.log(randomNumber);
if(randomNumber > 0.7){
  alert(`${randomNumber} > 0.7`)
}

if ((randomNumber > 0.7 && secondRandomNumber > 0.7) || randomNumber < 0.2 || secondRandomNumber < 0.2){
  alert(`Random Number: ${randomNumber} and SecondRandomNumber: ${secondRandomNumber}`)
}

const numArray = [1, 2, 3, 4, 5, 6, 7];

for(var i = 0; i < numArray.length; i++){
  console.log(numArray[i])
}

console.log('----------------------');

for(const number of numArray){
  console.log(number);
}

console.log('----------------------');

for(var i = numArray.length - 1; i >= 0; i--){
  console.log(numArray[i]);
}