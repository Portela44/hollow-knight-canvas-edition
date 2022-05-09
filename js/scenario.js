class Scenario {
    constructor() {
    }


    //checks if there is a wall where the player is trying to move
    /*
    checkWall(side, player) {
        let referenceDistance;
        if(side === "Right") {
            referenceDistance = this.x + this.width + this.stepDistance;
        } else if(side === "Left") {
            referenceDistance = this.x + this.stepDistance;
        }
        return ;
    }

    //maps all lateral collisions to wall in the map. xCoordinate anticipates where the user wants to move.
    insideWall(xCoordenate, player) {
        let intoWall = false;
        if() {
            intoWall = true;
        }

    }
    */

    onTheGround(player) {
        let ground = false;
        //block 1
        if((player.y === 350) && (player.x >= 0) && (player.x <= 500)) {
            ground = true;
        //block 2
        } else if((player.y === 250) && (player.x >= 500 - player.width/2) && (player.x <= 1000)) {
            ground = true;
        }
        return ground;
    }
}

const hallownest = new Scenario();



