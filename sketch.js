var ball;
var database, position;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    database=firebase.database();

    var ballPosRef= database.ref("ball/position");
    ballPosRef.on('value', readPosition);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(myX,myY){
    database.ref('ball/position').set({
        x: position.x + myX,
        y: position.y + myY

    }) 
}
function readPosition(data){
    position=data.val();
    console.log(position);

    ball.x=position.x;
    ball.y=position.y;
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
