let bars = document.getElementById("bars");



bars.addEventListener("click",()=>{
    let sideNavbar = document.querySelector(".side-navbar");
    sideNavbar.style.transform = "translateX(0)";
     sideNavbar.style.transition = "0.5s";
})


let times = document.getElementById("times");
times.addEventListener("click",()=>{
    let sideNavbar = document.querySelector(".side-navbar");
    sideNavbar.style.transform = "translateX(-100%)";
     sideNavbar.style.transition = "0.5s";
})








