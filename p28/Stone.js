class Stone{
    constructor(x,y,r){
        this.body = Bodies.circle(x,y,r/2);
        this.radius = r;
        World.add(world, this.body);
        this.image = loadImage("sprites/stone.png");
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image, 0,0, this.radius*2, this.radius*2);
        pop();
    }
}