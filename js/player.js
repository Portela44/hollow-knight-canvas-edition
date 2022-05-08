class Player {
    constructor (x, y, width, height) {
        this.x;
        this,y;
        this.width;
        this.height;
        this.stepDistance = 25;
    }

    moveRight() {
        //if(!this.insideWall("Right")) {
            this.x = this.x + stepDistance;
        //}   
    }

    moveLeft() {
        //if(!this.insideWall("Right")) {
            this.x = this.x - stepDistance;
        //}   
    }
}