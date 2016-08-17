window.addEventListener("keydown", function (event) {
    switch (event.keyCode) {
        case 37://left
            if (moveLeft()) {
                setTimeout(function () {
                    generateOneNumber();
                    isGameOver();
                }, 200)
            }
            break;
        case 38://up
            if (moveUp()) {
                setTimeout(function () {
                    generateOneNumber();
                    isGameOver();
                }, 200)
            }
            break;
        case 39://right
            if (moveRight()) {
                setTimeout(function () {
                    generateOneNumber();
                    isGameOver();
                }, 200)
            }
            break;
        case 40://down
            if (moveDown()) {
                setTimeout(function () {
                    generateOneNumber();
                    isGameOver();
                }, 200)
            }
            break;
    }
});

var score = 0;

function moveLeft() {
    if (!canMoveLeft(grids)) {
        return false;
    }
    for (var i = 0; i < 4; i++) {
        for (var j = 1; j < 4; j++) {
            if (grids[i][j] != 0) {
                for (var k = 0; k < j; k++) {
                    if (grids[i][k] == 0 && noBlockHorizontalCol(i, k, j, grids)) {
                        moveNumberAnimation(i, j, i, k);
                        grids[i][k] = grids[i][j];
                        grids[i][j] = 0;
                        continue;
                    } else if (grids[i][k] == grids[i][j] && noBlockHorizontalCol(i, k, j, grids)) {
                        moveNumberAnimation(i, j, i, k);
                        grids[i][k] += grids[i][j];
                        grids[i][j] = 0;
                        score += grids[i][k];
                        updateScore(score);
                        continue;
                    }
                }
            }
        }


    }
    setTimeout("updateBoardView();", 200);
    return true;
}

function moveRight() {
    if (!canMoveRight(grids)) {
        return false;
    }
    for (var i = 0; i < 4; i++) {
        for (var j = 2; j >= 0; j--) {
            if (grids[i][j] != 0) {
                for (var k = 3; k > j; k--) {
                    if (grids[i][k] == 0 && noBlockHorizontalCol(i, j, k, grids)) {
                        moveNumberAnimation(i, j, i, k);
                        grids[i][k] = grids[i][j];
                        grids[i][j] = 0;
                        continue;
                    } else if (grids[i][k] == grids[i][j] && noBlockHorizontalCol(i, j, k, grids)) {
                        moveNumberAnimation(i, j, i, k);
                        grids[i][k] += grids[i][j];
                        grids[i][j] = 0;
                        score += grids[i][k];
                        updateScore(score);
                        continue;
                    }
                }
            }
        }


    }
    setTimeout("updateBoardView();", 200);
    return true;
}


function moveUp() {
    if (!canMoveUp(grids)) {
        return false;
    }
    for (var i = 1; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (grids[i][j] != 0) {
                for (var k = 0; k < i; k++) {
                    if (grids[k][j] == 0 && noBlockHorizontalRow(k, i, j, grids)) {
                        moveNumberAnimation(i, j, k, j);
                        grids[k][j] = grids[i][j];
                        grids[i][j] = 0;
                        continue;
                    } else if (grids[k][j] == grids[i][j] && noBlockHorizontalRow(k, i, j, grids)) {
                        moveNumberAnimation(i, j, k, j);
                        grids[k][j] += grids[i][j];
                        grids[i][j] = 0;
                        score += grids[k][j];
                        updateScore(score);
                        continue;
                    }
                }
            }
        }


    }
    setTimeout("updateBoardView();", 200);
    return true;
}


