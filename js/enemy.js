class Enemy {
    constructor (x, y, width, height, health) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.moveRandomInterval = undefined;
    }

    _moveRandom() {
        const moveRandom = () => {
            let PlusOrMinus = Math.random() < 0.5 ? -1 : 1;
            let randomMovement = Math.floor(Math.random()*8);
            this.x = this.x + randomMovement*PlusOrMinus;
        }

        setTimeout(function () {
            let randomInterval = Math.random()*700;
            this.moveRandomInterval = setInterval(moveRandom, randomInterval);
        }, 0);
    }

    _getDamage() {
        
    }

}