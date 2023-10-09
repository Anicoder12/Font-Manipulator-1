function setup()
{
    video = createCapture(VIDEO);
    video.size(450,450);

    canvas = createCanvas(400,400);
    canvas.position(500,260);

    p = ml5.poseNet(video, modelloaded);
    p.on("pose", gotposes);
}

function modelloaded() 
{
console.log("Model has successfully been loaded.")
}

function gotposes(results) 
{
if(results.length > 0) {
console.log(results);
}
}