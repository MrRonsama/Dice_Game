

var player1 = "Player 1";

var player2 = "Player 2";

// ชื่อคนเล่น


function rollTheDice() {
  setTimeout(function () {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1").setAttribute(
      "src",

      "images/" + randomNumber1 + ".jpg"
    );

    document.querySelector(".img2").setAttribute(
      "src",

      "images/" + randomNumber2 + ".jpg"
    );

    if (randomNumber1 === randomNumber2) {
      document.querySelector("h1").innerHTML = "Draw !!";
    } else if (randomNumber1 < randomNumber2) {
      document.querySelector("h1").innerHTML = player2 + " Wins !";
    } else {
      document.querySelector("h1").innerHTML = player1 + " Wins !";
    }
  }, 890);
}

//  ฟังชั่นในทำงานของโปรแกรม