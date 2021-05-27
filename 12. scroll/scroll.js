// set date
const date_span = document.getElementById("date");
date_span.innerHTML = new Date().getFullYear();

// close links
const navToggle_button = document.querySelector(".nav-toggle");
const linksContainer_div = document.querySelector(".links-container");
const links_ul = document.querySelector(".links");

navToggle_button.addEventListener("click", function(){
    // linksContainer_div.classList.toggle("show-links"); // for pre-known fixed height
    const containerHeight = linksContainer_div.getBoundingClientRect().height;
    const linksHeight = links_ul.getBoundingClientRect().height;
    if (containerHeight === 0) {
        linksContainer_div.style.height = `${linksHeight}px`;
    }
    else {
        linksContainer_div.style.height = 0;
    }
})

// fixed navbar
const navbar_nav = document.getElementById("nav");
const topLink_a = document.querySelector(".top-link");
window.addEventListener("scroll", function(){
    const scrollHeight = this.window.pageYOffset;
    const navHeight = navbar_nav.getBoundingClientRect().height;
    if (scrollHeight > navHeight) 
        navbar_nav.classList.add("fixed-nav");
    else 
        navbar_nav.classList.remove("fixed-nav");

    if (scrollHeight > 500)
        topLink_a.classList.add("show-link");
    else
        topLink_a.classList.remove("show-link");
})

// smooth scroll
const scrollLinks_a = document.querySelectorAll(".scroll-link");

scrollLinks_a.forEach(function(link){
    link.addEventListener("click", function(e){
        // prevents default behavior of the event
        e.preventDefault();

        // navigate to specific section
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        // calculate the heights
        const navHeight = navbar_nav.getBoundingClientRect().height;
        const containerHeight = linksContainer_div.getBoundingClientRect().height;
        const fixedNav = navbar_nav.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;

        if (!fixedNav)
            position -= navHeight;
        
        if (navHeight > 82) 
            position += containerHeight;

        console.log(position);
        window.scrollTo({
            left:0, 
            top:position,
        })
        linksContainer_div.style.height = 0;
    })
})