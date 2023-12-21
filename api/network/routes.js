import express from 'express'
import { routerPage } from '../components/page/page.network.js'
import { routerSearch } from '../components/search/search.network.js'
import { routerOrder } from '../components/order/order.network.js'

export const routerApp = (app) => {
  const routerApi = express.Router()
  routerApi.use('/order', routerOrder)
  routerApi.use('/search', routerSearch)

  app.use('/', routerPage)
  app.use('/api/v1', routerApi)
}
