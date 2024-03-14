
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loses: 0,
    ties: 0
};

placar();
function pickComputerMove() {
    const randomnumber = Math.random();
    let computerMove = '';
    if (randomnumber >= 0 && randomnumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomnumber >= 1 / 3 && randomnumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomnumber >= 2 / 3 && randomnumber < 1) {
        computerMove = 'scissors';
    }
    return computerMove;
}

function playgame(playermove) {
    const computerMove = pickComputerMove();
    let result = '';
    if (playermove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'you lose';
        } else if (computerMove === 'paper') {
            result = 'you win';
        } else if (computerMove === 'scissors') {
            result = 'tie';
        }
    } else if (playermove === 'paper') {
        const computerMove = pickComputerMove();
        if (computerMove === 'rock') {
            result = 'you win';
        } else if (computerMove === 'paper') {
            result = 'tie';
        } else if (computerMove === 'scissors') {
            result = 'you lose';
        }
    } else if (playermove === 'rock') {
        const computerMove = pickComputerMove();
        if (computerMove === 'rock') {
            result = 'tie';
        } else if (computerMove === 'paper') {
            result = 'you lose';
        } else if (computerMove === 'scissors') {
            result = 'you win';
        }
    }
    switch (result) {
        case 'you win':
            score.wins += 1;
            break;
        case 'you lose':
            score.loses += 1;
            break;
        case 'tie':
            score.ties += 1;
            break;
    }
    localStorage.setItem('score', JSON.stringify(score));
    placar();
    document.querySelector('.resultado').innerHTML = `${result}!`;
    document.querySelector('.movimentos').innerHTML = `you <img class="move-icon" src="${playermove}-emoji.png" alt=""> <img class="move-icon" src="${computerMove}-emoji.png" alt=""> computer.`;
}

function placar() {
    document.querySelector('.js-score').innerHTML = `wins:${score.wins} loses:${score.loses} ties:${score.ties}`;
}