const results = document.querySelector("#results");
const headsButton = document.querySelector(".heads");
const tailsButton = document.querySelector(".tails");

function coin_flip() {
    let coinGuess = Math.floor(Math.random() * 2) + 1;
    let coinSide = "";

    if (coinGuess == 1) {
        coinSide = "Tails";
    }
    else {
        coinSide = "Heads";
    }

    return coinSide;
}

function flip_result(event) {
    guess = event.currentTarget.guess;

    flip_result = coin_flip();

    if (guess == flip_result) {

        results.innerHTML = `
        You guessed ${guess}...<br>
        The coin flips and comes up ${flip_result}<br>
        You were correct! Great guess!
        `;
    }
    else {
        results.innerHTML = `
        You guessed ${guess}...<br>
        The coin flips and comes up ${flip_result}<br>
        You were incorrect. Try again!
        `;
    }
}

headsButton.addEventListener("click", flip_result, false);
tailsButton.addEventListener("click", flip_result, false);

headsButton.guess = "Heads";
tailsButton.guess = "Tails";