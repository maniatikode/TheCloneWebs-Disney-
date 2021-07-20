window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("top", window.scrollY > 1000);
})
window.addEventListener("scroll", function(){
    var logo = document.querySelector("figure");
    logo.classList.toggle("logo", window.scrollY > 1000);
})
window.addEventListener("scroll", function(){
    var boton = document.querySelector("a");
    boton.classList.toggle("btn_1", window.scrollY > 1000);
})