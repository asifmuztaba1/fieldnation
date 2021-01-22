import options from "./data";
import Drawing from "./canvas";
import Main from "./main";
function die() {
    Drawing.reset();
}
function contains(cells, cell) {
    for (let i = 0; i < cells.length; i++) {
        if (cells[i][0] === cell[0] && cells[i][1] === cell[1]) {
            return true;
        }
    }
    return false;
}

export default class {
    constructor(x, y) {
        [this.x, this.y] = [x, y];
        [this.dx, this.dy] = [0, 0];
        this.segments = [[x, y]];
        this.newSegmentCount = 0;
    }
    turnRight() {
        [this.dx, this.dy] = [1, 1];
    }
    turnLeft() {
        [this.dx, this.dy] = [-1, 0];
    }
    turnDown() {
        [this.dx, this.dy] = [0, 1];
    }
    turnUp() {
        [this.dx, this.dy] = [-1, -1];
    }
    move() {
        this.x += this.dx;
        this.y += this.dy;
        if (this.x < 0 || this.x >= options.cols ||
            this.y < 0 || this.y >= options.rows) {
            this.dx += 1;
            this.dy += -1;
            Main.nextFrame();
            this.turnUp();
        }
        let cell = [this.x, this.y];
        console.log(cell);

        if (contains(this.segments, cell)) {
            die();
            return;
        }
        this.segments.push(cell);
        Drawing.drawSegment(cell);
        if (this.newSegmentCount === 0) {
            let last = this.segments.shift();
            Drawing.eraseCell(last);
        } else {
            this.newSegmentCount--;
        }
    }
}