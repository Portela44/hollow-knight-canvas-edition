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
        //block 1
        if((player.y >= 480) && (player.x >= 0) && (player.x <= 1100)) {
            ground = true;
        //block 2
        } else if ((player.y >= 410) && (player.x >= 160) && (player.x <= 775)) {
            ground = true;
        //little rock 
        // } else if ((player.y >= 410) && (player.y <= 380) && (player.x >= 680) && (player.x <= 750)) {

        }
        return ground;
    }
}

const hallownest = new Scenario();



