class Tree{
    constructor(){
        //this.body = Bodies.rectangle(900, 400, 200, 400, {isStatic:true});
        //World.add(world, this.body);
        this.image = loadImage("sprites/tree.png");
    }

    display(){
        //var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, 880,320,650,550);
        pop();
    }
}