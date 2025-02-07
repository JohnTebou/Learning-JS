let numbers = [1,2,3,4,11,16,21,347,89,900,-345,-300,-20,-46,-892]

console.log(...numbers.sort((a,b) => a - b));
console.log(typeof([...numbers]));

function maxfinder(...nums){
  return Math.max(...nums);
}

console.log(maxfinder(...numbers));