class Game{
  constructor(context) {
    this.ctx = context;
    this.knight = new Player(0, 350, 128, 128, 4, 100);
    this.ghost = new Enemy(200, 350, 128, 128, 200);
    // this.ghost._moveRandom();
  }

  _assignControls() {
    // Controles del teclado
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case "ArrowLeft":
          this.knight.moveLeft();
          break;
        case "ArrowRight":
          this.knight.moveRight();
          break;
        case "Space":
          this.knight.jump();
          break;
        default:
          break;
      }
    });
  }

  drawKnight() {
    this.ctx.drawImage(knight, this.knight.x, this.knight.y, this.knight.width, this.knight.height);
  }

  drawEnemy() {
    this.ctx.drawImage(ghost, this.ghost.x, this.ghost.y, this.ghost.width, this.ghost.height);
  }

  //temporary scenario blocks:
    
  _drawScenario() {
    this.ctx.lineWidth = 10;
    this.ctx.strokeRect(5, (350+this.knight.height), 500, 250);
    this.ctx.strokeRect(505, (250+this.knight.height), 140, 250);
    this.ctx.strokeRect(705, (250+this.knight.height), 290, 250);
  }

  _drawHealth() {
    this.ctx.drawImage(lifeHUD, 10, 10, 120, 75);
    const healthArr = [
      this.ctx.drawImage(lifeHit, 80, 20, 24, 30),
      this.ctx.drawImage(lifeHit, 115, 20, 24, 30),
      this.ctx.drawImage(lifeHit, 150, 20, 24, 30),
      this.ctx.drawImage(lifeHit, 185, 20, 24, 30),
    ]
    for(let i = 1; i <= healthArr.length; i++) {
      healthArr[i];
    }
  }

  _checkCollisions() {
    
  }

  _clean(){
    this.ctx.clearRect(0, 0, 1000, 600);
  }

  _update() {
    this._clean();
    this.drawKnight();
    this.drawEnemy();
    this._drawScenario();
    this._drawHealth();
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._assignControls();
    this.ghost._moveRandom();
    this._update();
  }
}