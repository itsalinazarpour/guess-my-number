"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("⛔ No Number!");
  }

  // win
  else if (guess === secretNumber) {
    displayMessage("🎉 correct Number! ");
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.padding = "3rem 12rem";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".guess").disabled = true;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }

  // lose
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess < secretNumber ? "📉 Too Low!" : "📈 Too High!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      displayMessage("💥 Game over");
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".guess").disabled = true;
    }
  }
});

// again button

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".number").style.padding = "3rem 6rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector(".guess").disabled = false;
});

// blinking exclamation mark
const blink_speed = 1000; // every 1000 == 1 second, adjust to suit
const blinkingElem = document.querySelector("#blinking");
const blinkingElemFunc = setInterval(function () {
  blinkingElem.style.visibility =
    blinkingElem.style.visibility == "hidden" ? "" : "hidden";
}, blink_speed);
