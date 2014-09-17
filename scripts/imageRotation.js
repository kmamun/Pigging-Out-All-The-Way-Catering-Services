//rotate.js

var prefix = "images/pigging";
     
//Use that prefix to put the proper sequence of image filenames into an array
var imageArray = new Array(18);
for (i=0; i<imageArray.length; i++)
    imageArray[i] = prefix + (i+1) + ".png";

//Rotate the images in the array
var imageCounter = 0;
function rotate()
{
    var imageObject = document.getElementById('placeholder');
    imageObject.src = imageArray[imageCounter];
    ++imageCounter;
    if (imageCounter == 18) imageCounter = 0;
}

function startRotation()
{
    document.getElementById('placeholder').src=imageArray[0];
    setInterval('rotate()', 2000);
}