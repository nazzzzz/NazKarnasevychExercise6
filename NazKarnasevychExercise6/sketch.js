function setup() {
    createCanvas(1000, 1000);
    background(255);
    var testMonster;
}

function draw() {
    torso = color(25, 255, 45);
    limbs = color(0, 203, 255);

    head = color(255, 123, 0);
    ears = color(0);
    mouth = color(255, 50, 15);
    teeth = color(255);
    eyes = color(0);

    testMonster = new Monster(torso, limbs, head, ears, mouth, teeth, eyes, 0.5, 1, 2);
    

    if(frameCount % 100 == 0){
    	testMonster.change();
    	testMonster.display();
    }

}


