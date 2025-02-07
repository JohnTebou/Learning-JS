const min = 1;
const max = 100;
let playing = true;
let random;
let guess;
let attempts = 1;
let keep_playing;

while(playing){
  random = Math.floor(Math.random() * (max - min + 1) + min);
  console.log("random: " + random);
  guess = prompt(`Pick a number between ${min} and ${max} inclusive.`);
  console.log(guess);
  while(guess!=random){
    if(isNaN(guess) || guess == ""){
      guess = prompt("A valid numeric input must be entered.")
    }
    if(guess < random){
      guess = prompt("Too low! Try again.");
      console.log(guess);
      console.log("random: " + random);
      attempts += 1;
    }
    else if(guess > random){
      guess = prompt("Too high! Try again.");
      console.log(guess);
      console.log("random: " + random);
      attempts += 1;
    }
  }
  console.log("loop exit");
  keep_playing = prompt(`You got it right in ${attempts} ${attempts == 1 ? "attempt" 
    : "attempts"}! Would you like to keep playing? If so, type yes (case-insensitive). Otherwise, type anything else or press a button.`).toLowerCase();
  playing = keep_playing === "yes" ? true : false;
  console.log(playing)
  if(playing){
    attempts = 1;
    continue;
  }
  else{
    attempts = 1;
    random = Math.floor(Math.random() * (max - min + 1) + min);
    break;
  }
}