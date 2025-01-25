const menuBox = document.querySelectorAll(".dishes");
window.addEventListener("scroll",()=>{
    menuBox.forEach((box)=>{
        if(pageYOffset > box.offsetTop - box.offsetHeight - 200){
                box.style.animationName = "scroll-menu";
        }
    })
    
})