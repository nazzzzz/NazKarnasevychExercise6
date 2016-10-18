function Monster(to, l, h, ear, m, te, eye, my, x, y) {

    this.torso = to;
    this.limbs = l;
    this.head = h;
    this.ears = ear;
    this.mouth = m;
    this.teeth = te;
    this.eyes = eye;
    this.myScale = my;
    this.xPos = x;
    this.yPos = y;

    this.display = function() {
        noStroke();
        this.drawHead();
        this.drawBody();
    }

    this.drawHead = function(){
    	//head
        fill(this.head);
        ellipse(200, 100, 100, 100);

        //ears
        fill(this.ears);
        triangle(165, 65, 165, 20, 185, 52);
        triangle(235, 65, 235, 20, 215, 52);

        //mouth
        fill(this.mouth);
        //console.log(hex(this.mouth));
        quad(175, 135, 180, 105, 220, 90, 230, 120);

        //teeth
        fill(this.teeth);
        triangle(180, 105, 182, 120, 185, 103);
        triangle(190, 101, 194, 118, 195, 99);
        triangle(200, 97, 206, 114, 208, 94);
        triangle(212, 93, 214, 112, 220, 90);

        //eye slits
        fill(this.eyes);
        triangle(165, 75, 190, 85, 180, 85);
        triangle(225, 75, 200, 85, 210, 85);

    }

    this.drawBody = function(){
    	//upper body
        fill(this.torso);
        rect(185, 148, 30, 60);

        //leg
        fill(this.limbs);
        rect(195, 208, 10, 40);

        //foot
        triangle(195, 245, 205, 245, 200, 260);
        triangle(195, 245, 197, 252, 185, 260);
        triangle(205, 245, 203, 252, 215, 260);

        //arms
        quad(140, 150, 185, 155, 185, 160, 125, 165);
        quad(260, 150, 215, 155, 215, 160, 275, 165);
    }

    this.change = function() {
        this.torso = color(random(0, 255), random(0, 255), random(0, 255));
        this.limbs = color(random(0, 255), random(0, 255), random(0, 255));
        this.head = color(random(0, 255), random(0, 255), random(0, 255));
        this.ears = color(random(0, 255), random(0, 255), random(0, 255));

    }

}
