const ids = new Set(['Hi', 'from', "set"]);
ids.add(2);
ids.delete('Hi');
for(const entry of ids.entries()){
  console.log(entry[0]);
}

const person1 = {name: 'Max'};
const person2 = {name: 'Tom'};

const personData = new Map([[person1, [{date: 'yesterday', price: 10}]]]);

personData.set(person2, [{date: '2 weeks ago', price: 20}]);

console.log(personData)
console.log(personData.get(person1));


for(const [key, value] of personData.entries()){
  console.log(key, value);
}

for(const key of personData.keys()){
  console.log(key);
}

for(const value of personData.values()){
  console.log(value);
}

let person3 = {name: 'Jack'};
const personss = new WeakSet();
personss.add(person3);

console.log(personss);

const personsData = new WeakMap();
personsData.set(person3, 'Extra Info!');
console.log(personsData)

