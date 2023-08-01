const finalResult = JSON.parse(localStorage.getItem('finalResult'));


function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'Rock') {

        if (computerMove === 'Rock') {
            finalResult.tie = finalResult.tie + 1;
            result = 'Tie';
        }
        else if (computerMove === 'Paper') {
            finalResult.lose = finalResult.lose + 1;
            result = 'You lose';
        }
        else if (computerMove === 'Scissors') {
            finalResult.win = finalResult.win + 1;
            result = 'You win';
        }
    }

    else if (playerMove === 'Paper') {

        if (computerMove === 'Rock') {
            finalResult.win = finalResult.win + 1;
            result = 'You win';
        }
        else if (computerMove === 'Paper') {
            finalResult.tie = finalResult.tie + 1;
            result = 'Tie';
        }
        else if (computerMove === 'Scissors') {
            finalResult.lose = finalResult.lose + 1;
            result = 'You lose';
        }
    }

    else if (playerMove === 'Scissors') {

        if (computerMove === 'Rock') {
            finalResult.win = finalResult.win + 1;
            result = 'You win';
        }
        else if (computerMove === 'Paper') {
            finalResult.lose = finalResult.lose + 1;
            result = 'You lose';
        }
        else if (computerMove === 'Scissors') {
            finalResult.tie = finalResult.tie + 1;
            result = 'Tie';
        }
    }

    localStorage.setItem('finalResult', JSON.stringify(finalResult));

    alert('You picked ' + playerMove + '. computer picked ' + computerMove + ' ' + result + '\n' +
        'Wins ' + finalResult.win + ',  Losse: ' + finalResult.lose + ', Ties: ' + finalResult.tie)

    // 'You picked ' + playerMove + '. computer picked ' + computerMove + ' ' + result
}


function pickComputerMove() {

    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
    }
    else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'Scissors';
    }
    return computerMove;
}

function resetScore() {
    finalResult.win = 0;
    finalResult.lose = 0;
    finalResult.tie = 0;
    alert('Wins ' + finalResult.win + ',  Losse: ' + finalResult.lose + ', Ties: ' + finalResult.tie);
}
