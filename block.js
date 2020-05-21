class Block{
    constructor(BodyA,PointB){
        var options={
            BodyA:BodyA,
            PointB:PointB,
            length:0.04,
            stiffness:0.6,
        }
        
       this.reec = loadImage('master Sword.png');
       this.PointB = PointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        }
            attach(body){
                this.sling.BodyA = body;
            }
            display(){
                image(this.reec,200,20);
                if(this.sling.BodyA){
                    var pointA = this.sling.BodyA.position;
                    var pointB = this.pointB;
                    push();
                    
                    stroke(48,22,8);
                    if(pointA.x < 220) {
                        strokeWeight(7);
                        line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                        line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                        image(this.sling3,pointA.x -30, pointA.y -10,15,30);
                    }
                    else{
                        strokeWeight(3);
                        line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                        line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                        image(this.sling3,pointA.x + 25, pointA.y -10,15,30);
                    }
                   
                    
                    pop();
        }
    }
}
