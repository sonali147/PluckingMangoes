class Slingshot{
    constructor(body, anchor){
        var options = {
            bodyA:body,
            pointB:anchor,//{x:300, y:400},
            stiffness:0.04,
            length:1
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        
        var pointB = this.chain.pointB;
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            stroke(0);
            strokeWeight(3);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    fly(){
        this.chain.bodyA = null;
    }

    attach(body){
        this.chain.bodyA = body;
    }
}