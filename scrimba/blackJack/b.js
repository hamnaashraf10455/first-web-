window.onload = function () {
    let btn = document.getElementById("start-btn");
    btn.onclick = startGame;
    let cBtn = document.getElementById("card-btn");
    cBtn.onclick = newCard;
}



let card = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let msg = "";
let msgEl = document.getElementById("msg-el");
//let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.getElementById("card-el");

let player = {
    name:'Per',
    chips: 145
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function startGame() {
    isAlive = true;
    let fCard = getRandomCard();
    let sCard = getRandomCard();
    card = [fCard, sCard];
    sum = fCard + sCard
    renderGame();
}

function renderGame() {

    cardEl.textContent = "Cards: "
    // Create a for loop that renders out all the cards instead of just two
    for (let i = 0; i < card.length; i++) {
        cardEl.textContent += card[i] + " "
    }

    if (sum < 21) {
        msg = "Do you want to draw a new card?";
    } else if (sum === 21) {
        msg = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        msg = "You're out of the game!";
        isAlive = false;
    }
    sumEl.textContent = "Sum: " + sum;

    msgEl.textContent = msg;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let nCard = getRandomCard();
        sum += nCard;
        card.push(nCard);
        renderGame();
        console.log(card)
    }

}

function getRandomCard() {
    let random = Math.floor(Math.random() * 13) + 1;
    if (random === 1) {
        return 11;
    } else if (random > 10) {
        return 10;
    } else {
        return random;
    }

}