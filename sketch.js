var rabbit;
var fox;
var carrot;

var rabbit_b, rabbit_c, rabbit_d, rabbit_e;

var fox_b, fox_c, fox_d, fox_e;

var carrot_b, carrot_c, carrot_d, carrot_e;

var button_a, button_b, button_c, button_d, button_e;

var world, tittle_World, tittle, tittleImg, start;

var carrot_Dream;

var gameState = 0;

function preload(){
 rabbit_b = loadImage("assets/Coelho_para_Baixo.png");
 rabbit_c = loadImage("assets/Coelho_para_Cima.png");
 rabbit_d = loadImage("assets/Coelho_para_Direita.png");
 rabbit_e = loadImage("assets/Coelho_para_Esquerda.png");
 carrot_b = loadImage("assets/Cenoura_para_Baixo.png");
 carrot_c = loadImage("assets/Cenoura_para_Cima.png");
 carrot_d = loadImage("assets/Cenoura_para_Direita.png");
 carrot_e = loadImage("assets/Cenoura_para_Esquerda.png");
 world = loadImage("assets/Coelho_World.png");
 tittle_World = loadImage("assets/Fundo_Tela_de_Título.png");
 tittleImg = loadImage("assets/Rabbit_Attack_Tittle.png");
 fox_b = loadAnimation("assets/Raposa_para_Baixo_1.png", "assets/Raposa_para_Baixo_2.png", "assets/Raposa_para_Baixo_3.png", "assets/Raposa_para_Baixo_2.png");
 fox_c = loadAnimation("assets/Raposa_para_Cima_1.png", "assets/Raposa_para_Cima_2.png", "assets/Raposa_para_Cima_3.png", "assets/Raposa_para_Baixo_2.png");
 fox_d = loadAnimation("assets/Raposa_para_Direita_1.png", "assets/Raposa_para_Direita_2.png");
 fox_e = loadAnimation("assets/Raposa_para_Esquerda_1.png", "assets/Raposa_para_Esquerda_2.png");
 carrot_Dream = loadSound("assets/Carrot_Dream.mp3");
}

function setup() {
  createCanvas(594, 594, 500, 500);
  carrot_Dream.loop();

  tittle = createSprite(297,100,50,50);
  tittle.addImage(tittleImg)
  tittle.scale = 1;
  tittle.visible = true;

  rabbit = createSprite(297,297,50,50);
  rabbit.addImage(rabbit_b);
  rabbit.scale = 1;
  rabbit.visible = false;

  fox = createSprite(297,100,50,50);
  fox.addImage();
  fox.scale = 1;
  fox.visible = false;
}

function draw() {

  if(gameState = 0) {
    background(tittle_World);

    if(keyDown("space")) {
      gameState === "play"
    }
  }

  if(gameState = 1){

    rabbit.visible = true;

    if(keyDown("up_arrow")) {
      rabbit.addImage("rabbit", rabbit_c)
    }

    if(keyDown("left_arrow")) {
      rabbit.addImage("rabbit", rabbit_e)
    }

    if(keyDown("right_arrow")) {
      rabbit.addImage("rabbit", rabbit_d)
    }
  }
  drawSprites()
}

