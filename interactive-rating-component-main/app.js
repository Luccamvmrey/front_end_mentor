const ratings = document.getElementById("rating");
const thanks = document.getElementById("thanks");

let chosen = document.getElementById("choice");

let currentSel;

function selection(newSel) {
  let oldSel = document.querySelector(".selected");

  if (currentSel == null) {
    document
      .querySelector(`[b-number="${newSel}"]`)
      .classList.add("selected");
  } else {
    oldSel.classList.remove("selected");
    document
      .querySelector(`[b-number="${newSel}"]`)
      .classList.add("selected");
  }
  currentSel = newSel;

  switch (currentSel) {
    case "one":
      chosen.innerHTML = 1;
      break;
    case "two":
      chosen.innerHTML = 2;
      break;
    case "three":
      chosen.innerHTML = 3;
      break;     
    case "four":
      chosen.innerHTML = 4;
      break; 
    case "five":
      chosen.innerHTML = 5;
      break;
    case null:
      alert("Please give us a rating!");
      break;    
  }
}

function submit() {
  ratings.classList.add("closed");
  thanks.classList.remove("closed");
}

