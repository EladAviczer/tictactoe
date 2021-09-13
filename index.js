'use strict'
let firstTurn = true
let counter = true
let changeText = true
//first player will be X.
// if counter is false, second player will play

let one1 = document.getElementById("11");
let one2 = document.getElementById("12");
let one3 = document.getElementById("13");
let two1 = document.getElementById("21");
let two2 = document.getElementById("22");
let two3 = document.getElementById("23");
let three1 = document.getElementById("31");
let three2 = document.getElementById("32");
let three3 = document.getElementById("33");
let player = document.getElementById("player");




let currCell = '';
function changeValueOnClick(cellNum) {
    switch (cellNum) {
        case 11:
            currCell = one1
            break;
        case 12:
            currCell = one2
            break;
        case 13:
            currCell = one3
            break;
        case 21:
            currCell = two1
            break;
        case 22:
            currCell = two2
            break;
        case 23:
            currCell = two3
            break;

        case 31:
            currCell = three1
            break;
        case 32:
            currCell = three2
            break;
        case 33:
            currCell = three3
            break;


        default:
            break;
    }

    if (firstTurn) {
        currCell.innerText = 'X'
        firstTurn = false
        counter = false
        changeTurnText()
    } else if (counter == false && currCell.innerText != 'X' && currCell.innerText != 'O') {
        currCell.innerText = 'O'
        counter = true
        changeTurnText()
        checkWin()

    } else if (counter == true && currCell.innerText != 'X' && currCell.innerText != 'O') {
        currCell.innerText = 'X'
        counter = false
        changeTurnText()
        checkWin()

    } else if (currCell.innerText === 'X' || currCell.innerText === 'O') {
        alert('Cell Taken')
    }




}


function changeTurnText() {
    if (changeText) {
        player.innerText = 'Player two Turn'
        changeText = false
    } else {
        player.innerText = 'Player one Turn'
        changeText = true
    }
}

function checkWin() {

    let tableMat = [[one1.innerText, one2.innerText, one3.innerText], [two1.innerText, two2.innerText, two3.innerText], [three1.innerText, three2.innerText, three3.innerText]]

    if (tableMat[0][0] === tableMat[0][1] && tableMat[0][0] == tableMat[0][2] && tableMat[0][2] != "") { //1
        console.log('1');
        document.getElementById("reset").style.display = "block"
        document.getElementById("table").style.display = "none"
        player.innerText = `🏆 Player ${tableMat[0][1]} Won!! 🏆`
    } else if (tableMat[1][0] === tableMat[1][1] && tableMat[1][0] == tableMat[1][2] && tableMat[1][2] != "") {//2
        console.log('2');
        document.getElementById("reset").style.display = "block"
        document.getElementById("table").style.display = "none"
        player.innerText = `🏆 Player ${tableMat[1][0]} Won!! 🏆`
    } else if (tableMat[2][0] === tableMat[2][1] && tableMat[2][0] == tableMat[2][2] && tableMat[2][2] != "") { //3
        console.log('3');
        document.getElementById("reset").style.display = "block"
        document.getElementById("table").style.display = "none"
        player.innerText = `🏆 Player ${tableMat[2][0]} Won!! 🏆`
    } else if (tableMat[0][0] === tableMat[1][0] && tableMat[0][0] == tableMat[2][0] && tableMat[2][0] != "") {//4
        console.log('4');
        document.getElementById("reset").style.display = "block"
        document.getElementById("table").style.display = "none"
        player.innerText = `🏆 Player ${tableMat[0][0]} Won!! 🏆`
    } else if (tableMat[0][1] === tableMat[1][1] && tableMat[0][1] == tableMat[2][1] && tableMat[2][1] != "") { //5
        console.log('5');
        document.getElementById("reset").style.display = "block"
        document.getElementById("table").style.display = "none"
        player.innerText = `🏆 Player ${tableMat[0][1]} Won!! 🏆`
    } else if (tableMat[0][2] === tableMat[1][2] && tableMat[0][2] == tableMat[2][2] && tableMat[2][2] != "") { //6
        console.log('6');
        document.getElementById("reset").style.display = "block"
        document.getElementById("table").style.display = "none"
        player.innerText = `🏆 Player ${tableMat[0][2]} Won!! 🏆`
    } else if (tableMat[0][0] === tableMat[1][1] && tableMat[0][0] == tableMat[2][2] && tableMat[2][2] != "") { //7
        console.log('7');
        document.getElementById("reset").style.display = "block"
        document.getElementById("table").style.display = "none"
        player.innerText = `🏆 Player ${tableMat[0][0]} Won!! 🏆`
    } else if (tableMat[2][0] === tableMat[1][1] && tableMat[2][0] == tableMat[0][2] && tableMat[0][2] != "") { //8
        console.log('8');
        document.getElementById("reset").style.display = "block"
        document.getElementById("table").style.display = "none"
        player.innerText = `🏆 Player ${tableMat[2][0]} Won!! 🏆`

    }
}

