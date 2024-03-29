const scores = document.querySelector(".score");
const quiz = document.querySelector(".quiz");
const truth = document.querySelector(".truth");
const dare = document.querySelector(".dare");
const btns = document.querySelector(".btns");

truth.addEventListener("click", truths);
dare.addEventListener("click", dares);

score = 1;

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
  decisions();
  //   console.log("aa");
  //   console.log();
}

function dares() {
  const truthsArray = ["drudh1", "d2", "d3", "d4", "d5"];
  const aa = Math.floor(Math.random() * truthsArray.length);
  quiz.textContent = console.log(aa);
}

function decisions() {
  const done = document.createElement("button");
  const tryAgain = document.createElement("button");

  done.textContent = "Done";
  tryAgain.textContent = "Choose again?";

  btns.textContent = "";
  btns.appendChild(done);
  btns.appendChild(tryAgain);

  done.addEventListener("click", addScore);
  //   tryAgain.addEventListener("click", removeScore);

  function addScore() {
    scores.textContent = "Score: " + score++;
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
}
