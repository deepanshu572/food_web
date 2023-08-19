var mnu = document.querySelector(".i1");
var close = document.querySelector(".i2");
var nav = document.querySelector(".resp-nav");

mnu.addEventListener("click", function(){
    nav.style.right = "0%";
})
close.addEventListener("click", function(){
    nav.style.right = "-100%";
})