function moveDown() {
    if (!canMoveDown(grids)) {
        return false;
    }
    for (var i = 2; i >= 0; i--) {
        for (var j = 0; j < 4; j++) {
            if (grids[i][j] != 0) {
                for (var k = 3; k > i; k--) {
                    if (grids[k][j] == 0 && noBlockHorizontalRow(i, k, j, grids)) {
                        moveNumberAnimation(i, j, k, j);
                        grids[k][j] = grids[i][j];
                        grids[i][j] = 0;
                        continue;
                    } else if (grids[k][j] == grids[i][j] && noBlockHorizontalRow(i, k, j, grids)) {
                        moveNumberAnimation(i, j, k, j);
                        grids[k][j] += grids[i][j];
                        grids[i][j] = 0;
                        score += grids[k][j];
                        updateScore(score);
                        continue;
                    }
                }
            }
        }


    }
    setTimeout("updateBoardView();", 200);
    return true;
}

function updateScore(score) {
    document.getElementById("score").innerHTML = score;
}

function isGameOver() {
    if (noNull(grids) && noMove(grids)) {
        setTimeout("gameOver();", 200);
    }
}

function gameOver() {
    var gameOverNode = document.createElement("div");
    gameOverNode.setAttribute("class", "gameOver");
    gameOverNode.innerHTML = "<p class='p-gameOver'>Game Over!</p><p class='p-score'>Your score:<span>" + score + "</span></p><a href='javascript:restartGame();' class='restartNewGameButton'>New Game</a>";
    document.getElementsByClassName("grid-container")[0].appendChild(gameOverNode);
}

function restartGame() {
    document.getElementsByClassName("gameOver")[0].remove();
    newGame();
}

//support
function getPosTop(i, j) {
    return 20 + i * 120;
};

function getPosLeft(i, j) {
    return 20 + j * 120;
};

function getNumberBackgroundColor(number) {
    switch (number) {
        case 2:
            return "#EEE4DA";
            break;
        case 4:
            return "#F0F1B3";
            break;
        case 8:
            return "#f2b179";
            break;
        case 16:
            return "#f59563";
            break;
        case 32:
            return "#f67c5f";
            break;
        case 64:
            return "#f65e3b";
            break;
        case 128:
            return "#edcf72";
            break;
        case 256:
            return "#edcc61";
            break;
        case 512:
            return "#9c0";
            break;
        case 1024:
            return "#33b5e5";
            break;
        case 2048:
            return "#09c";
            break;
        case 4096:
            return "#a6c";
            break;
        case 8192:
            return "#93c";
            break;
    }
}

function getNumberColor(number) {
    if (number <= 4) {
        return "#776e65"
    }
    return "white";
}

function noBlockHorizontalCol(row, col1, col2, grids) {
    for (var i = col1 + 1; i < col2; i++) {
        if (grids[row][i] != 0) {
            return false;
        }
    }
    return true;
}

function noBlockHorizontalRow(row1, row2, col, grids) {
    for (var i = row1 + 1; i < row2; i++) {
        if (grids[i][col] != 0) {
            return false;
        }
    }
    return true;
}

function canMoveLeft(grids) {
    for (var i = 0; i < 4; i++) {
        for (var j = 1; j < 4; j++) {
            if (grids[i][j] != 0) {
                if (grids[i][j - 1] == 0 || grids[i][j - 1] == grids[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}

function canMoveRight(grids) {
    for (var i = 0; i < 4; i++) {
        for (var j = 2; j >= 0; j--) {
            if (grids[i][j] != 0) {
                if (grids[i][j + 1] == 0 || grids[i][j + 1] == grids[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}


function canMoveUp(grids) {
    for (var i = 1; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (grids[i][j] != 0) {
                if (grids[i - 1][j] == 0 || grids[i - 1][j] == grids[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}


function canMoveDown(grids) {
    for (var i = 2; i >= 0; i--) {
        for (var j = 0; j < 4; j++) {
            if (grids[i][j] != 0) {
                if (grids[i + 1][j] == 0 || grids[i + 1][j] == grids[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}

function noNull(grids) {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (grids[i][j] == 0) {
                return false;
            }
        }
    }
    return true;
}

function noMove(grids) {
    if (canMoveDown(grids) || canMoveLeft(grids) || canMoveRight(grids) || canMoveUp(grids)) {
        return false;
    }
    return true;
}





