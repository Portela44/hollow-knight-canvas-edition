class Game{
  constructor(context) {
    this.ctx = context;
  }

  _assignControls() {
    // Controles del teclado
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowLeft':
          this.knight.moveLeft();
          break;
        case 'ArrowRight':
          this.knight.moveRight();
          break;
        case "spaceBar":
          this.knight.jump();
        default:
          break;
      }
    });
  }

  _update() {
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._assignControls();
    this._update();
  }
}