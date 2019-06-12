class Block {
    constructor(gameWidth, gameHeight) {
        this.width = 40;
        this.height = 40;

        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 10

        }
    }

    draw(ctx) {
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

    }
}


let canvas = document.getElementById('gameScreen');
let ctx = canvas.getContext('2d');

const GAME_WIDTH = 1600
const GAME_HEIGHT = 800

ctx.clearRect(0, 0, 1600, 800);

let block = new Block(GAME_WIDTH, GAME_HEIGHT);

block.draw(ctx)


function gameLoop() {

}
