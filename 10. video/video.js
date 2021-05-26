const btn_button = document.querySelector(".switch-btn");
const video_video = document.querySelector(".video-container");
const preloader_div = document.querySelector(".preloader");

btn_button.addEventListener("click", function() {
    if (!btn_button.classList.contains("slide")) {
        btn_button.classList.add("slide");
        video_video.pause();
    }
    else {
        btn_button.classList.remove("slide");
        video_video.play();
    }
})

// preloader
window.addEventListener("load", function(){
    preloader_div.classList.add("hide-preloader");
})