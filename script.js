const IMG_WIDTH = 300;
const IMG_HEIGHT = 160;
const FOLDER_PATH = "./assets/png/"

function drawFlag(filename) {
    
}

$(document).ready(function(){
    console.log("Hello World!");

    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    var filename = FOLDER_PATH + "ad.png"

    // Place image on the canvas
    var img = new Image();
    img.src = filename

    img.width = IMG_WIDTH;
    img.height = IMG_HEIGHT;

    img.onload = function() {
        context.drawImage(img, 0, 0, IMG_WIDTH, IMG_HEIGHT);
    }
});