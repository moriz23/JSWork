const userId = 'u123';
const storeBtn = document.querySelector('#store-btn');
const retrieveBtn = document.querySelector('#retrieve-btn');

const user = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking']
};

storeBtn.addEventListener('click', () => {
 sessionStorage.setItem('uid', userId);
  localStorage.setItem('user', JSON.stringify(user));
});

retrieveBtn.addEventListener('click', () => {
  const extractedId = sessionStorage.getItem('uid');
  const extractedUser = JSON.parse(localStorage.getItem('user'));
  console.log(extractedUser);
  if(extractedId){
    console.log(`For the id - ${extractedId}`);
  } else {
    console.log("Could Not Find Id");
  }
});
