import './scripts/navbar.js'
import { clickCard } from './scripts/products-container.js'
import './scripts/product-info.js'

const fecthProducts = async () => {
  const response = await fetch('/api/v1/products')
  const products = await response.json()
  return products
}

const renderProducts = async () => {
  const { products } = await fecthProducts()
  console.log(await products)

  const productInfo = document.querySelector('.products__container')
  productInfo.innerHTML = products.map(product => `
    <div class="product-card__container" id="${product._id}">
      <img class="product-card__img"
        src="${product.images[0]}" alt="${product.description}"
        srcset="">
      <div class="product-card__info">
        <div>
          <p class="product-card__price">$ ${product.price},00</p>
          <h4 class="product-card__name">${product.name}</h4>
        </div>
        <div class="product-card__add-shopping-cart"></div>
      </div>
    </div> `
  ).join('')

  clickCard()
}

(async () => {
  await renderProducts()
})()
