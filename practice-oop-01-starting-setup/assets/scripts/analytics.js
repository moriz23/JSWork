const intervaleId = setInterval(() => {
  console.log("Analytics are processing.....");
}, 2000);

document.getElementById('stop-analytics-btn').addEventListener('click', () =>{
  clearInterval(intervaleId);
});
