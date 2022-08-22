class Paper{
	constructor(x,y)
	{
		var options ={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
		
		this.image=loadImage("paper.png")
        function keyPressed(){
            if(keyCode === UP_ARROW){
                Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145})
            }
        }
		//this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		//this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		
		

		//this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		
		//World.add(world, this.bottomBody)
		//World.add(world, this.leftWallBody)
		//World.add(world, this.rightWallBody);

	}
}