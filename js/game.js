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
        case "ArrowUp":
          this.knight.jump();
        default:
          break;
      }
    });
  }

  drawKnight() {
    this.ctx.drawImage(knight, this.knight.x, this.knight.y, this.knight.width, this.knight.height)
  }

  _clean(){
    this.ctx.clearRect(0, 0, 1000, 600);
  }

  _update() {
    this._clean();
    this.drawKnight();
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._assignControls();
    this._update();
  }
}