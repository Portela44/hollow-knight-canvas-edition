class Player {
    constructor (x, y, width, height, health, strength) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.health = health;
        this.strength = strength; //hit strenght
        this.stepDistance = 25;
        this.jumping = false; // controls when the kinght is jumping
        this.falling = false; //controls when the knight is falling
        this.attackRange = 60;
        this.canGetDamage = true; // controls knight's damage cooldown
        this.canAttack = true // controls knight's attack cooldown
        //animtation parameters
        this.image = walkRightAnimation[0];
        this.leftStepCounter = 0; //walk left animation
        this.rightStepCounter = 0; //walk right animation
        this.leftJumpCounter = 1; //jump left animation
        this.rightJumpCounter = 1; //jump right animation
        this.inv = false; // controls if knight turns around when walking
        //gravity parameters
        this.drag = 0.99;
        this.gravity = 1.2;
        this.speed = -20;
        this.fallSpeed = -5; //speed to be applied when falling
    }
    moveRight() {
        this.inv = false;
        if(!hallownest.insideWall(this.x + this.stepDistance, this.y)) {
            this.x = this.x + this.stepDistance;
            //We reset the contrary stepcounter, so it gets default when turn around
            this.leftStepCounter=0;
            this.image = walkRightAnimation[this.rightStepCounter];
            this.rightStepCounter++;
            if(this.rightStepCounter === walkRightAnimation.length) {
                this.image = walkRightAnimation[0];
                this.rightStepCounter = 0;
            }
        }
        if(this.jumping === false) {
            this._fallDown();
        }
    }
    moveLeft() {
        this.inv = true;
        if(!hallownest.insideWall(this.x - this.stepDistance, this.y)) {
            this.x = this.x - this.stepDistance;
            //We reset the contrary stepcounter, so it gets default when turn around
            this.rightStepCounter=0;
            this.image = walkLeftAnimation[this.leftStepCounter];
            this.leftStepCounter++;
            if(this.leftStepCounter === walkLeftAnimation.length) {
                this.image = walkLeftAnimation[0];
                this.leftStepCounter = 0;
            }
        }
        if(this.jumping === false) {
            this._fallDown();
        }
    }
    //allows the player to jump in the air a certain this.jumpHeight, BUT NOT fall again on the ground.
    jump() {
        if(hallownest.onTheGround(this)) {
            const jumpUp = () => {
                this.jumping = true
                this.speed += this.gravity;
                this.speed *= this.drag;
                this.y += this.speed
                if(!this.inv) {
                    this.image = jumpRightAnimation[this.rightJumpCounter]
                } else if(this.inv) {
                    this.image = jumpLeftAnimation[this.leftJumpCounter]
                }
                //we stop the going-up animation at frame 5, until the top of the jump is reached.
                if((this.rightJumpCounter < 5) && (this.leftJumpCounter < 5)) {
                    this.rightJumpCounter++;
                    this.leftJumpCounter++;
                }
                if(hallownest.onTheGround(this)) {
                    clearInterval(jumpId);
                    this.jumping = false;
                    this.rightJumpCounter=1;
                    this.leftJumpCounter=1;
                    if(!this.inv) {
                        this.image = walkRightAnimation[0];
                    } else if (this.inv) {
                        this.image = walkLeftAnimation[0];
                    }
                    this.drag = 0.99;
                    this.gravity = 1.2;
                    this.speed = -20;
                }
            }
            const jumpId = setInterval(jumpUp, 30);
        }
    }
    


    //makes the player fall down if no ground is detected under feet.
    _fallDown() {
        const fallDown = () => {
            if (this.jumping === false) {
                if(!hallownest.onTheGround(this)) {
                    this.falling = true;
                    this.rightJumpCounter = 6;
                    this.leftJumpCounter = 6;
                    if(!this.inv) {
                        this.image = jumpRightAnimation[this.rightJumpCounter]
                    } else if(this.inv) {
                        this.image = jumpLeftAnimation[this.leftJumpCounter]
                    }
                    this.fallSpeed += this.gravity;
                    this.fallSpeed *= this.drag;
                    this.y += this.fallSpeed;
                    //fallDown animation
                    if((this.rightJumpCounter < 9) && (this.leftJumpCounter < 9)) {
                        this.rightJumpCounter++;
                        this.leftJumpCounter++;
                    }
                } else {
                    clearInterval(fallId);
                    this.rightJumpCounter=1;
                    this.leftJumpCounter=1;
                    if((this.falling) && (!this.inv)) {
                        this.image = walkRightAnimation[0];
                    } else if ((this.falling) && (this.inv)) {
                        this.image = walkLeftAnimation[0];
                    }
                    this.drag = 0.99;
                    this.gravity = 1.2;
                    this.speed = -20;
                    this.fallSpeed = 5;
                    this.falling = false;
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
            setTimeout(() => this.canGetDamage = true, 1700);
        }
    }
}
