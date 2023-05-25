img1 = "";
status = "";
objects = [];

function bck1()
{
    window.location = "index.html";
}

function setup()
{
    canvas = createCanvas(520, 380);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded()
{
    console.log("ModelLoaded");
    status = true;
    objectDetector.detect(img1, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
    objects = results;
}
function preload()
{
    img1 = loadImage("hall.jpeg");
}

function draw()
{
    image(img1, 0, 0, 520, 380);

    if (status != "")
    {
        objectDetector.detect(img1, gotResult);
        for (i=0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status: Objects Detected";
            document.getElementById("detect1").innerHTML = "Cocossd Model has detected " + objects.length + " objects";

            fill("#A020F0");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%", objects[i].x - 500, objects[i].y) - 450;
            noFill();
            stroke("#A020F0");
            rect(objects[i].x - 500, objects[i].y - 450, objects[i].width + 100, objects[i].height + 50);
        }
    }
}

