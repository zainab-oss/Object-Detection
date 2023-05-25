img5 = "";
status = "";
objects = [];

function bck5()
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
    objectDetector.detect(img5, gotResult);
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
    img5 = loadImage("balcon.jpeg");
}

function draw()
{
    image(img5, 0, 0, 640, 420);

    if (status != "")
    {
        objectDetector.detect(img5, gotResult);
        for (i=0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status: Object Detected";
            document.getElementById("detect5").innerHTML = "Cocossd Model has detected " + objects.length + " objects";

            fill("#A020F0");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%", objects[i].x - 500, objects[i].y - 500);
            noFill();
            stroke("#A020F0");
            rect(objects[i].x - 500, objects[i].y - 500, objects[i].width + 50, objects[i].height + 20);
        }
    }
}
