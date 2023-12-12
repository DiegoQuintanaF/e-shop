import express from 'express'
import config from './config.js'
import { errorHandler, notFoundHandler } from './middlewares/errorHandler.js'
import { routerApp } from './network/routes.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

routerApp(app)

app.all('*', notFoundHandler)
app.use(errorHandler)

app.listen(config.port, () => {
  console.log('Example app listening on port 3000!')
})
