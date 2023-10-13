const startBtn = document.querySelector("#startBtn");
document.addEventListener("DOMContentLoaded", function () {
    const buttonContainer = document.getElementById("buttonContainer");
    let numFlags = 5;

    buttonContainer.addEventListener("click", function (event) {
        const target = event.target;
        numFlags = target.id === "select5Btn"
            ? 5
            : target.id === "select20Btn"
                ? 20
                : target.id === "select100Btn"
                    ? 100
                    : target.id === "selectAllBtn"
                        ? 207
                        : numFlags;
    });

    startBtn.addEventListener("click", function () {
        let encodedNumFlags = encodeURIComponent(numFlags.toString());
        window.location.href = "test.html?numFlags=" + encodedNumFlags;
    });
});

