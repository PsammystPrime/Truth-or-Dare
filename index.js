const scores = document.querySelector(".score");
const quiz = document.querySelector(".quiz");
const truth = document.querySelector(".truth");
const dare = document.querySelector(".dare");
const btns = document.querySelector(".btns");

truth.addEventListener("click", truths);
dare.addEventListener("click", dares);

score = 0;

function truths() {
  const truthsArray = [
    "Your name?",
    "Your School?",
    "Your Age?",
    "Your Profession?",
    "Last achievement?",
  ];
  const choice = Math.floor(Math.random() * truthsArray.length);
  quiz.textContent = truthsArray[choice];
  truthSelection();
}

function dares() {
  const daresArray = [
    "Kiss your ankle?",
    "Give me a dollar?",
    "Stand with one hand?",
    "lick your nose",
    "Rotate both hands in opposite directions",
  ];
  const choice = Math.floor(Math.random() * daresArray.length);
  quiz.textContent = daresArray[choice];
  dareSelection();
}

function truthSelection() {
  const done = document.createElement("button");
  const tryAgain = document.createElement("button");

  done.textContent = "Done";
  tryAgain.textContent = "Choose again?";

  btns.textContent = "";
  btns.appendChild(done);
  btns.appendChild(tryAgain);

  done.addEventListener("click", addScore);
  tryAgain.addEventListener("click", removeScore);
}

function dareSelection() {
  const done = document.createElement("button");
  const tryAgain = document.createElement("button");

  done.textContent = "Done";
  tryAgain.textContent = "Choose again?";

  btns.textContent = "";
  btns.appendChild(done);
  btns.appendChild(tryAgain);

  done.addEventListener("click", addScore);
  tryAgain.addEventListener("click", removeScore);
}

function addScore() {
  scores.textContent = "Score: " + (score++ + 1);
  quiz.textContent = "Congrats!! Let's go again";
  const truth = document.createElement("button");
  const dare = document.createElement("button");

  truth.className = "truth";
  dare.className = "dare";
  truth.textContent = "Truth";
  dare.textContent = "Dare";

  truth.addEventListener("click", truths);
  dare.addEventListener("click", dares);

  btns.textContent = "";
  btns.appendChild(truth);
  btns.appendChild(dare);
}

function removeScore() {
  scores.textContent = "Score: " + (score-- - 1);

  quiz.textContent = "OOoops!! Let's go again";
  const truth = document.createElement("button");
  const dare = document.createElement("button");

  truth.className = "truth";
  dare.className = "dare";
  truth.textContent = "Truth";
  dare.textContent = "Dare";

  truth.addEventListener("click", truths);
  dare.addEventListener("click", dares);

  btns.textContent = "";
  btns.appendChild(truth);
  btns.appendChild(dare);
}
