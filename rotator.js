var rot;
var shrinkCoef = 0.6
function setup() {
    createCanvas(1200, 1200);
    angleMode(DEGREES);
    rot = new RotatorGroup(600, 600, 45, 300);
}

function draw() {
    rot.update();
    if(rot.rots.length == 0) {
      let a = Math.floor(Math.random() * 90)
      console.log('Creating new rot with angle ' + a)
      rot = new RotatorGroup(600, 600, a, 300)
    }
}

class Rotator {
    constructor(x, y, a, r) {
      this.r = r; //fix
      this.x = x;
      this.y = y;
      let d = Math.random() - 0.5;
      this.d = 1;
      this.a = 0;
      this.sa = a;
      this.count = 0;
      this.alpha = 255;
    }
    update() {
      //rotate
      this.a = this.a + this.d;
      this.alpha = this.alpha - 1
    }
    draw() {
      const c = color(0, 0, 0, this.alpha)
      //fill(c);
      stroke(c);
      ellipse(this.x, this.y, this.r);
      const ex = this.r/2 * sin(this.a + this.sa);
      const ey = this.r/2 * cos(this.a + this.sa);
      line(this.x, this.y, ex + this.x, ey + this.y);
    }
    createNew() {
        const x = (this.r/2 + (this.r * shrinkCoef)/2) * sin(this.a + this.sa) + this.x;
        const y = (this.r/2 + (this.r * shrinkCoef)/2) * cos(this.a + this.sa) + this.y;
        if(this.r * shrinkCoef > 4) {
            return new Rotator(x, y, this.a + this.sa, this.r * shrinkCoef)
        } else {
            return null;
        }
        
    }
  }

  class RotatorGroup {
      constructor(x, y, a, r) {
          this.rots = [];
          this.rots[0] = new Rotator(x, y, 0, r);
          this.triga = a;
      }
      update() {
        background(255);
        const newRots = [];
        for(var i = 0; i < this.rots.length; i++) {
            this.rots[i].update();
            this.rots[i].draw();
            if(abs(this.rots[i].a) == this.triga || abs(this.rots[i].a) == this.triga+180) {
              if(this.rots[i].count <= 1) {
                let newRot = this.rots[i].createNew();
                if(newRot) {
                  newRots.push(newRot);
                  this.rots[i].count++;
                }
              }
            }
            // if(rots[i].a == 225) {
            //     if(rots[i].count < 2) {
            //         let newRot = rots[i].createNew();
            //         newRots.push(newRot);
            //     }
            // }
        }
        for(var i = 0; i < newRots.length; i++) {
            this.rots.push(newRots[i])
        }
        for(var i = 0; i < this.rots.length; i++) {
            if(this.rots[i].alpha < 0) {
                this.rots.splice(i, 1);
            }
        }
      }
  }