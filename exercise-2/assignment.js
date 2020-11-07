const task3Element = document.getElementById('task-3');

function sayHi(){
  alert("HEllo");
}

function sayHiName(name){
  alert(`Hello ${name}`);
}

sayHi();
sayHiName("Mohammed Rizvi");

task3Element.addEventListener("click", sayHi);

function createSentence(word1, word2, word3){
  alert(`${word1} ${word2} ${word3}`)
}

createSentence("Hello there, ", "what is you", "name?");