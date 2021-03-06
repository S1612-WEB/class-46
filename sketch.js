var teacher , teacherImg
function preload(){ 
    backgroundImage = loadImage("classroom.jpg");
    playerImg = loadAnimation ("player1.png", "player2.png");
    teacherImg = loadImage("teacher.png");
    momImg = loadImage("mom.png");
    dadImg = loadImage("dad.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight);

    player = createSprite(130, height-160)
    player.addAnimation("run" , playerImg)
    player.scale = 0.6
    player.frameDelay = 10
   player.loop = false


}

function draw(){
    background(backgroundImage);
  
    var n =  Math.round(random(1,3))

    if (n ==  1){ 
        createTeacher()
    }
    else if (n ==2){
        createMom()
    } 
    else {
        createDad()
    }

    drawSprites()
}

function createTeacher(){
    if(frameCount % 120 == 0){
        teacher = createSprite(width+50 , height-220)
        teacher.addImage(teacherImg)
        teacher.velocityX = -5
    }
}

function createMom(){
    if(frameCount % 150 == 0){
        mom = createSprite(width+50 , height-200)
        mom.addImage(momImg)
        mom.velocityX = -5
        mom.scale=1.4
    }
}

function createDad(){
    if(frameCount % 140 == 0){
        dad = createSprite(width+50 , height-250)
        dad.addImage(dadImg)
        dad.velocityX = -5
        dad.scale=1.6
    }
}