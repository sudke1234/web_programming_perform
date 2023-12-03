var logo = document.getElementById("logo");
var nav = document.getElementById("nav");
var li1 = document.getElementById("li1");
var li2 = document.getElementById("li2");
var li3 = document.getElementById("li3");
var li4 = document.getElementById("li4");
var li5 = document.getElementById("li5");

var winH = window.innerHeight;
var art1H = winH;
var art2H = winH*2; 
var art3H = winH*3; 
var art4H = winH*4; 
var art5H = winH*5; 

var tcolor = "white";

 function HandleScroll(){
    var scrY = window.scrollY;
  
    const scrPos = parseInt(scrY);
    console.log(scrPos);

    li1.innerHTML = "⦁";
    li2.innerHTML = "⦁";
    li3.innerHTML = "⦁";
    li4.innerHTML = "⦁";
    li5.innerHTML = "⦁";

    li1.style.color = tcolor;
    li2.style.color = tcolor;
    li3.style.color = tcolor;
    li4.style.color = tcolor;
    li5.style.color = tcolor;

    if (scrPos>=0 && scrPos<=art1H) {
      logo.style.color = "white";
      tcolor = "white";
      li1.style.color = "pink";
      li1.innerHTML = "✿";
    }
    else if (scrPos>art1H && scrPos<=art3H) {
      logo.style.color = "rgb(88, 121, 52)";
      tcolor = "rgb(88, 121, 52)";
      li2.style.color = "pink";
      li2.innerHTML = "✿";
    }
    else if (scrPos>art3H && scrPos<=art4H) {
      logo.style.color = "rgb(88, 121, 52)";
      tcolor = "rgb(88, 121, 52)";
      li3.style.color = "pink";
      li3.innerHTML = "✿";
    }
    else if (scrPos>art4H && scrPos<=art5H) {
      logo.style.color = "white";
      tcolor = "white";
      li4.style.color = "pink";
      li4.innerHTML = "✿";
    }
    else if (scrPos>art5H){
      logo.style.color = "rgb(88, 121, 52)";
      tcolor = "rgb(88, 121, 52)";
      li5.style.color = "pink";
      li5.innerHTML = "✿";
    }

  }

  window.addEventListener("scroll", HandleScroll);
  window.addEventListener("click", HandleScroll);