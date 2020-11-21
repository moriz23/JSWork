let numbers = [1, 2, 3, 4, 5, 6, 5070, 7, 8, 9, 10];

const greaterThanFive = numbers.filter((number, index, numbers) => {
  return number > 5;
});

const greaterThanFiveArrayObj = numbers.map(number => ({num: number}));

const multiplication = numbers.reduce((currResult, currValue) => {
  return currResult * currValue;
}, 1)

console.log(greaterThanFive);
console.log(greaterThanFiveArrayObj);
console.log(multiplication);

const findMax = (...nums) => {  let currMax = nums[0];
  for(const num of nums){
    if(num > currMax){
      currMax = num;
    }
  }
  return currMax;
}

const findMin = (...nums) => {
  let currMax = nums[0];
  let currMin = nums[0];
  for(const num of nums){
    if(num > currMax){
      currMax = num;
    }
    if(num < currMin){
      currMin = num
    }
  }
  return [currMin, currMax];
}

const [min, max] = (findMin(...numbers));

const userIds = new Set();
userIds.add(10);
userIds.add(10);
userIds.add(0);
userIds.add(1);

console.log(findMax(...numbers));
console.log(findMin(...numbers));
console.log(min, max);
console.log(userIds);