document.addEventListener("DOMContentLoaded", function() {

var button5 = document.getElementById("select5Btn");
var button20 = document.getElementById("select20Btn");
var button100 = document.getElementById("select100Btn");
var buttonAll = document.getElementById("selectAllBtn");

    let numFlags = 5;

    button5.addEventListener("click", function() {
    numFlags = 5;
});
button20.addEventListener("click", function() {
    numFlags = 20;
});
button100.addEventListener("click", function() {
    numFlags = 100;
});
buttonAll.addEventListener("click", function() {
    numFlags = 207;
});

    const startBtn = document.getElementById("startBtn");
    startBtn.addEventListener("click", function() {
        let encodedNumFlags = encodeURIComponent(numFlags.toString());
        window.location.href = "test.html?numFlags=" + encodedNumFlags;
});

});
