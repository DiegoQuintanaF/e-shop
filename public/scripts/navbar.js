const icon = document.querySelector('.navbar__menu-icon')
const menu = document.querySelector('.navbar__menu')
const exit = document.querySelector('.navbar__menu-close-icon')

icon.addEventListener('click', () => {
  menu.classList.toggle('navbar__menu-active')
})

exit.addEventListener('click', () => {
  menu.classList.toggle('navbar__menu-active')
})
