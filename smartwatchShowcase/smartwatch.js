const btns = document.querySelectorAll(".btn");
const watch = document.querySelector(".watch");
startTime();
btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const classList = e.currentTarget.classList;
        if (classList.contains("red"))
            watch.src = "red.png"
        if (classList.contains("pink"))
            watch.src = "pink.png"
        if (classList.contains("purple"))
            watch.src = "purple.png"
        if (classList.contains("black"))
            watch.src = "black.png"
        if (classList.contains("blue"))
            watch.src = "blue.png"
        if (classList.contains("time")) {
            startTime();
        }
        if (classList.contains("heartrate")) {
            document.querySelector(".time-watch").innerHTML = "<img src='heart.png' id='heart'/><br>78";

            clearTimeout(t);
        }
    })
})
var t;
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector(".time-watch").innerHTML =
    h + ":" + m + ":" + s;
    t = setTimeout(startTime, 1000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}