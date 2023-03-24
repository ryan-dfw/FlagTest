$(document).ready(function(){
    var urlParams = new URLSearchParams(window.location.search);
    // pulls in the number of flags correctly guessed and then the number of flags total used
    var encodedNumFlags = urlParams.get("numFlags");
    var flags = decodeURIComponent(encodedNumFlags);
    var encodedNumCorrect = urlParams.get("numCorrect");
    var score = decodeURIComponent(encodedNumCorrect);
    console.log("flags says " + flags + " and score says " + score);
    
    //does math
    const percent = score/flags*100;
    //looks at your score to do a colour
    let colour;
    if (percent <=33.34) {
        colour = "bad-score";
    }
    else if (percent <= 66.66) {
        colour = "medium-score";
    }
    else {
        colour = "good-score";
    }
    //reports facts
    document.getElementById("score").innerHTML = score;
    document.getElementById("flags").innerHTML = flags;
    document.getElementById("percent").innerHTML = percent;
    console.log("colour is " + colour);
    //does a colour thing
    document.getElementById("message").className = colour;

})