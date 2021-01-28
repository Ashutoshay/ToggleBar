let x = document.querySelector("#menu-toggle");
let y = document.querySelectorAll(".active-element");
let toggledMenu = x.addEventListener("click", ()=>{
    
     for(let i = 0; i < y.length; i++){
          y[i].classList.toggle("active");
     }
});