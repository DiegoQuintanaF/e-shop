const clickCard = () => {
  const productCards = document.querySelectorAll('.product-card__container')
  const productInfo = document.querySelector('.product-info__container')

  const link = (card) => {
    return () => {
      const id = card.id
      window.location.href = `/#click-in-${id}`
      productInfo.querySelector('.product-info__img').src = card.children[0].src
      productInfo.querySelector('.product-info__img').alt = card.children[0].alt

      productInfo.querySelector('.product-info__bottom-name').textContent = card.children[1].children[0].children[1].textContent
      productInfo.querySelector('.product-info__bottom-price').textContent = card.children[1].children[0].children[0].textContent
      productInfo.querySelector('.product-info__bottom-description').innerHTML = productInfo.querySelector('.product-info__img').alt
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
}

export { clickCard }
