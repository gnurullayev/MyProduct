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
    product = document.querySelectorAll(".product")
    console.log(product)

changeColor.addEventListener("click", () => {
  body.classList.toggle("body2");
  header.classList.toggle("header2");
  product.classList.toggle("product2")

  logoText.forEach(logoText => {
    logoText.style.color = "#fff"
  })


  navLink.forEach(navLink => {
    navLink.style.color = "rgba(255, 255, 255, 0.8)"

    navLink.addEventListener("mouseover", () => {
      navLink.style.color = "#fff"
    })

    navLink.addEventListener("mouseout", () => {
      navLink.style.color = "rgba(255, 255, 255, 0.8)"
    })
  })


  footerNavLink.forEach(footerNavLink => {
    footerNavLink.style.color = "#fff"
  })


})