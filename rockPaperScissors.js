const rockPaperScissors = (player1, player2) => {
  if (player1 == player2) return console.log("empate");
  if (
    (player1 == "Scissors" && player2 == "Paper") ||
    (player1 == "Rock" && player2 == "Scissors") ||
    (player1 == "Paper" && player2 == "Rock")
  )
    return console.log("Player 1 ganhador");
  else return console.log("Player 2 ganhador");
}

let testScenario1 = ["Rock", "Rock"]; // empate
let testScenario2 = ["Rock", "Scissors"]; // player 1 wins
let testScenario3 = ["Paper", "Scissors"]; // player 2 wins
let testScenario4 = ["Paper", "Rock"]; // player 1 wins
let testScenario5 = ["Paper", "Paper"]; // empate

rockPaperScissors(testScenario1[0], testScenario1[1]);
rockPaperScissors(testScenario2[0], testScenario2[1]);
rockPaperScissors(testScenario3[0], testScenario3[1]);
rockPaperScissors(testScenario4[0], testScenario4[1]);
rockPaperScissors(testScenario5[0], testScenario5[1]);
