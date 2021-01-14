class Tree{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("tree.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    
    attach(body){
        this.sling.bodyA=body;
    }   
    display(){

        image(this.sling1,500,270);
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48,22,8) ;
        }
    }
    

     
    
}