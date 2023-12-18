const productCards = document.querySelectorAll('.product-card__container')

const link = (e) => {
  return () => {
    const id = e.id
    console.log(id)
    window.location.href = `/#click-in-${id}`
  }
}

console.log(productCards[0].children)

for (const productCard of productCards) {
  console.log(productCard)
  const title = productCard.children[0]
  title.addEventListener('click', link(productCard))

  const tit = productCard.children[1].children[0]
  tit.addEventListener('click', link(productCard))
}
