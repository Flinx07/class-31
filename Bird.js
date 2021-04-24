class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("bird.png");
    this.image1 = loadImage("smoke.png");
    this.dkd=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>5 && this.body.position.x>200){
      this.dkd.push([this.body.position.x,this.body.position.y])
    }
    
    for(var i=0;i<this.dkd.length;i++){
      image(this.image1,this.dkd[i][0],this.dkd[i][1])
    }
  }
}
