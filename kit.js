function bck3()
{
    window.location = "index.html";
}


function setup()
{
    canvas = createCanvas(600, 320);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
}

function preload()
{
    img = loadImage("kitch.jpeg");
}

function draw()
{
    image(img, 0, 0, 600, 320);
}

