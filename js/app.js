document.getElementById('icons').addEventListener("click", () => {
  document.getElementById('navbar').classList.toggle("active")
})

document.getElementById('cross').addEventListener("click", () => {
  document.getElementById('navbar').classList.remove("active")
})

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(navLink => {
  navLink.addEventListener("click", () => {
    document.getElementById('navbar').classList.remove("active")
  })
})


