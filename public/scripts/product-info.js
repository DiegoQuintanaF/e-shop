const productInfo = document.querySelector('.product-info__container')
const productInfoClose = productInfo.querySelector('.product-info__close-icon')

productInfo.addEventListener('click', e => {
  const dialogDimensions = productInfo.getBoundingClientRect()
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    productInfo.close()
  }
})

productInfoClose.addEventListener('click', () => {
  productInfo.close()
})
