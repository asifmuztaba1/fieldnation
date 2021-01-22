import Drawing from './canvas';
import options from "./data";
import Line from "./line";
let timeout;
function init(){
    Drawing.reset();
    let line = new Line(options.startX, options.startY);
    line[options.startDirection]();
    function nextFrame() {
        clearTimeout(timeout);
        timeout = setTimeout(nextFrame, options.timeStep);
        line.move();
    }
    nextFrame();

}
function nextFrame() {
    clearTimeout(timeout);
    timeout = setTimeout(this.nextFrame, options.timeStep);
}
function reset() {
    clearTimeout(timeout);
    init();
}
export default { init,nextFrame };