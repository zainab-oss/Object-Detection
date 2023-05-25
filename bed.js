img2 = "";
status = "";
objects = [];

function bck2()
{
    window.location = "index.html";
}


function setup()
{
    canvas = createCanvas(600, 380);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded()
{
    console.log("ModelLoaded");
    status = true;
    objectDetector.detect(img2, gotResult);
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
    img2 = loadImage("bedr.jpeg");
}

function draw()
{
    image(img2, 0, 0, 640, 420);

    if (status != "")
    {
        objectDetector.detect(img2, gotResult);
        for (i=0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status: Object Detected";
            document.getElementById("detect2").innerHTML = "Cocossd Model has detected " + objects.length + " objects";

            fill("#A020F0");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%", objects[i].x - 500, objects[i].y - 500);
            noFill();
            stroke("#A020F0");
            rect(objects[i].x - 500, objects[i].y - 500, objects[i].width + 50, objects[i].height + 50 );
        }
    }
}
