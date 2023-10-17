$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const encodedNumFlags = urlParams.get("numFlags");
    const encodedNumCorrect = urlParams.get("numCorrect");
    const flags = decodeURIComponent(encodedNumFlags);
    const score = decodeURIComponent(encodedNumCorrect);
    const percent = (score / flags) * 100;
    const colour = percent <= 33.34 ? "bad-score" : percent <= 66.66 ? "medium-score" : "good-score";
    document.getElementById("score").innerHTML = score;
    document.getElementById("flags").innerHTML = flags;
    document.getElementById("percent").innerHTML = `${percent}`;
    document.getElementById("message").className = colour;
});
