class Player {
    constructor (x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.stepDistance = 25;
    }

    moveRight() {
        //if(!this.insideWall("Right")) {
            this.x = this.x + this.stepDistance;
        //}   
    }

    moveLeft() {
        //if(!this.insideWall("Right")) {
            this.x = this.x - this.stepDistance;
        //}   
    }

    jump() {
        const limit = 150 //Jump limit height reachable
        const jump_y = this.y;
        const maxHeight = 600;
        const maxWidth = 1000;
        let position = 0;
        let goingDown = false;
        let jumping = setInterval(jump, 100);

        function Draw() {
            ctx.font = "20px Georgia";
            ctx.beginPath();
            ctx.fillStyle = "red";
        }

    }
}