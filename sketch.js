const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ccon, ball, ballo, cccon;


function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;

    var ballOptions = {
        restitution:0.2
    };

    ball = Bodies.circle(200,200,20,ballOptions);
    ballo = Bodies.circle(200,210,20,ballOptions);

    World.add(world,ball);
    World.add(world,ballo);

    ccon  = Constraint.create({
        pointA : {x:200, y:50},
        bodyB : ball,
        pointB : {x:0, y:0},
        length : 100,
        stiffness : 0.08

    });

    cccon  = Constraint.create({
        bodyA : ball,
        pointA : {x:0, y:0},
        bodyB : ballo,
        pointB : {x:0, y:0},
        length : 100,
        stiffness : 0.08

    });
    
    World.add(world,ccon);
    World.add(world,cccon);
}

function draw() {
    background("lightblue");
    Engine.update(engine);

    rectMode(CENTER);
    ellipseMode(RADIUS);


    ellipse(ball.position.x, ball.position.y,20);
    ellipse(ballo.position.x, ballo.position.y, 20);

    push();
    strokeWeight(3);
    stroke("white");
    line(ccon.pointA.x, ccon.pointA.y, ball.position.x, ball.position.y);
    line(ball.position.x, ball.position.y, ballo.position.x, ballo.position.y);
    pop ();
}

function keyPressed(){
    if (keyCode===RIGHT_ARROW){
        Matter.Body.applyForce(ballo, {x:0, y:0}, {x:0.05, y:0})
    }
}

