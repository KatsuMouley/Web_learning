
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

let isAutoPlaying = false;
let intervalId;

//const autoPlay = () => {};

function autoPlay() {
    if (!isAutoPlaying) {
        //setInterval returns a number, which we can use as an Id
        intervalId = setInterval(() => {
            const PlayerMove = pickComputerMove();
            playgame(PlayerMove);
        }, 1);
        isAutoPlaying = true;
    } else {
        //so here we use ClearInterval to stop the interval 
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
}
//EventListener substitui o Onclick="", também atualizamos para usar keydown
//buttons
document.querySelector('.js-rock')
    .addEventListener('click', () => {
        playgame('rock');
    });


document.querySelector('.js-paper')
    .addEventListener('click', () => {
        playgame('paper');
    });

document.querySelector('.js-scissors')
    .addEventListener('click', () => {
        playgame('scissors');
    });
//keydown
document.body.addEventListener('keydown', () => {
    console.log('keydown');
});


document.body.addEventListener('keydown', (event) => {
    console.log(event.key);
});


document.body.addEventListener('keydown', (event) => {
    if (event.key === 'p') {
        playgame('paper');
    } else if (event.key === 's') {
        playgame('scissors');
    } else if (event.key === 'r') {
        playgame('rock');
    }
});