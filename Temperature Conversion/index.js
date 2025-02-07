const input = document.getElementById("input");

const toF = document.getElementById("toF");
const toC = document.getElementById("toC");

const conv = document.getElementById("submit");

const results = document.getElementById("result")

let temp;

function convert() {
  if(toF.checked){
    temp = Number(input.value);
    temp = temp * 9/5 + 32;
    results.textContent = temp.toFixed(2) + " °F";
  }
  else if(toC.checked){
    temp = Number(input.value);
    temp = (temp - 32) * 5/9;
    results.textContent = temp.toFixed(2) + " °C";
  }
  else{
    results.textContent = "Select a conversion";
  }
}

conv.addEventListener("click", function(){
  convert();
});