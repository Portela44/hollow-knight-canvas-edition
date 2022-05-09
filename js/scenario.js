class Scenario {
    constructor() {

    }
    //checks if there is a wall where the player is trying to move
    checkWall(side) {
        let referenceDistance;
        if(side === "Right") {
            referenceDistance = this.x + this.width + this.stepDistance;
        } else if(side === "Left") {
            referenceDistance = this.x + this.stepDistance;
        }
        return intoWall;
    }

    //maps all 
    insideWall(player) {
        
    }

    onTheGround(player) {
        let ground = false;
        //block 1
        if((player.y === 350) && (player.x >= 0) && (player.x <= 600 - player.width)) {
            ground = true;
        } else if((player.y === 250) && (player.x >= 600 - player.width) && (player.x <= 1000)) {
            ground = true;
        }
        return ground;
    }
}

const hallownest = new Scenario();

