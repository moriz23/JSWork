const task1 = document.querySelector("#task-1");
const task1ID = document.getElementById('task-1');
const title = document.querySelector('title');
const h1 = document.getElementsByTagName('h1');
const docHead = document.head;
const docTitle = docHead.querySelector('title');

task1.style.backgroundColor = 'black';
task1ID.style.color = '#fff';
docTitle.textContent = "Assignment - Solved";
h1[0].textContent = "Assignment - Solved";
