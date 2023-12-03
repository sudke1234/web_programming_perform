var article_1PosFromTop = article_1.getBoundingClientRect().top;
var logo = document.getElementsByClassName("logo");

function handleScroll() {
    var scrollPos = window.scrollY;
    var winH = window.innerHeight;
    var absolPos = article_1PosFromTop - scrollPos;
    
    if (winH > article_1PosFromTop) {
        logo.style.color = "red";
    }
    
    window.addEventListener("scroll", handleScroll);
}