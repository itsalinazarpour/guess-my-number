"use strict";

var blink_speed = 1000; // every 1000 == 1 second, adjust to suit
var t = setInterval(function () {
  var ele = document.getElementById("myBlinkingDiv");
  ele.style.visibility = ele.style.visibility == "hidden" ? "" : "hidden";
}, blink_speed);

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number! ";
  }

  // win
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 correct Number! ";
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
      document.querySelector(".message").textContent =
        guess < secretNumber ? "📉 Too Low!" : "📈 Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent = "💥 Game over";
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
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector(".guess").disabled = false;
});
