let element= function (x,y,color){
  
    this.width=60;
    this.height=60;
    this.x=x;
    this.y=y;
    this.color=color;
    this.clicked=false;
    this.lose= false;
    this.display=function(){
     stroke("black");
      strokeWeight(2);
      fill(this.color);
  rect(this.x,this.y,this.width,this.height);
    }
    this.update=(speed,color)=>{
      this.y+=speed;
      
  if(this.y>=height && this.color == color)
       this.lose=true;
    }
      
    
    
    
    
  }