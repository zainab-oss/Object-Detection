img4 = "";
status = "";
objects = [];

function bck4()
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
    objectDetector.detect(img4, gotResult);
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
    img4 = loadImage("bath.jpeg");
}

function draw()
{
    image(img4, 0, 0, 640, 420);

    if (status != "")
    {
        objectDetector.detect(img4, gotResult);
        for (i=0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status: Object Detected";
            document.getElementById("detect4").innerHTML = "Cocossd Model has detected " + objects.length + " objects";


            fill("#A020F0");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%", objects[i].x - 500, objects[i].y - 500);
            noFill();
            stroke("#A020F0");
            rect(objects[i].x - 500, objects[i].y - 500, objects[i].width + 40, objects[i].height + 50);
        }
    }
}

