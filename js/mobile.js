var viewport = document.createElement('meta');
viewport.setAttribute("name", "viewport");
viewport.setAttribute("content", "initial-scale=0.61,user-scalable=no");
document.getElementsByTagName("head")[0].appendChild(viewport);

var link = document.createElement('link');
link.setAttribute("rel", "stylesheet");
link.setAttribute("href", "css/mobile.css");
document.getElementsByTagName("head")[0].appendChild(link);

var arrowContainer = document.createElement('div');
arrowContainer.setAttribute("class", "arrow-container");
document.getElementsByTagName("body")[0].appendChild(arrowContainer);
arrowContainer.innerHTML = "<div class='arrow arrow-up'><img src='img/arrow-up.png' alt='arrow-up' class='arrow-up-img'></div><div class='arrow arrow-left'><img src='img/arrow-left.png' alt='arrow-left' class='arrow-left-img'></div><div class='arrow arrow-down'><img src='img/arrow-down.png' alt='arrow-down' class='arrow-down-img'></div><div class='arrow arrow-right'><img src='img/arrow-right.png' alt='arrow-right' class='arrow-right-img'></div>";

arrowContainer.addEventListener("touchstart", function (event) {
    switch (event.target.className) {
        case "arrow-left-img"://left
            if (moveLeft()) {
                setTimeout(function () {
                    generateOneNumber();
                    isGameOver();
                }, 200)
            }
            break;
        case "arrow-up-img"://up
            if (moveUp()) {
                setTimeout(function () {
                    generateOneNumber();
                    isGameOver();
                }, 200)
            }
            break;
        case "arrow-right-img"://right
            if (moveRight()) {
                setTimeout(function () {
                    generateOneNumber();
                    isGameOver();
                }, 200)
            }
            break;
        case "arrow-down-img"://down
            if (moveDown()) {
                setTimeout(function () {
                    generateOneNumber();
                    isGameOver();
                }, 200)
            }
            break;
    }

}, false);
