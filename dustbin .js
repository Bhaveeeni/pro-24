class dustbin {
    constructor(x,y,width,height){
        var options ={
            "restitution":0,
            "isStatic":true
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;

        World.add(world,this.body)
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
       rotate(angle)
       pop()
        rectMode(CENTER);
        fill("yellow");
        rect(pos.x,pos.y,this.width,this,height)
    }
}