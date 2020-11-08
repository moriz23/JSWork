// const title = document.getElementById("main-title");
// const listItem = document.getElementsByClassName("list-item");
// const listItemQuery = document.querySelector(".list-item");
// const listItemQueryAll = document.querySelectorAll(".list-item");
// const firstOfType = document.querySelector(' ul li:first-of-type');
// const input = document.querySelector('input')
// const allLis = document.querySelectorAll('li');

// title.textContent = "Some New Text";
// title.className = 'title';
// title.style.backgroundColor = "red";
// title.style.color = "white";

// console.log(title);
// console.log(listItem);
// console.log(listItemQuery);
// console.log(listItemQueryAll);
// console.log(firstOfType);

// for(const element of allLis){
//   console.log(element)
// }

const ul = document.querySelector('ul')
console.log(ul.children);
console.log(ul.children[1]);
console.log(ul.children[0]);
console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);
console.log(ul.previousSibling);
console.log(ul.previousElementSibling);
console.log(ul.nextSibling);
console.log(ul.nextElementSibling);

const li = document.querySelector('li')
console.log(li.parentNode);
console.log(li.parentElement);
console.log(li.closest('body'));

li.style.backgroundColor ="green";

const section = document.querySelector('section');
const button = document.querySelector('button');
section.className='red-bg';

button.addEventListener('click', () => {
  // if(section.className === 'red-bg show'){
  //   section.className = 'red-bg hide';
  // } else {
  //   section.className = 'red-bg show'
  // }
  // section.classList.toggle('show');
  section.classList.toggle('hide');
})

ul.insertAdjacentHTML("beforeend", "<li class='list-item'>Item 4</li>");

const newLi = document.createElement('li');
newLi.textContent = "Item 5";
ul.appendChild(newLi);
ul.append("Some Text"); //issue with IE
ul.prepend(newLi);
ul.lastElementChild.before(newLi); //issue with safari
ul.lastElementChild.after(newLi); //issue with safari
ul.firstElementChild.replaceWith(newLi);

const secondLi = ul.children[1];
secondLi.insertAdjacentElement('afterend', newLi); //best support for all browsers.

const newLi2  = newLi.cloneNode(true);
ul.append(newLi, newLi2);
const secondUl = ul.cloneNode(true);
section.append(secondUl);

// secondUl.remove(); 
secondUl.parentElement.removeChild(secondUl);