class Ball{
    constructor(x,y,radius){
        var options={
            'density':2,
            'friction':0.03,
            'restitution':1.2
        }
        this.body=Bodies.circle(x,y,radius);
        this.radius=radius
    }
    display(){
        this.pos=this.body.position
        fill("yellow")
        ellipse(this.pos.x,this.pos.y,this.radius,this.radius);
    }
}