class Box {

    constructor(x, y, width, height) {
        var options = {

            isStatic: false,
            restitution: 0.1,
            frictions: 0.01,
            density:0.02

        }

        this.body = Bodies.rectangle(x, y, width, height, options);

        //NameSpacing(renaming width and height)
        this.Visibility=255;
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display() {
        if(this.body.speed<3)
        {
          rect(this.body.position.x,this.body.position.y,this.width,this.height);
        }
        else
        {
          World.remove(world,this.body); 
         push();
          this.Visibility=this.Visibility-5
          //tint(255,this.Visibility);
          //image(this.image,this.body.position.x,this.body.position.y,50,50);
          pop();
        }
      }
      score(){
        if(this.Visibility<0 && this.Visibility>-105){
          score++;
        }
      }
    }