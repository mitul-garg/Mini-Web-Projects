const openModal = document.querySelector(".open-modal");
const modal = document.querySelector(".modal-container");
const closeBtn = document.querySelector(".close-modal");

openModal.addEventListener("click", function(){
    modal.classList.toggle("show-modal");
})

closeBtn.addEventListener("click", function(){
    modal.classList.remove("show-modal");
})