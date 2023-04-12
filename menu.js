let bar = document.querySelector(".fa-bars");
let close = document.querySelector(".fa-times");
let responsiveMenu = document.querySelector(".responsive-menu");
bar.addEventListener("click",openMenu);
close.addEventListener("click",closeMenu);
function openMenu(){
    responsiveMenu.style.display = "block";
    bar.style.display = "none";
    close.style.display = "block";
}
function closeMenu(){
    responsiveMenu.style.display = "none";
    bar.style.display = "block";
    close.style.display = "none";
}


















