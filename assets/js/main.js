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

/*=============== DARK LIGHT THEME ===============*/ 


/*=============== CHANGE BACKGROUND HEADER ===============*/