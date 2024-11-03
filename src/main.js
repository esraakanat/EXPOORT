let menuBtn=document.querySelector(".menu-btn");
let closeBtn=document.querySelector(".close-btn");
let menuEl= document.querySelector(".menu");



menuBtn.addEventListener("click",()=>{
    menuEl.classList.add("menu-active");
})
closeBtn.addEventListener("click",()=>{
    menuEl.classList.remove("menu-active");
})