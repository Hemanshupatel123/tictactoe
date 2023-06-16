let title = document.querySelector('.title');
let turn = "x";
let winner = document.querySelector('.winner');
let gameover = document.querySelector('.gameover');
let box = [];
let box1 = document.getElementsByClassName('.box')

function gameend() {
    gameover.innerHTML = 'GAME OVER'
    // box.style.opacity = 0.3
}

function won() {
    for (let i = 1; i < 10; i++) {
        box[i] = document.getElementById(i).innerHTML;
    }
    if (box[1] == box[2] && box[2] == box[3] && box[1] != '') {
        winner.innerHTML = 'WINNER  ' + box[1]
        gameend()
    }
    else if (box[4] == box[5] && box[5] == box[6] && box[4] != '') {
        winner.innerHTML = 'WINNER  ' + box[4]
        gameend()
    }
    else if (box[7] == box[8] && box[8] == box[9] && box[7] != '') {
        winner.innerHTML = 'WINNER  ' + box[7]
        gameend()
    }
    else if (box[1] == box[5] && box[5] == box[9] && box[1] != '') {
        winner.innerHTML = 'WINNER  ' + box[1]
        gameend()
    }
    else if (box[3] == box[5] && box[5] == box[7] && box[3] != '') {
        winner.innerHTML = 'WINNER  ' + box[3]
        gameend()
    }
    else if (box[1] == box[4] && box[4] == box[7] && box[1] != '') {
        winner.innerHTML = 'WINNER  ' + box[1]
        gameend()
    }
    else if (box[2] == box[5] && box[5] == box[8] && box[2] != '') {
        winner.innerHTML = 'WINNER  ' + box[2]
        gameend()
    }
    else if (box[3] == box[6] && box[6] == box[9] && box[3] != '') {
        winner.innerHTML = 'WINNER  ' + box[3]
        gameend()
    }
}

function gameboard(id) {
    let boxOne = document.getElementById(id);

    if (turn == 'x' && boxOne.innerHTML == '') {
        boxOne.innerHTML = "X"
        turn = 'o'
        title.innerHTML = "Turn" + 'O'
    }
    else if (turn = 'o' && boxOne.innerHTML == '') {
        boxOne.innerHTML = 'O'
        turn = 'x'
        title.innerHTML = "Turn" + 'X'
    }
    won()
}
function restart() {
    window.location.reload();
}
