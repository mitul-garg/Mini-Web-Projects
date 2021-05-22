const btns = document.querySelectorAll(".btn");
const watch = document.getElementById("watch");
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
            clearTimeout(h);
        }
        if (classList.contains("heartrate")) {
            document.querySelector(".time-watch").innerHTML = "78";
            clearTimeout(t);
            heartRate();
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
var h;
function heartRate() {
    document.querySelector(".time-watch").innerHTML++;
    h = setTimeout(heartRate, 1000);
    if (document.querySelector(".time-watch").innerHTML == 85) {
        clearTimeout(h);
        decreaseRate();
    }
}
function decreaseRate() {
    document.querySelector(".time-watch").innerHTML--;
    h = setTimeout(decreaseRate, 1000);
    if (document.querySelector(".time-watch").innerHTML == 75) {
        clearTimeout(h);
        heartRate();
    }
}