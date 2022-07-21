let body = document.querySelector("body"),
    nav = document.querySelector(".nav"),
    menu = document.querySelector(".menu"),
    menuClouse = document.querySelector(".menu-clouse");

    menu.addEventListener("click", () => {
       nav.style.left = "0" 
       body.style.overflow = "hidden"
    })

    menuClouse.addEventListener("click", () => {
        nav.style.left = "-100%" 
       body.style.overflow = "scroll"

     })