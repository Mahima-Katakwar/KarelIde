function main(){
goRight();
goUp();
goRight();
goDown();
goGoRight();
goGoUp();
goDown2();
Last();
}

function goRight() {
move();
putBeeper();
move();
move();
putBeeper();
move();
}

function goUp() {
turnLeft();
move();
putBeeper();
move();
move();
putBeeper();
move();
turnLeft();
}

function goDown() {
turnLeft();
move();
putBeeper();
move();
move();
putBeeper();
}

function goGoRight() {
turnLeft();
move();
move();
putBeeper();
move();
}

function goGoUp() { 
turnLeft();
move();
putBeeper();
move();
move();
turnLeft();
move();
}

function Last() {
turnRight();
move();
turnRight();
move();
putBeeper();
}

function goDown2() {
turnLeft();
move();
putBeeper();
move();
move();
}
