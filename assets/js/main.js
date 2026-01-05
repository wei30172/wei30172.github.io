/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
      navClose = document.getElementById("nav-close"),
      navToggle = document.getElementById("nav-toggle")
      

// MENU SHOW
if (navToggle) {
  navToggle.addEventListener("click", () => {
    window.requestAnimationFrame(() => {
      navMenu.classList.add("show-menu")
    })
  })
}

// MENU CLOSE
if (navClose) {
  navClose.addEventListener("click", () => {
    window.requestAnimationFrame(() => {
      navMenu.classList.remove("show-menu")
    })
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link")

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu")
  setTimeout(() => {
    navMenu.classList.remove("show-menu")
  }, 100)
}

navLink.forEach(link => link.addEventListener("click", linkAction))

/*=============== SCROLL EVENTS ===============*/
let isScrolling = false;

const handleScroll = () => {
  if (!isScrolling) {
    window.requestAnimationFrame(() => {
      const scrollY = window.pageYOffset;

      // SHOW SCROLL UP
      const scrollUp = document.getElementById("scroll-up")
      if (scrollUp) {
        scrollY >= 350 ? scrollUp.classList.add("show-scroll")
                        : scrollUp.classList.remove("show-scroll")
      }

      // CHANGE BACKGROUND HEADER
      const header = document.getElementById("header")
      if (header) {
        if (scrollY >= 50) {
          if (!header.classList.contains("bg-header")) header.classList.add("bg-header")
        } else {
          if (header.classList.contains("bg-header")) header.classList.remove("bg-header")
        }
      }
      isScrolling = false;
    })
    isScrolling = true;
  }
}

window.addEventListener("scroll", handleScroll, { passive: true });

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

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
})

sr.reveal(`.home__data`)

sr.reveal(`.home__info div`, { 
    delay: 300, 
    origin: "bottom", 
    interval: 150, 
    scale: 0.95 
})

sr.reveal(`.skills__info`, { 
    delay: 300,
    origin: "left"
})

sr.reveal(`.qualification__info`, { 
    delay: 300,
    origin: "bottom",
    interval: 200, 
    distance: "40px"
})

sr.reveal(`.projects__content`, { 
    delay: 300,
    origin: "right", 
    interval: 200,
})

sr.reveal(`.footer__container`, { 
    origin: "bottom" 
})