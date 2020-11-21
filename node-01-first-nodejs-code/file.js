// const userName = 'Mohammed Rizvi';

// console.log(`Hi ${userName}!`);

const fs = require('fs');

fs.readFile('user-data.txt', (err, data) => {
  if(err){
    console.log(err);
  } else {
    console.log(data.toString());
  }
})

fs.writeFile('user-data.txt', 'username=Max', error =>{
  if(error) {
    console.log(error);
  } else {
    console.log("Wrote to file");
  }
});
