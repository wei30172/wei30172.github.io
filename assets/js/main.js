/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
      navClose = document.getElementById("nav-close"),
      navToggle = document.getElementById("nav-toggle")
      

// MENU SHOW
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu")
  })
}

// MENU CLOSE
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu")
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link")

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu")
  navMenu.classList.remove("show-menu")
}

navLink.forEach(link => link.addEventListener("click", linkAction))

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up")
  this.scrollY >= 350 ? scrollUp.classList.add("show-scroll")
                      : scrollUp.classList.remove("show-scroll")
}

window.addEventListener("scroll", scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById("theme-button")
const darkTheme = "dark-theme"
const iconTheme = "ri-sun-line"

const selectedTheme = localStorage.getItem("selected-theme")
const selectedIcon = localStorage.getItem("selected-icon")

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light"
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line"


if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme)
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](iconTheme)
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem("selected-theme", getCurrentTheme())
  localStorage.setItem("selected-icon", getCurrentIcon())
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header")
  this.scrollY >= 50 ? header.classList.add("bg-header")
                     : header.classList.remove("bg-header")
}

window.addEventListener("scroll", scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200
})

sr.reveal(`.home__data`)
sr.reveal(`.home__info div`, { delay: 300, origin: "bottom", interval: 100 })
sr.reveal(`.skills__info`, { origin: "left" })
sr.reveal(`.qualification__info`, { interval: 100 })
sr.reveal(`.projects__content`, { origin: "right", interval: 100 })
sr.reveal(`.footer__container`, { origin: "bottom" })