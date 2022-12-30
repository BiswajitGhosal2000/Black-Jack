let cards = [];
let hasBlackJack = false;
let isAlive = false;

let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.getElementById("card-el");

function startGame() {
    let firstCard = Math.floor(Math.random()*11 + 1);
    let secondCard = Math.floor(Math.random()*11 + 1);
    cards.push(firstCard);
    cards.push(secondCard);
    renderGame();
    document.querySelector("#startGame").style.display = "none";
}

function renderGame() {
    let sum = 0;
    for(let i = 0; i < cards.length; i++){
        sum += cards[i]
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
        isAlive = true;
        document.querySelector("#newCard").style.display = "block";

    } else if (sum == 21) {
        message = "Congrats!you've got BlackJack";
        hasBlackJack = true;
        document.querySelector("#newCard").style.display = "none";
        window.setTimeout(function(){
            window.location.reload();
        },3000);
    } else {
        message = "You're out of the game.\n please wait a second to play again ";
        isAlive = false;
        document.querySelector("#newCard").style.display = "none";
        window.setTimeout(function(){
            window.location.reload();
        },3000);
    }
    console.log(message);
    messageEl.innerText = message;
    sumEl.innerText = "Sum: " + sum;
    let card = "";
    for (let i = 0; i < cards.length-1; i++) {
        card += cards[i] + ",";
    };
    card += cards[cards.length-1];
    cardEl.innerText ="Cards: " + card;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false){
    console.log("drawing  a new card from the deck!!")
    let newCard = Math.floor(Math.random()*11 + 1);
    cards.push(newCard);
    renderGame();
    }
}