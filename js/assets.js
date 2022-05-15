// knight default
const knight = new Image();
knight.src = "./img/default.png";

const knightinv = new Image();
knightinv.src = "./img/defaultinv.png"

//knight walking Right animation

const walkRight0 = knight;

const walkRight1 = new Image();
walkRight1.src = "./img/walkRight1.png";

const walkRight2 = new Image();
walkRight2.src = "./img/walkRight2.png";

const walkRight3 = new Image();
walkRight3.src = "./img/walkRight3.png";

const walkRight4 = new Image();
walkRight4.src = "./img/walkRight4.png";

const walkRight5 = new Image();
walkRight5.src = "./img/walkRight5.png";

const walkRight6 = new Image();
walkRight6.src = "./img/walkRight6.png";

const walkRight7 = new Image();
walkRight7.src = "./img/walkRight7.png";

const walkRight8 = new Image();
walkRight8.src = "./img/walkRight8.png";

const walkRightAnimation = [walkRight0, walkRight1, walkRight2, walkRight3, walkRight4, walkRight5, walkRight6, walkRight7, walkRight8];

//knight walking Left animation

const walkLeft0 = knightinv;

const walkLeft1 = new Image();
walkLeft1.src = "./img/walkLeft1.png";

const walkLeft2 = new Image();
walkLeft2.src = "./img/walkLeft2.png";

const walkLeft3 = new Image();
walkLeft3.src = "./img/walkLeft3.png";

const walkLeft4 = new Image();
walkLeft4.src = "./img/walkLeft4.png";

const walkLeft5 = new Image();
walkLeft5.src = "./img/walkLeft5.png";

const walkLeft6 = new Image();
walkLeft6.src = "./img/walkLeft6.png";

const walkLeft7 = new Image();
walkLeft7.src = "./img/walkLeft7.png";

const walkLeft8 = new Image();
walkLeft8.src = "./img/walkLeft8.png";

const walkLeftAnimation = [walkLeft0, walkLeft1, walkLeft2, walkLeft3, walkLeft4, walkLeft5, walkLeft6, walkLeft7, walkLeft8];


//knight jumping animation

// ghost default
const ghost = new Image();
ghost.src = "./img/ghost.png";

const ghostinv = new Image();
ghostinv.src = "./img/ghostinv.png"

// enemies image array of arrays
const enemiesImages = [
    [
        ghost, ghostinv
    ],

]

// Life HUD
const lifeHUD = new Image();
lifeHUD.src = "./img/life-HUD.png";

const lifeHit = new Image();
lifeHit.src = "./img/hit.png"; ;