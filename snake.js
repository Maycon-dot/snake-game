class Snake {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.tail = [{ x: this.x, y }]
        this.rotateX = 0
        this.rotateY = 1
    }

    move() {
        var newRect;
        if (this.rotateX == 1) {
            newRect = {
                x: this.tail[this.tail.length - 1].x + this.size,
                y: this.tail[this.tail.length - 1].y
            }
        } else if (this.rotateX == -1) {
            newRect = {
                x: this.tail[this.tail.length - 1].x - this.size,
                y: this.tail[this.tail.length - 1].y
            }
        } else if (this.rotateY == 1) {
            newRect = {
                x: this.tail[this.tail.length - 1].x,
                y: this.tail[this.tail.length - 1].y + this.size
            }
        } else if (this.rotateX == -1) {
            newRect = {
                x: this.tail[this.tail.length - 1].x,
                y: this.tail[this.tail.length - 1].y - this.size
            }
        }

        this.tail.shift()
        this.tail.push(newRect)
    }

}

class Apple {
    constructor() {
        var isTouching;
        while (true) {
            isTouching = false;
            this.x = Math.floor(Math.random() * canvas.with / snake.size) * snake.size
            this.y = Math.floor(Math.random() * canvas.height / snake.size) * snake.size;
            for (var i = 0; i < snake.tail.length; i++) {
                if (this.x = snake.tail[i].x && this.y == snake.tail[i].y) {
                    isTouching = true;
                }
            }
            if (!isTouching) {
                break;
            }
            this.color = "pink"
            this.size = snake.size
        }
    }
}

var canvas = document.getElementById("canvas");

var snake = new Snake();

var apple = new Apple();

var canvasContext = canvas.getContext('2d');

window.onload = () => {
    gameloop();
}

function gameloop() {
    setInterval(show, 1000 / 15)
}

function show() {
    update();
    draw();
}

function update() {

}

function draw() {
    creactRect(0,0, canvas.width, canvas.height, "black")
    createRect(0,0, canvas.width, canvas.height)
    for(var i = 0; i < snake.tail.length; i++) {
        createRect(snake.tail[i].x, + 2.5, snake.tail[i].y + 2,5,
            snake.size - 5, snake.size - 5, "white")
    }

    canvasContext.font = "20px Arial"
    canvasContext.fillStyle = "#00FF42"
    canvasContext.fillText("Score: ", (snake.tail.length + 1),
        canvas.whidth -120, 18);
    createRect(apple.x, apple.y, apple.size, apple.size, apple.color)
}

function createRect(x,y,whidth,height,color) {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x,y,whidth,height);
}