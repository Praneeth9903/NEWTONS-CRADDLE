class Bob{
    constructor(x,y,r)
{
var options={
    'restitution':1.5,
    'friction':1.0,
    'density':1
}
this.x=x;
this.y=y;
this.r=r;
this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,options)
World.add(world,this.body);
}

display()
{
    var bobPos=this.body.position;
    push()
    translate(bobPos.x,bobPos.y);
    rectMode(CENTER)
    fill(255,2,200);
    ellipse(0,0,this.r,this.r);
    pop()
}


}




