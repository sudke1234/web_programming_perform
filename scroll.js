// const rootStyles = window.getComputedStyle(document.documentElement);
// const logo = document.querySelector('logo');

// const logoColor = rootStyles.getPropertyValue('--basic-font-logo-color');

var logo = document.getElementById("logo");

var winH = window.innerHeight;
var art1H = winH;
var art2H = winH*2; 
var art3H = winH*3; 
var art4H = winH*4; 
var art5H = winH*5; 

 function HandleScroll(){
    var scrY = window.scrollY;
  
    const scrPos = parseInt(scrY);
    console.log(scrPos);

    if (scrPos>=0 && scrPos<=art1H)  logo.style.color = "white";
    else if (scrPos>art1H && scrPos<=art2H)  logo.style.color = "rgb(88, 121, 52)";
    else if (scrPos>art2H && scrPos<=art3H)  logo.style.color = "white";
    else if (scrPos>art3H && scrPos<=art4H)  logo.style.color = "rgb(88, 121, 52)";
    else if (scrPos>art4H && scrPos<=art5H)  logo.style.color = "white";

  }

  window.addEventListener("scroll", HandleScroll);