# Hollow Knight: Canvas Edition

![Captura de Pantalla 2022-05-20 a las 20 14 45](https://user-images.githubusercontent.com/101973668/169588599-8d1e65f4-15ff-496c-b25d-45c54f9038f1.png)

## Description

This Canvas game will try to reproduce the ambiance, the feel and the gameplay of the best-selling 2D platform game Hollow Knight, from Team Cherry.

## User stories MVP

Minimum user stories:

- User can move right.
- User can move left.
- User can receive damage.
- User can finish the game crossing screen's right border.


## User stories Backlog

- User can attack.
- User can attack while jumping.
- User can see the knights remaining lifes on screen.

## File structure

- <code>assets.js</code>: contains all images' links, including background, enemies, and player animations.
- <code>sounds.js</code>: constructor for the sound class. 
- <code>scenario.js</code>: constructor (and declaration) for the scenario class, including the physics definition related to it. Methods: insideWall(), onTheGround()
- <code>player.js</code>: constructor for the main player class. Methods: moveRight(), moveLeft(), jump(), \_fallDown(), \_getDamage
- <code>enemy.js</code>: constructor for all enemies. Methods: \_moveRandom(), \_getDamage()
- <code>game.js</code>: contains all the elements for the game to work. Methods: \_assignControls(), \_drawKnight(), \_drawEnemies(), \_drawScenario(), \_drawHealth(), makeAttack(), \draw_Attack(), \_checkAttackRange(), \_checkCollisions(), \_checkFallDown(), \_checkWin(), gameOver(), youWin(), \_clean(), \_update(), start()
- <code>scripts.js</code>: contains all the DOM manipulation code to start the game

## Useful links

- [Presentation slides](https://docs.google.com/presentation/d/1_JdiE1hq6_7c2KO0Sh76PyrDZXfqVgabBcqBZqFtuN8/edit?usp=sharing)
- [Deployed game](https://portela44.github.io/hollow-knight-canvas-edition/)
