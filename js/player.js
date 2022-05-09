class Player {
    constructor (x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.stepDistance = 25;
        this.jumpHeight = 200;
        this.jumping = false;
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
        const jumpReference = this.y;
        const jumpUp = () => {
            if((this.y > jumpReference-this.jumpHeight) && (!this.jumping)) {
                this.y-=20;
            } else {
                this.jumping = true;
                this.y+=20;
                if(hallownest.onTheGround(this)) {
                    clearInterval(jumpId);
                    this.jumping = false;
                }
            }
        }
        const jumpId = setInterval(jumpUp, 20);
    }

    _fallDown() {
        const fallDown = () => {
            if(!hallownest.onTheGround(this)) {
                this.y+=20;
            } else {
                clearInterval(fallId);
            }
        }
        const fallId = setInterval(fallDown, 20);
    }
}
