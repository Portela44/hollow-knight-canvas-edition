

insideWall(side) {
    let intoWall = false;
    let referenceDistance;
    if(side === "Right") {
        referenceDistance = this.x + this.width + this.stepDistance;
    } else if(side === "Left") {
        referenceDistance = this.x + this.stepDistance;
    }
    return 
}