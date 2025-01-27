class Enemy {
    constructor (x, y, width, height, health, flying) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.health = health;
        this.moveRandomInterval = undefined;
        this.inv = false; // controls if enemy turns around when walking
        this.flying = flying // only applies properties on flying enemies
    }
    _moveRandom() {
        const moveRandom = () => {
            let PlusOrMinus = Math.random() < 0.5 ? -1 : 1;
            let PlusOrMinusFly = Math.random() < 0.4 ? -1 : 1;
            let randomMovement = Math.floor(Math.random()*8);
            this.x = this.x + randomMovement*PlusOrMinus;
            if (PlusOrMinus === -1) {
                this.inv = true;
            } else if (PlusOrMinus === 1) {
                this.inv = false;
            }
            if(this.flying) {
                this.y = this.y + randomMovement*PlusOrMinusFly*2;
            }
        }
        setTimeout(function () {
            let randomInterval = 300+Math.random()*300;
            this.moveRandomInterval = setInterval(moveRandom, randomInterval);
        }, 0);
    }
    _getDamage(knightStrength) {
        this.health = this.health - knightStrength;
    }
}