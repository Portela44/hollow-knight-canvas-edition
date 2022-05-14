class Player {
    constructor (x, y, width, height, health, strength) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.health = health;
        this.strength = strength; //hit strenght
        this.stepDistance = 25;
        this.jumpHeight = 200;
        this.jumping = false;
        this.canGetDamage = true; // controls knight's damage cooldown
        this.canAttack = true // controls knight's attack cooldown
        this.inv = false; // controls if knight turns around when walking
    }

    moveRight() {
        this.inv = false;
        if(!hallownest.insideWall(this.x + this.stepDistance, this.y)) {
            this.x = this.x + this.stepDistance;
            if(this.jumping === false) {
                this._fallDown();
            }
        }   
    }

    moveLeft() {
        this.inv = true;
        if(!hallownest.insideWall(this.x - this.stepDistance, this.y)) {
            this.x = this.x - this.stepDistance;
            if(this.jumping === false) {
                this._fallDown();
            }
        }   
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

    //generic function of getting damage from any enemy
    _getDamage() {
        if(this.canGetDamage) {
            this.health = this.health - 1;
            this.canGetDamage = false;
            setTimeout(() => this.canGetDamage = true, 3000);
        }
    }

    //generic function of getting damage from any enemy (needed?)
    attack() {
        console.log("attack!");
        if(this.canAttack) {
            return this.strength;
        }
    }

}
