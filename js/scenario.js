class Scenario {
    constructor() {
    }
    //checks if received xCoordinate, yCoordinate are inside a wall.
    insideWall(xCoordinate, yCoordinate) {
        let intoWall = false;
        if(xCoordinate <0) {
            intoWall = true;
        } else if ((xCoordinate >= 160) && (xCoordinate <= 775) && ((yCoordinate <= 500) && (yCoordinate >= 430))) {
            intoWall = true;
        }
        return intoWall;
    }
    onTheGround(player) {
        let ground = false;
        //ground
        if((player.y >= 480) && (player.x >= 0) && (player.x <= 1100)) {
            ground = true;
        //block
        } else if ((player.y >= 410) && (player.x >= 160) && (player.x <= 775)) {
            ground = true;
        }
        return ground;
    }
}
const hallownest = new Scenario();



