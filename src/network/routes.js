import express from 'express'
import { search } from '../components/search/search.model.js'

export const routerApp = (app) => {
  const views = express.Router()
  const api = express.Router()

  app.use('/', routerViews(views))
  app.use('/api/v1', routerApi(api))
}

function routerViews(router) {
  router.get('/', (req, res) => {
    res.send('Hello World!')
  })

  return router
}

function routerApi(router) {
  router.get('/search', search)

  return router
}
