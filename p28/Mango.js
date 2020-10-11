class Mango{
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.radius = 30;
        this.body = Bodies.circle(x,y,this.radius/2,options);
        World.add(world, this.body);
        this.image = loadImage("sprites/mango.png");
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.radius*2, this.radius*2);
        pop();
    }
}