const roller = document.getElementById("roller");
const results = document.getElementById("results");

let random = Math.floor(Math.random() * 6) + 1;

console.log(random);

roller.addEventListener("click", function(){
  random = Math.floor(Math.random() * 6) + 1;
  results.textContent = random;
  console.log(random);
});