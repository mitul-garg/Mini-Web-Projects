const output = document.querySelector(".output");
const body = document.body;
const keys = document.querySelectorAll(".key");
let input = "";

body.addEventListener("keypress", function(e){
    let i = e.keyCode;
    console.log(i);
    switch(i) {
        case 67:
            input = "";
            output.textContent = input;
            break;
        case 99:
            input = "";
            output.textContent = input;
            break;
        case 61:
            output.textContent = eval(input);
            input = output.textContent;
            break;
        case 13:
            output.textContent = eval(input);
            input = output.textContent;
            break;
        case 42:
            input += "*";
            output.textContent = input;
            break;
        case 43:
            input += "+";
            output.textContent = input;
            break;
        case 45:
            input += "-";
            output.textContent = input;
            break;
        case 47:
            input += "/";
            output.textContent = input;
            break;
        case 48:
            input += 0;
            output.textContent = input;
            break;
        case 49:
            input += 1;
            output.textContent = input;
            break;
        case 50:
            input += 2;
            output.textContent = input;
            break;
        case 51:
            input += 3;
            output.textContent = input;
            break;
        case 52:
            input += 4;
            output.textContent = input;
            break;
        case 53:
            input += 5;
            output.textContent = input;
            break;
        case 54:
            input += 6;
            output.textContent = input;
            break;
        case 55:
            input += 7;
            output.textContent = input;
            break;
        case 56:
            input += 8;
            output.textContent = input;
            break;
        case 57:
            input += 9;
            output.textContent = input;
            break;
    }
})

body.addEventListener("keydown", function(e){
    let i = e.keyCode;
    switch(i) {
        case 8:
            input = input.substring(0,input.length-1);
            output.textContent = input;
            break;
        
    }
})

keys.forEach(function(btn){
    btn.addEventListener("click",function(e){
        let k = e.target.textContent;
        switch(k) {
            case "C":
                input = "";
                output.textContent = input;
                break;
            case "=":
                output.textContent = eval(input);
                input = output.textContent;
                break;
            case "*":
                input += "*";
                output.textContent = input;
                break;
            case "+":
                input += "+";
                output.textContent = input;
                break;
            case "-":
                input += "-";
                output.textContent = input;
                break;
            case "/":
                input += "/";
                output.textContent = input;
                break;
            case "0":
                input += 0;
                output.textContent = input;
                break;
            case "1":
                input += 1;
                output.textContent = input;
                break;
            case "2":
                input += 2;
                output.textContent = input;
                break;
            case "3":
                input += 3;
                output.textContent = input;
                break;
            case "4":
                input += 4;
                output.textContent = input;
                break;
            case "5":
                input += 5;
                output.textContent = input;
                break;
            case "6":
                input += 6;
                output.textContent = input;
                break;
            case "7":
                input += 7;
                output.textContent = input;
                break;
            case "8":
                input += 8;
                output.textContent = input;
                break;
            case "9":
                input += 9;
                output.textContent = input;
                break;
        }
    })
})