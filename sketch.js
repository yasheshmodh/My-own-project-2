var MainMenuImage1;
var GameImage1;
var GameImage2;
var GameImage3;
var GameOverImage1;
var Button1;
var gameState = 0;
var Bt1Image;
var Bt1;
var Bt2;
var Bt3;

function preload(){
MainMenuImage1 = loadAnimation("Main Menu Image 1.jpg")
GameImage1 = loadAnimation("Game Image 1.jpg")
GameImage2 = loadAnimation("Game Image 2.jpg")
GameImage3 = loadAnimation("Game Image 3.jpg")
GameOverImage1 = loadAnimation("Game over Image 1.jpg")
Bt1Image = loadImage("Black Button Image.jpg")


}
function setup(){
createCanvas(windowWidth,windowHeight)
bg = createSprite(width/2,height/2,width,height)
bg.scale = 0.7
bg.addAnimation("MainMenu",MainMenuImage1)
bg.addAnimation("Start",GameImage3)
bg.changeAnimation("MainMenu")
game = new Game()
game.play()

}
function draw(){
 background(0)
 drawSprites()

}