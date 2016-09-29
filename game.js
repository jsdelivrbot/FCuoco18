var player;
var playerImage;
var enemy;
var enemyImage;
var isGameOver;
var backgroundImage;

function preload() {
    playerImage = loadImage("steamworkshop_webupload_previewfile_326604559_preview.png");
    enemyImage = loadImage("photo.jpg.png");
    backgroundImage = loadImage("matlab_q2.png");
}

function setup() {
    isGameOver = false;
    createCanvas(256, 256);
    player = createSprite(width/2, height-(playerImage.height/2), 0, 0);
    player.addImage(playerImage);
    enemy = createSprite(width/2, 0, 0, 0);
    enemy.addImage(enemyImage);
    enemy.rotationSpeed = 4.0;
}

/*global createCanvas*/
/*global createPlayer*/
/*global player*/
/*global createSprite*/
/*global width*/
/*global height*/
/*global background*/
/*global keyDown*/
/*global RIGHT_ARROW*/
/*global LEFT_ARROW*/
/*global random*/
/*global drawSprites*/
/*global textAlign*/
/*global CENTER*/
/*global fill*/
/*global text*/
/*global loadImage*/

function draw() {
    if (isGameOver) {
        gameOver();
    } else {
        if (enemy.overlap(player)) {
            isGameOver = true;
    }
    if (enemy.overlap(player)) {
    gameOver();
    }
    background(backgroundImage);
     if(keyDown(RIGHT_ARROW) && player.position.x < (width - (playerImage.width/2))){
  player.position.x += 2;
}
    if(keyDown(LEFT_ARROW) && player.position.x > (playerImage.width/2)){
  player.position.x -= 2;
}
  enemy.position.y = enemy.position.y + 3;
  if (enemy.position.y > height) {
  enemy.position.y = 0;
  enemy.position.x = random(5, width-5);
}
 drawSprites();
    }
}

  
function gameOver() {
  background(0);
  textAlign(CENTER);
  fill("white");
  text("You Got Rekt.", width/2, height/2);
  text("Click to Try Again", width/2, 3*height/4);
}

function mouseClicked() {
    isGameOver = false;
    player.position.x = width/2;
    player.position.y = height-(playerImage.height/2);
    enemy.position.x = width/2;
    enemy.position.y = 0;
}