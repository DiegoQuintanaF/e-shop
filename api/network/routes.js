import express from 'express'
import { routerPage } from '../components/page/page.network.js'
import { routerSearch } from '../components/search/search.network.js'
import { routerOrder } from '../components/orders/order.network.js'
import { routerProducts } from '../components/products/products.network.js'

export const routerApp = (app) => {
  const routerApi = express.Router()
  routerApi.use('/orders', routerOrder)
  routerApi.use('/search', routerSearch)
  routerApi.use('/products', routerProducts)

  app.use('/', routerPage)
  app.use('/api/v1', routerApi)
}
