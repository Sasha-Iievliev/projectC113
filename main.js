function preload(){
    google = loadImage("https://i.postimg.cc/Kv94VcB2/viber-image-2023-11-02-21-09-08-738.jpg")
   }

function setup(){
    canvas = createCanvas(640, 420)
    canvas.position(200, 250);
}

function draw(){
    image(google, 220, 150, 200, 150);

    fill("green");
    stroke("green");
    rect( 20, 20, 600, 40)
    rect( 20, 20, 40, 380)
    rect( 20, 360, 600, 40)
    rect( 580, 20, 40, 380)
    fill("red")
    stroke("red")
    circle( 40, 40, 60)
    circle( 40, 380, 60)
    circle( 600, 40, 60)
    circle( 600, 380, 60)
}

function take_snapshot(){
    save("mypic.png");
}
