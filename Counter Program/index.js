const counter = document.getElementById("counter");
const decbtn = document.getElementById("decbtn");
const resbtn = document.getElementById("resetbtn");
const incbtn = document.getElementById("incbtn");

let count = 0;

counter.textContent = count;

decbtn.addEventListener("click", function(){
  count--;
  counter.textContent = count;
});

resbtn.addEventListener("click", function(){
  count = 0;
  counter.textContent = count;
});

incbtn.addEventListener("click", function(){
  count++;
  counter.textContent = count;
});