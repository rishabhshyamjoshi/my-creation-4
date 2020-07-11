var w = 100; 
var angle = 0;
var ma;
var dis;

function setup(){
   createCanvas(400, 400, WEBGL);
    ma = atan(1/sqrt(2));
    dis = dist(0, 0, 200, 200)
}
function draw(){
    background(100);
 
    ortho(-300, 300, 300, -300, 0, 1000);

    rotateX(QUARTER_PI);
    rotateY(ma);

    for(z = 0; z < height; z += w){
    for(x = 0; x < width; x += w){
        push();
        normalMaterial();
        var d = dist(x, z, width / 8,height / 8);
        var offset = map(d, 0, dis, -0, 10);
        var a = angle + offset;
        var h = map(sin(a), 1, -1, 0, 300);
        translate(x - width/2, 0, z - height / 2);
        box(w - 2, h, w - 2);
        pop();
    }
}    
angle += 0.1;

}
