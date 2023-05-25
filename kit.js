img3 = "";
status = "";
objects = [];

function bck3()
{
    window.location = "index.html";
}

function preload()
{
    img3 = loadImage("kitch.jpeg");
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
    objectDetector.detect(img3, gotResult);
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



function draw()
{
    image(img3, 0, 0, 640, 420);

    if (status != "")
    {
        objectDetector.detect(img3, gotResult);
        for (i=0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status: Object Detected";
            document.getElementById("detect3").innerHTML = "Cocossd Model has detected " + objects.length + " objects";


            fill("#A020F0");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%", objects[i].x - 300 , objects[i].y - 600);
            noFill();
            stroke("#A020F0");
            rect(objects[i].x - 200, objects[i].y - 600, objects[i].width +50, objects[i].height + 50);
        }
    }
}

