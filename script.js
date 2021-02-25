function playerPlay() {
    let selection;

    while (selection != "ROCK" &&
           selection != "PAPER" &&
           selection != "SCISSORS") {
        selection = prompt("ROCK, PAPER, or SCISSORS?").toUpperCase();
    }

    return selection;
}

function computerPlay() {
    let selection = ["ROCK", "PAPER", "SCISSORS"];

    return selection[Math.floor(Math.random() * selection.length)];
}

function playRound(playerSelection, computerSelection) {
    let p = playerSelection;
    let c = computerSelection;

    switch (true) {
        case (p == c):
            alert(`Draw! Computer played ${c}.`);
            break;
        case (p == "ROCK" && c == "SCISSORS"):
        case (p == "PAPER" && c == "ROCK"):
        case (p == "SCISSORS" && c == "PAPER"):
            alert(`You Win! Computer played ${c}.`);
            break;
        default:
            alert(`You Lose! Computer played ${c}.`);
    }
}

function playGame() {
    while (true) {
        playRound(playerPlay(), computerPlay());
    }
}

playGame();