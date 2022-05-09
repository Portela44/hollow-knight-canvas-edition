class Game{
  constructor(context) {
    this.ctx = context;
    this.knight = new Player(50, 350, 128, 128);
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
    this.ctx.drawImage(knight, this.knight.x, this.knight.y, this.knight.width, this.knight.height)
  }

  //temporary scenario blocks:
    
  _drawScenario() {
    this.ctx.lineWidth = 10;
    this.ctx.strokeRect(5, (350+this.knight.height), 500, 250);
    this.ctx.strokeRect(505, (250+this.knight.height), 140, 250);
    this.ctx.strokeRect(705, (250+this.knight.height), 290, 250);
  }

  _clean(){
    this.ctx.clearRect(0, 0, 1000, 600);
  }

  _update() {
    this._clean();
    this.drawKnight();
    this._drawScenario();
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._assignControls();
    this._update();
  }
}