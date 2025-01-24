var first = 0;
var second = 0;

var images=['images/dice1.png',
    'images/dice2.png',
    'images/dice3.png',
    'images/dice4.png',
    'images/dice5.png',
    'images/dice6.png'];

    function generateDice() {
        var dice = Math.floor((Math.random() * 6) +1);
        return dice;
    }

first = generateDice();
second = generateDice();


if (first > second) {
    document.querySelector("h1").textContent = "Player 1 Wins!"
} 
else if (first < second){
    document.querySelector("h1").textContent = "Player 2 Wins!"
}
else {
    document.querySelector("h1").textContent = "Draw!"
}

document.querySelector("img.img1").setAttribute("src",images[first-1]);
document.querySelector("img.img2").setAttribute("src",images[second-1]);