let user;
let computer;
let userName = prompt("enter your name");
let won, userWon = 0, computerWon = 0;
function compch() {
    computer = Math.random() * 3;
    if (computer <= 1)
        computer = 'Bat';
    else if (computer <= 2)
        computer = 'Ball';
    else
        computer = 'Stump';
}
function calculateResult1() {
    user = 'Bat';
    compch();
    if (user == computer)
        won = 'it is a tie';
    else if (computer !== 'Ball') {
        won = 'computer';
        computerWon++;
    }
    else {
        won = userName;
        userWon++;
    }
    document.querySelector('#display').innerHTML = `you have choosen ${user} <br> computer has choosen ${computer} <br>winner :- ${won}`;
    document.querySelector('#result').innerHTML = `Score : you won:- ${userWon} computer won:- ${computerWon} `;
}
function calculateResult2() {
    user = 'Ball';
    compch();
    if (user == computer)
        won = 'it is a tie';
    else if (computer !== 'Stump') {
        won = 'computer';
        computerWon++;
    }
    else {
        won = userName;
        userWon++;
    }
    document.querySelector('#display').innerHTML = `you have choosen ${user} <br> computer has choosen ${computer} <br> winner :- ${won}`;
    document.querySelector('#result').innerHTML = `Score : you won:- ${userWon} computer won:- ${computerWon} `;
}
function calculateResult3() {
    user = 'Stump';
    compch();
    if (user == computer)
        won = 'it is a tie';
    else if (computer !== 'Bat') {
        won = 'computer';
        computerWon++;
    }
    else {
        won = userName;
        userWon++;
    }
    document.querySelector('#display').innerHTML = `you have choosen ${user} <br> computer has choosen ${computer} <br> winner :- ${won} `;
    document.querySelector('#result').innerHTML = `Score : you won:- ${userWon} computer won:- ${computerWon} `;
}