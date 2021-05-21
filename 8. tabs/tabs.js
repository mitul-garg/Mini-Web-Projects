const btns = document.querySelectorAll('.btn');
const tabs = document.querySelector('.tabs');
const articles = document.querySelectorAll('.content');

tabs.addEventListener("click", function(e){
    const id = e.target.dataset.id;
    if (id) {
        btns.forEach(function(btn){
            btn.classList.remove("active");
        });
        e.target.classList.add("active");

        articles.forEach(function(article){
            article.classList.remove("active");
        })
        document.getElementById(id).classList.add("active");
    }
})