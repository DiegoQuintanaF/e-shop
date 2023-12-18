const productCards = document.querySelectorAll('.product-card__container')
const productInfo = document.querySelector('.product-info__container')

const link = (e) => {
  return () => {
    const id = e.id
    console.log(id)
    window.location.href = `/#click-in-${id}`
    productInfo.showModal()
    productInfo.scrollTo(0, 0)
  }
}

for (const productCard of productCards) {
  const title = productCard.children[0]
  title.addEventListener('click', link(productCard))

  const tit = productCard.children[1].children[0]
  tit.addEventListener('click', link(productCard))
}
