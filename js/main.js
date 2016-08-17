//一维数组
var grids = new Array();
window.onload = function () {
    newGame();
}

function newGame() {
    init();
    generateOneNumber();
    generateOneNumber();
}

function init() {
    for (var i = 0; i < 4; i++) {
        //二维数组
        grids[i] = new Array();
        for (var j = 0; j < 4; j++) {
            grids[i][j] = 0;
            var gridCell = document.getElementById("grid-cell-" + i + "-" + j);
            gridCell.style.top = getPosTop(i, j) + "px";
            gridCell.style.left = getPosLeft(i, j) + "px";
        }
    }
    document.getElementById("score").innerHTML = "0";
    updateBoardView();
}

function updateBoardView() {
    for (var i = 15; i >= 0; i--) {
        var numberCellElement = document.getElementsByClassName("number-cell")[i];
        if (numberCellElement) {
            numberCellElement.parentNode.removeChild(numberCellElement);
        }
    }
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            var createNumberCell = document.createElement("div");
            createNumberCell.setAttribute("class", "number-cell");
            createNumberCell.setAttribute("id", "number-cell-" + i + "-" + j);
            document.getElementsByClassName("grid-container")[0].appendChild(createNumberCell);

            var numberCell = document.getElementById("number-cell-" + i + "-" + j);
            if (grids[i][j] == 0) {
                numberCell.style.width = "0px";
                numberCell.style.height = "0px";
                numberCell.style.top = getPosTop(i, j) + 50 + "px";
                numberCell.style.left = getPosLeft(i, j) + 50 + "px";
            }
            else {
                numberCell.style.width = "100px";
                numberCell.style.height = "100px";
                numberCell.style.top = getPosTop(i, j) + "px";
                numberCell.style.left = getPosLeft(i, j) + "px";
                numberCell.style.backgroundColor = getNumberBackgroundColor(grids[i][j]);
                numberCell.style.color = getNumberColor(grids[i][j]);
                numberCell.innerHTML = grids[i][j];

                //change the size of number when it is too big
                if (grids[i][j] >= 128) {
                    numberCell.style.fontSize = "40px";
                    if (grids[i][j] >= 1024) {
                        numberCell.style.fontSize = "20px";
                    }

                }
            }
        }
    }

}

function generateOneNumber() {
    //part 1--generate random position
    var randomx = parseInt(Math.floor(Math.random() * 4));
    var randomy = parseInt(Math.floor(Math.random() * 4));
    while (true) {
        if (grids[randomx][randomy] == 0) {
            break;
        }
        ;
        randomx = parseInt(Math.floor(Math.random() * 4));
        randomy = parseInt(Math.floor(Math.random() * 4));
    }

    //part 2--generate random number
    var randomNumber = Math.random() < 0.5 ? 2 : 4;

    //part 3--show the random number in the random position
    grids[randomx][randomy] = randomNumber;
    showNumberWithAnimation(randomx, randomy, randomNumber);
}


function showNumberWithAnimation(i, j, randomNumber) {
    var numberCell = document.getElementById("number-cell-" + i + "-" + j);
    numberCell.style.backgroundColor = getNumberBackgroundColor(randomNumber);
    numberCell.style.color = getNumberColor(randomNumber);
    numberCell.innerHTML = randomNumber;

    $("#number-cell-" + i + "-" + j).animate({
        width: "100px",
        height: "100px",
        top: getPosTop(i, j),
        left: getPosLeft(i, j),
    }, 200);

}

function moveNumberAnimation(fromx, fromy, tox, toy) {

    $("#number-cell-" + fromx + "-" + fromy).animate({
        top: getPosTop(tox, toy),
        left: getPosLeft(tox, toy),
    }, 200);


}


