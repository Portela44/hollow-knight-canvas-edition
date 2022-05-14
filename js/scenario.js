class Scenario {
    constructor() {
    }

    //checks if received xCoordinate, yCoordinate are inside a wall.
    insideWall(xCoordinate, yCoordinate) {
        let intoWall = false;
        if(xCoordinate <0) {
            intoWall = true;
        } else if ((xCoordinate > 450) && (yCoordinate >= 350)) {
            intoWall = true;
        }
        return intoWall;
    }
    

    onTheGround(player) {
        let ground = false;
        //block 1
        if((player.y === 350) && (player.x >= 0) && (player.x <= 500)) {
            ground = true;
        //block 2
        } else if((player.y === 250) && (player.x > 450) && (player.x <= 615)) {
            ground = true;
        //block 3
        } else if ((player.y === 250) && (player.x >= 670) && (player.x <= 1500)) {
            ground = true;
        }
        return ground;
    }
}

const hallownest = new Scenario();



