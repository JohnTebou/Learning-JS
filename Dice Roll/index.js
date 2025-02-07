const roller = document.getElementById("roller");

function rolldice(){
  const diceCount = document.getElementById("dicecount").value;
  const dicetext = document.getElementById("dicetext");
  const summary = document.getElementById("summary");
  const diceimages = document.getElementById("diceimages");
  const values = [];
  const counts = [0, 0, 0, 0, 0, 0];
  const images = [];

  for (let i = 0; i < diceCount; i++){
    const value = Math.floor(Math.random()*6)+1;
    values.push(value);
    counts[value-1]++;
    images.push(`<img src="Dice Images/renders/000${value}.png" alt="Die ${value}" class="diceims">`);
    console.log(":gay")
  }

  dicetext.textContent = `(press H to toggle) dice in order: ${values.join(', ')}`;

  let summHTML = `summary statistics:<br>`;
  for(let i = 0; i < 6; i++){
    summHTML += `&emsp; ${i+1}s - (${counts[i]}, ${(counts[i]/diceCount * 100).toFixed(4)}%) <br>`;
  }
  summary.innerHTML = summHTML;
  diceimages.innerHTML = images.join('');
}

roller.addEventListener("click", rolldice);

document.addEventListener("keydown", function(event) {
  if (event.key.toLowerCase() === "h") {
      if (dicetext.style.display === "none") {
        dicetext.style.display = "flex";
      } else {
        dicetext.style.display = "none";
      }
  }
});