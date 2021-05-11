let counter = 0;

const count = document.querySelector("#count");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) 
            counter--;
        else if (styles.contains("reset"))
            counter = 0;
        else
            counter++;
        
        if (counter < 0)
            count.style.color = "red"
        else if (counter > 0)
            count.style.color = "green"
        else    
            count.style.color = "black"

        count.textContent = counter;
    })
})