const slides_div = document.querySelectorAll(".slide");
const nextBtn_button = document.querySelector(".nextBtn");
const prevBtn_button = document.querySelector(".prevBtn");

slides_div.forEach(function(slide, index){
    slide.style.left = `${index * 100}%`;
});

let counter = 0;
nextBtn_button.addEventListener("click", function(){
    counter++;
    carousel();
});
prevBtn_button.addEventListener("click", function(){
    counter--;
    carousel();
});

function carousel() {
    // prev and next looping thorughout
    // if (counter === slides_div.length) {
    //     counter = 0;
    // }
    // if (counter < 0) {
    //     counter = slides_div.length - 1;
    // }


    // working with buttons
    if (counter < slides_div.length - 1) {
        nextBtn_button.style.display = "block";
    }
    else {
        nextBtn_button.style.display = "none";
    }
    if (counter > 0) {
        prevBtn_button.style.display = "block";
    }
    else {
        prevBtn_button.style.display = "none";
    }


    slides_div.forEach(function(slide){
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}
prevBtn_button.style.display = "none";