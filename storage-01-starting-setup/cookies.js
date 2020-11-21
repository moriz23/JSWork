const userId = 'u123';
const storeBtn = document.querySelector('#store-btn');
const retrieveBtn = document.querySelector('#retrieve-btn');



storeBtn.addEventListener('click', () => {
  const userId = 'u123'
  const user = {name: "Max", age: 30};
  document.cookie = `uid=${userId}; max-age=360`;
  document.cookie = `user=${JSON.stringify(user)}`;
});

retrieveBtn.addEventListener('click', () => {
   const cookieData = document.cookie.split(';');
   const data = cookieData.map(i => {
     return i.trim();
   });
   console.log(data[1].split('=')[1]);
});