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

  let changeColor = document.querySelector(".button-back"),
      header = document.querySelector(".header"),
      navLink = document.querySelectorAll(".nav__link"),
      logoText = document.querySelectorAll(".logo__text"),
      footerNavLink = document.querySelectorAll(".footer__nav-link"),
      product = document.querySelector(".product"),
      process = document.querySelector(".process")

  changeColor.addEventListener("click", () => {
    body.classList.toggle("body2");
    header.classList.toggle("header2");
    product.classList.toggle("product2");
    process.classList.toggle("process2");


    logoText.forEach(logoText => {
      logoText.classList.toggle("logo__text2")
    })


    navLink.forEach(navLink => {
      navLink.classList.toggle("nav__link2")
    })


    footerNavLink.forEach(footerNavLink => {
      footerNavLink.style.color = "#fff"
  })
})