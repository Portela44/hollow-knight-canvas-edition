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
            if(this.jumping === false) {
                this._fallDown();
            }
        //}   
    }

    moveLeft() {
        //if(!this.insideWall("Right")) {
            this.x = this.x - this.stepDistance;
            if(this.jumping === false) {
                this._fallDown();
            }
        //}   
    }
    
    //allows the player to jump in the air a certain this.jumpHeight, BUT NOT fall again on the ground.
    jump() {
        if(hallownest.onTheGround(this)) {
            const jumpReference = this.y;
            this.jumping = true;
            const jumpUp = () => {
            if(this.y > jumpReference-this.jumpHeight) {
                this.y-=20;
            } else if (this.y >= jumpReference-this.jumpHeight) {
                clearInterval(jumpId);
                this.jumping = false;
            }
        }
        const jumpId = setInterval(jumpUp, 24);
        this._fallDown();
        }
    }
    
    //makes the player fall down if no ground is detected under feet.
    _fallDown() {
        const fallDown = () => {
            if (this.jumping === false) {
                if(!hallownest.onTheGround(this)) {
                    this.y+=20;
                } else {
                    clearInterval(fallId);
                }
            }
        }
        const fallId = setInterval(fallDown, 24);
    }
}
