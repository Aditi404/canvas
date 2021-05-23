// // console.log('r/place');
var canvas = document.querySelector('canvas')
canvas.width = window.innerWidth;

// console.log(canvas);
canvas.height = window.innerHeight;
// console.log(canvas);
var c = canvas.getContext('2d');
// c.fillStyle = "rgba(255, 0, 0, 0.1)";
// c.fillRect(100, 100, 100, 100);
// // // c.fillRect(200, 100, 100/, 100);
// c.fillRect(300, 100, 100, 100);
// c.fillRect(400, 3000, 100, 100);



// console.log(canvas);
// // line

//  //arc

// c.stroke();
//multiple circle
// for(var i=0; i<100; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerWidth;
//     c.beginPath();

//     c.arc(x, y, 30, 0, Math.PI * 2, false);

// // c.lineTo(400, 300);
// c.strokeStyle = "red";

// c.stroke();

// }

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.lineTo(400, 300);
//    c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c .lineTo(400, 300);
c.strokeStyle = "pink";

c.stroke();
    c.strokeStyle = "red";
    c.stroke();
    c.fill();
        
    }
    this.update = function() {
        if(this.x + this.radius > innerWidth || this.x - this.radius <0) {
            this.dx= -this.dx;
        
        }
        if(this.y + this.radius > innerHeight || this.y - this.radius <0) {
            this.dy= -this.dy;
        
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
        }
    

}
var circleArray = [];
for(var i=0; i<200; i++){
var radius=34;

    var x = Math.random() * (innerWidth - radius*2)+radius;
var dx=(Math.random() - 0.5)*7;
var y = Math.random()*(innerHeight - radius*2)+radius;
var dy = (Math.random() - 0.5)*12;

    circleArray.push(new Circle(x, y, dx, dy, radius));
// var circle = new Circle(200, 200, 3, 3, 30);

}
function animate() {

    requestAnimationFrame(animate);
    
    // console.log('fghj');
    c.clearRect(0, 0, innerWidth, innerHeight);
    for(var i=0; i<circleArray.length; i++){
        circleArray[i].update();
    }
circle.draw();

    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
// c.lineTo(400, 300);
c.strokeStyle = "white";
c.stroke();
if(x + radius > innerWidth || x -radius <0) {
    dx=-dx;

}
if(y + radius > innerHeight || y +radius <0) {
    dy=-dy;

}
x += dx;
y += dy;
}
animate();
