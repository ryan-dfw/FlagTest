var button20 = document.getElementById("select20Btn");
var button50 = document.getElementById("select50Btn");
var button100 = document.getElementById("select100Btn");
var buttonAll = document.getElementById("selectAllBtn");

var numFlags;

button20.addEventListener("click", function() {
    numFlags = 20;
});
button50.addEventListener("click", function() {
    numFlags = 50;
});
button100.addEventListener("click", function() {
    numFlags = 100;
});
buttonAll.addEventListener("click", function() {
    numFlags = 207;
});

var startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", function() {
    var encodedNumFlags = encodeURIComponent(numFlags.toString());
    window.location.href = "test.html?numFlags=" + encodedNumFlags;
});