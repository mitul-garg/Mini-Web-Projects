const btns = document.querySelectorAll(".btn");
const body = document.body;

body.addEventListener("keydown", function(e){
    keyCode = e.keyCode;
    switch(keyCode) {
        case 65:
            document.getElementById("clap").play();
            document.querySelector(".clap").style.border = "5px yellow solid"
            break;
        case 83:
            document.getElementById("hihat").play();
            document.querySelector(".hihat").style.border = "5px yellow solid"
            break;
        case 68:
            document.getElementById("kick").play();
            document.querySelector(".kick").style.border = "5px yellow solid"
            break;
        case 70:
            document.getElementById("openhat").play();
            document.querySelector(".openhat").style.border = "5px yellow solid"
            break;
        case 71:
            document.getElementById("boom").play();
            document.querySelector(".boom").style.border = "5px yellow solid"
            break;
        case 72:
            document.getElementById("ride").play();
            document.querySelector(".ride").style.border = "5px yellow solid"
            break;
        case 74:
            document.getElementById("snare").play();
            document.querySelector(".snare").style.border = "5px yellow solid"
            break;
        case 75:
            document.getElementById("tom").play();
            document.querySelector(".tom").style.border = "5px yellow solid"
            break;
        case 76:
            document.getElementById("tink").play();
            document.querySelector(".tink").style.border = "5px yellow solid"
            break;
    }
})
body.addEventListener("keyup",function(){
    document.querySelectorAll(".btn").forEach(function(b){
        b.style.border = "none";
    }) 
})

// On Mobile Keyboard Events won't work so adding event listeners on the buttons separately
btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        keyCode = e.currentTarget.textContent;
        switch(keyCode) {
            case 'A':
                document.getElementById("clap").play();
                break;
            case 'S':
                document.getElementById("hihat").play();
                break;
            case 'D':
                document.getElementById("kick").play();
                break;
            case 'F':
                document.getElementById("openhat").play();
                break;
            case 'G':
                document.getElementById("boom").play();
                break;
            case 'H':
                document.getElementById("ride").play();
                break;
            case 'J':
                document.getElementById("snare").play();
                break;
            case 'K':
                document.getElementById("tom").play();
                break;
            case 'L':
                document.getElementById("tink").play();
                break;
        }
    })
}) 