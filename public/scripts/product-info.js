const cartIcon = document.querySelector('.navbar__shopping-cart')
const menu = document.querySelector('.product-info__container')
// const exit = document.querySelector('.navbar__menu-close-icon')

cartIcon.addEventListener('click', () => {
  menu.classList.toggle('product-info__container-active')
})

// exit.addEventListener('click', () => {
//   menu.classList.toggle('navbar__menu-active')
// })
